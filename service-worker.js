const cacheName = 'teachable-machine-pwa-v1';
const assets = [
    './',
    './capstone.html',
    './manifest.json',
    './capstoneappicon.jpg',
    './capstoneappicon.jpg'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName).then(cache => cache.addAll(assets))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});
