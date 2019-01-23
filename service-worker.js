var cacheName = 'demo-app';
var filesToCache = [
  './',
  './bootstrap',
  './images/1.jpg',
  './images/2.jpg',
  './images/3.jpg',
  './images/4.jpg',
  './images/5.jpg',
  './images/6.jpg',
  './images/create.gif',
  './images/donor.png',
  './images/download.png',
  './images/help.gif',
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
    './js/prof.js'
];

self.addEventListener("activate", function(e) {
  console.log("[ServiceWorker] Activate");
});

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
   caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  // If a match isn't found in the cache, the response
  // will look like a connection error
  event.respondWith(caches.match(event.request));
});
