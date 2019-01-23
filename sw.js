const cacheName = 'news-dynamic';
const staticAssets = [
    './',
    './bootstrap/bootstrap-grid.min.css',
    './bootstrap/bootstrap.min.css',
    './bootstrap/bootstrap.css',
    
      './1.jpg',
    './css/home.css',
    './html/acceptor.html',
    './html/contact.html',
    './html/donor.html',
    './html/help.html',
    './html/home.html',
    './html/profile.html',
    './html/profile1.html',
    './html/reg.html',
    './index.html',
    './js/accep.js',
    './js/app.js',
    './js/prof.js',
    './js/app1.js',
    './images/home.gif',
    './bootstrapj/js/bootstrap.min.js'
    
]

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
          console.log('[ServiceWorker] Caching app shell');
          return cache.addAll(staticAssets);
        })
      );
})
self.addEventListener('fetch', event => {
    const req = event.request;
    const url = new URL(req.url);
    if (url.origin === location.origin) {
        event.respondWith(cacheFirst(req))
    } else {
        event.respondWith(networkFirst(req))
    }
})

async function cacheFirst(req) {
    const cacheResponse = await caches.match(req);
    return cacheResponse || fetch(req);
}

async function networkFirst(req) {
    const cache = await caches.open(cacheName);
    try {
        const res = await fetch(req);
        cache.put(req, res.clone())
        return res
    } catch (error) {
        return await cache.match(req)
    }
}