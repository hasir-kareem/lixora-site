// News shown to every visitor. To add a story yourself, copy one block below,
// edit it, and put it in the list. Newest stories are shown first (sorted by date).
// type: 'movie', 'game' or 'anime' | date: YYYY-MM-DD | link: optional full https:// address
// poster: optional image, e.g. 'posters/my-movie.jpg' (put the file in posters/movies, posters/games, posters/anime or posters/series)
const NEWS = [
    // {
    //     type: 'movie',
    //     title: 'News headline',
    //     date: '2026-10-19',
    //     summary: 'A short summary of the story.',
    //     link: ''
    // }
];

// Automatic news: when this is on, the site also fetches fresh headlines from
// Google News each time someone visits, so new stories appear without you
// editing this file. It needs no sign-up to try, but the free service it uses
// (rss2json.com) is shared by many sites and can slow down or stop working
// under heavy use. For a more reliable site, get a free API key at
// https://rss2json.com and paste it below as apiKey. Visitors need an internet
// connection for this part; if the fetch fails for any reason, the site just
// falls back to the NEWS list above, so nothing breaks.
const AUTO_NEWS = {
    enabled: true,
    apiKey: '',
    maxPerType: 6,
    cacheMinutes: 30,
    feeds: [
        { type: 'movie', query: 'movie release OR movie trailer' },
        { type: 'game', query: 'video game release OR game update' },
        { type: 'anime', query: 'anime episode OR anime release' },
        { type: 'series', query: 'tv series renewed OR season premiere' }
    ]
};

(function () {
    const list = document.getElementById('newsList');
    const buttons = document.querySelectorAll('.nfilter');
    if (!list) return;

    let current = 'all';
    let sorted = NEWS.slice().sort((a, b) => String(b.date).localeCompare(String(a.date)));


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
        const shown = sorted.filter(n => current === 'all' || n.type === current);

        if (shown.length === 0) {
            const empty = document.createElement('p');
            empty.className = 'empty';
            empty.textContent = 'No news yet. Check back soon.';
            list.appendChild(empty);
            return;
        }

        shown.forEach(n => {
            const type = ['movie', 'game', 'anime', 'series'].includes(n.type) ? n.type : 'game';

            const card = document.createElement('article');
            card.className = 'review-card';

            const top = document.createElement('div');
            top.className = 'review-top';

            const badge = document.createElement('span');
            badge.className = 'badge ' + type;
            badge.textContent = type.charAt(0).toUpperCase() + type.slice(1);

            const date = document.createElement('time');
            date.className = 'meta';
            date.dateTime = n.date;
            date.textContent = n.date;

            top.append(badge, date);

            if (n.auto) {
                const src = document.createElement('span');
                src.className = 'meta auto-source';
                src.textContent = 'via Google News';
                top.appendChild(src);
            }

            const title = document.createElement('h3');
            title.textContent = n.title;

            const text = document.createElement('p');
            text.textContent = n.summary;

            card.append(top, title, text);

            if (/^https?:\/\//i.test(n.link || '')) {
                const more = document.createElement('a');
                more.href = n.link;
                more.target = '_blank';
                more.rel = 'noopener noreferrer';
                more.className = 'read-more';
                more.textContent = 'Read more';
                card.appendChild(more);
            }

            addPoster(card, n.poster, n.title);
            list.appendChild(card);
        });
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => {
                const on = b === btn;
                b.classList.toggle('active', on);
                b.setAttribute('aria-pressed', on);
            });
            current = btn.dataset.filter;
            render();
        });
    });

    render();
    loadAutoNews();

    // Strips HTML tags and extra whitespace from an RSS description.
    function plainText(html) {
        const d = document.createElement('div');
        d.innerHTML = String(html || '');
        return (d.textContent || '').replace(/\s+/g, ' ').trim();
    }

    function cacheKey() {
        return 'lixora-auto-news-v1';
    }

    function readCache() {
        try {
            const raw = sessionStorage.getItem(cacheKey());
            if (!raw) return null;
            const saved = JSON.parse(raw);
            if (Date.now() - saved.at > AUTO_NEWS.cacheMinutes * 60000) return null;
            return saved.items;
        } catch (e) {
            return null;
        }
    }

    function writeCache(items) {
        try {
            sessionStorage.setItem(cacheKey(), JSON.stringify({ at: Date.now(), items }));
        } catch (e) {
            // Storage can be unavailable (private browsing, full quota); the
            // site still works, it just re-fetches next time.
        }
    }

    async function fetchFeed(feed) {
        const rssUrl = 'https://news.google.com/rss/search?q=' +
            encodeURIComponent(feed.query) + '&hl=en-US&gl=US&ceid=US:en';
        const api = 'https://api.rss2json.com/v1/api.json?rss_url=' +
            encodeURIComponent(rssUrl) +
            (AUTO_NEWS.apiKey ? '&api_key=' + encodeURIComponent(AUTO_NEWS.apiKey) : '') +
            '&count=' + (AUTO_NEWS.maxPerType || 6);

        const res = await fetch(api);
        const data = await res.json();
        if (data.status !== 'ok' || !Array.isArray(data.items)) return [];

        return data.items.map(item => ({
            type: feed.type,
            title: plainText(item.title).slice(0, 140),
            date: String(item.pubDate || '').slice(0, 10) || new Date().toISOString().slice(0, 10),
            summary: plainText(item.description).slice(0, 220),
            link: item.link || '',
            poster: item.thumbnail || (item.enclosure && item.enclosure.link) || '',
            auto: true
        })).filter(n => n.title);
    }

    async function loadAutoNews() {
        if (!AUTO_NEWS.enabled) return;

        const cached = readCache();
        if (cached) {
            mergeAndRender(cached);
            return;
        }

        try {
            const results = await Promise.allSettled(AUTO_NEWS.feeds.map(fetchFeed));
            const items = results
                .filter(r => r.status === 'fulfilled')
                .flatMap(r => r.value);
            if (items.length === 0) return;
            writeCache(items);
            mergeAndRender(items);
        } catch (e) {
            // No internet, the free service is down, or it's blocked here.
            // The site keeps showing the NEWS list above; nothing breaks.
        }
    }

    function mergeAndRender(autoItems) {
        const manualTitles = new Set(NEWS.map(n => n.title.toLowerCase()));
        const fresh = autoItems.filter(n => !manualTitles.has(n.title.toLowerCase()));
        sorted = NEWS.concat(fresh).sort((a, b) => String(b.date).localeCompare(String(a.date)));
        render();
    }
})();
