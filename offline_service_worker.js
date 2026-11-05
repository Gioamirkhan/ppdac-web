const CACHE_NAME = 'ppdac-offline-3bc5b8b1177c';
const APP_SHELL = new URL('index.html', self.registration.scope).href;
const MANIFEST = new URL('manifest.json', self.registration.scope).href;
const OFFLINE_ASSETS = new URL('offline-assets.json', self.registration.scope).href;
const API_PATH = new URL('api/', self.registration.scope).pathname;

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll([APP_SHELL, MANIFEST, OFFLINE_ASSETS]);
    const response = await fetch(OFFLINE_ASSETS);
    if (!response.ok) {
      throw new Error(`Could not load offline asset list: ${response.status}`);
    }
    const assets = await response.json();
    await cache.addAll(assets.map((asset) =>
      new URL(asset, self.registration.scope).href,
    ));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => key.startsWith('ppdac-offline-') && key !== CACHE_NAME)
          .map((key) => caches.delete(key)),
      ))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (
    request.method !== 'GET' ||
    url.origin !== self.location.origin ||
    url.pathname.startsWith(API_PATH)
  ) {
    return;
  }

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    try {
      const response = await fetch(request);
      if (response.ok && response.type === 'basic') {
        try {
          await cache.put(request, response.clone());
          if (request.mode === 'navigate') {
            await cache.put(APP_SHELL, response.clone());
          }
        } catch (error) {
          console.warn('Could not cache an offline resource:', error);
        }
      }
      return response;
    } catch (error) {
      const cachedResponse = await cache.match(request, { ignoreSearch: true });
      if (cachedResponse) return cachedResponse;
      if (request.mode === 'navigate') {
        const appShell = await cache.match(APP_SHELL);
        if (appShell) return appShell;
      }
      throw error;
    }
  })());
});
