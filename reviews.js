// ---------------------------------------------------------------------------
// Shared reviews (visible to everyone) use Firebase Firestore, which is free
// for a small site. Fill in the four values below after the setup in README.md.
// These web config values are not secret; the security rules protect the data.
// While they are empty, the site shows the reviews listed below and sends new
// reviews to your email through Formspree instead.
// ---------------------------------------------------------------------------
const FIREBASE_CONFIG = {
    apiKey: '',
    authDomain: '',
    projectId: '',
    appId: ''
};

// Fallback reviews, used only while Firebase is not set up.
// type: 'movie', 'game', 'anime' or 'series' | rating: 1 to 5 | date: YYYY-MM-DD
// The poster is found automatically when the title matches a title in catalog.js.
const REVIEWS = [
    // {
    //     type: 'movie',
    //     title: 'Movie Name',
    //     rating: 5,
    //     name: 'Your name',
    //     date: '2026-10-19',
    //     text: 'Your review.'
    // }
];

(function () {
    const list = document.getElementById('reviewList');
    const filters = document.querySelectorAll('.filter');
    const form = document.getElementById('reviewForm');
    if (!list) return;

    const live = Boolean(FIREBASE_CONFIG.apiKey && FIREBASE_CONFIG.projectId);
    let items = live ? [] : REVIEWS.slice();
    let loading = live;
    let current = 'all';
    let db = null;

    // Lets the site search read the current reviews
    window.getReviews = () => items;


    function addPoster(card, poster, titleText) {
        if (!/^(posters\/|https:\/\/)/i.test(poster || '')) return;
        const img = document.createElement('img');
        img.className = 'poster';
        img.src = poster;
        img.alt = titleText + ' poster';
        img.width = 110;
        img.height = 165;
        img.loading = 'lazy';
        if (typeof attachPosterFallback === 'function') {
            attachPosterFallback(img, () => { img.remove(); card.classList.remove('has-poster'); });
        }
        const body = document.createElement('div');
        body.className = 'card-body';
        while (card.firstChild) body.appendChild(card.firstChild);
        card.classList.add('has-poster');
        card.append(img, body);
    }

    function render() {
        list.textContent = '';

        if (loading) {
            const msg = document.createElement('p');
            msg.className = 'empty';
            msg.textContent = 'Loading reviews...';
            list.appendChild(msg);
            return;
        }

        const shown = items.filter(r => current === 'all' || r.type === current);

        if (shown.length === 0) {
            const empty = document.createElement('p');
            empty.className = 'empty';
            empty.textContent = 'No reviews yet. Be the first to write one below.';
            list.appendChild(empty);
            return;
        }

        shown.forEach(r => {
            const type = ['movie', 'game', 'anime', 'series'].includes(r.type) ? r.type : 'game';
            const rating = Math.min(5, Math.max(1, parseInt(r.rating, 10) || 1));

            const card = document.createElement('article');
            card.className = 'review-card';

            const top = document.createElement('div');
            top.className = 'review-top';

            const badge = document.createElement('span');
            badge.className = 'badge ' + type;
            badge.textContent = type.charAt(0).toUpperCase() + type.slice(1);

            const stars = document.createElement('span');
            stars.className = 'stars';
            stars.setAttribute('role', 'img');
            stars.setAttribute('aria-label', rating + ' out of 5 stars');
            stars.textContent = '\u2605'.repeat(rating) + '\u2606'.repeat(5 - rating);

            top.append(badge, stars);

            const title = document.createElement('h3');
            title.textContent = r.title;

            const text = document.createElement('p');
            text.textContent = r.text;

            const meta = document.createElement('p');
            meta.className = 'meta';
            meta.textContent = 'By ' + r.name + ' on ' + r.date;

            card.append(top, title, text, meta);
            addPoster(card, r.poster || (typeof findCatalogPoster === 'function' ? findCatalogPoster(type, r.title) : ''), r.title);
            list.appendChild(card);
        });
    }

    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            filters.forEach(b => {
                const on = b === btn;
                b.classList.toggle('active', on);
                b.setAttribute('aria-pressed', on);
            });
            current = btn.dataset.filter;
            render();
        });
    });

    render();
    if (!live) return;

    // ---- Shared mode (Firebase) ----
    // script.js looks for form[data-ajax] right after this file runs,
    // so the Formspree handler is switched off here, before it starts.
    form.removeAttribute('data-ajax');

    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const s = document.createElement('script');
            s.src = src;
            s.onload = resolve;
            s.onerror = reject;
            document.head.appendChild(s);
        });
    }

    async function start() {
        try {
            const base = 'https://www.gstatic.com/firebasejs/10.14.1/';
            await loadScript(base + 'firebase-app-compat.js');
            await loadScript(base + 'firebase-firestore-compat.js');
            firebase.initializeApp(FIREBASE_CONFIG);
            db = firebase.firestore();

            db.collection('reviews').orderBy('createdAt', 'desc').limit(100).onSnapshot(snap => {
                items = snap.docs.map(d => {
                    const x = d.data();
                    const t = x.createdAt && x.createdAt.toDate ? x.createdAt.toDate() : new Date();
                    return {
                        type: x.type, title: x.title, rating: x.rating,
                        name: x.name, text: x.text, date: t.toISOString().slice(0, 10)
                    };
                });
                loading = false;
                render();
            }, err => {
                console.warn('Could not load reviews:', err);
                items = REVIEWS.slice();
                loading = false;
                render();
            });
        } catch (err) {
            console.warn('Could not start Firebase:', err);
            items = REVIEWS.slice();
            loading = false;
            render();
        }
    }
    start();

    const status = form.querySelector('.form-status');
    const button = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        status.className = 'form-status';

        // Hidden trap field: real people leave it empty, bots fill it in.
        if (form.elements['_gotcha'] && form.elements['_gotcha'].value) {
            form.reset();
            return;
        }

        let last = 0;
        try { last = Number(localStorage.getItem('lixora-last-review')) || 0; } catch (err) {}
        if (Date.now() - last < 60000) {
            status.className = 'form-status error';
            status.textContent = 'Please wait a minute before posting another review.';
            return;
        }

        if (!db) {
            status.className = 'form-status error';
            status.textContent = 'Reviews are not available right now. Please try again later.';
            return;
        }

        button.disabled = true;
        status.textContent = 'Posting...';

        try {
            await db.collection('reviews').add({
                type: ['movie', 'game', 'anime', 'series'].find(t => t === form.elements['type'].value.toLowerCase()) || 'game',
                title: form.elements['title'].value.trim(),
                rating: parseInt(form.elements['rating'].value, 10),
                name: form.elements['name'].value.trim(),
                text: form.elements['review'].value.trim(),
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            status.textContent = 'Thank you! Your review is now live.';
            form.reset();
            try { localStorage.setItem('lixora-last-review', String(Date.now())); } catch (err) {}
        } catch (err) {
            status.className = 'form-status error';
            status.textContent = 'Sorry, your review could not be posted. Please try again.';
        } finally {
            button.disabled = false;
        }
    });
})();
