const CACHE_NAME = 'babu-chat-v1';
const urlsToCache = [
  '/Babu-chat/',
  '/Babu-chat/index.html',
  '/Babu-chat/manifest.json',
  '/Babu-chat/icon-192.png',
  '/Babu-chat/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
