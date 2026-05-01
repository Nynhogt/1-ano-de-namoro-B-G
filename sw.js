const CACHE_NAME = 'namoro-cache-v1';
const urlsToCache = [
  '/1-ano-de-namoro-B-G/',
  '/1-ano-de-namoro-B-G/index.html',
  '/1-ano-de-namoro-B-G/style.css',
  '/1-ano-de-namoro-B-G/photograph.mp3',
  '/1-ano-de-namoro-B-G/manifest.json'
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
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
