// Forms: send to Formspree and show a status message
document.querySelectorAll('form[data-ajax]').forEach(form => {
    const status = form.querySelector('.form-status');
    const button = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        button.disabled = true;
        status.className = 'form-status';
        status.textContent = 'Sending...';

        try {
            const res = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { Accept: 'application/json' }
            });
            if (!res.ok) throw new Error('Request failed');
            status.textContent = form.dataset.success;
            form.reset();
        } catch (err) {
            status.className = 'form-status error';
            status.textContent = 'Sorry, this could not be sent. Please try again.';
        } finally {
            button.disabled = false;
        }
    });
});

// Site search: finds library titles, reviews and news. Works for every visitor.
(function () {
    const input = document.getElementById('siteSearch');
    const box = document.getElementById('searchResults');
    if (!input || !box) return;

    const TYPES = ['movie', 'game', 'anime', 'series'];
    const LIB = { movie: 'movies', game: 'games', anime: 'anime', series: 'series' };
    const norm = s => String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

    function collect() {
        const out = [];
        TYPES.forEach(t => (CATALOG[LIB[t]] || []).forEach(x => out.push({
            type: t, label: cap(t), title: x.title,
            text: [x.lang || x.kind, x.year, x.years, x.director ? 'Dir. ' + x.director : ''].filter(Boolean).join(' \u00b7 '),
            href: '#' + LIB[t], hay: [x.title, x.alt, x.lang, x.kind, x.director, x.cast, x.studio, x.genre, x.platforms, x.years].filter(Boolean).join(' ')
        })));

        const reviews = typeof window.getReviews === 'function' ? window.getReviews() : [];
        reviews.forEach(r => {
            const t = TYPES.includes(r.type) ? r.type : 'game';
            out.push({
                type: t, label: cap(t) + ' review', title: r.title, text: r.text,
                href: '#reviews', hay: r.title + ' ' + r.text + ' ' + r.name
            });
        });

        (typeof NEWS !== 'undefined' ? NEWS : []).forEach(n => {
            const t = TYPES.includes(n.type) ? n.type : 'game';
            out.push({
                type: t, label: cap(t) + ' news', title: n.title, text: n.summary,
                href: '#news', hay: n.title + ' ' + n.summary
            });
        });
        return out;
    }

    function card(r) {
        const el = document.createElement('article');
        el.className = 'review-card';

        const top = document.createElement('div');
        top.className = 'review-top';
        const badge = document.createElement('span');
        badge.className = 'badge ' + r.type;
        badge.textContent = r.label;
        top.appendChild(badge);

        const h = document.createElement('h3');
        h.textContent = r.title;
        el.append(top, h);

        if (r.text) {
            const p = document.createElement('p');
            p.textContent = r.text.length > 140 ? r.text.slice(0, 140) + '...' : r.text;
            el.appendChild(p);
        }

        const a = document.createElement('a');
        a.href = r.href;
        a.className = 'read-more';
        a.textContent = 'View';
        el.appendChild(a);
        return el;
    }

    function run() {
        const q = norm(input.value.trim());
        box.textContent = '';
        if (!q) return;

        const found = collect().filter(r => norm(r.hay).includes(q)).slice(0, 30);
        if (found.length === 0) {
            const p = document.createElement('p');
            p.className = 'empty';
            p.textContent = 'Nothing found. Try a different word.';
            box.appendChild(p);
            return;
        }
        found.forEach(r => box.appendChild(card(r)));
    }

    input.addEventListener('input', run);
})();
