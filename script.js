const CACHE_NAME = 'joacogames-v1.1'; // Incrementa esto (v1.2, v1.3) cada vez que hagas cambios
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './script.js',
  './manifest.json',
  './images/panther_logo.png',
  './images/banner_juaco.jpg',
  './images/avatar_joaco.jpg'
];

// Instalación: Captura los archivos esenciales
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('SISTEMA: Cacheando archivos del núcleo...');
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting(); // Fuerza la activación inmediata
});

// Activación: Borra versiones antiguas automáticamente
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('SISTEMA: Eliminando caché antiguo:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// Estrategia: Carga desde el caché pero intenta actualizar por red
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
