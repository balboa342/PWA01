const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';

const staticStateBirds = "state-birds-site-v1"
// A list of local resources we always want to be cached.
const assets = [
  'index.html',
  './', // Alias for index.html
  'css/style.css',
  'js/app.js',
  'images/hello-icon-128.png',
  'images/hello-icon-144.png',
  'images/hello-icon-152.png',
  'images/hello-icon-192.png',
  'images/hello-icon-196maskable.png',
  'images/hello-icon-256.png',
  'images/hello-icon-512.png',
  'images/Cardinal.png',
  'images/CaliGuyll.png',
  'images/Chicken.png',
  'images/Meadowlark.png',
  'images/Mockingbird.png',
  'favicon.ico',
  'sw.js'
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticStateBirds).then(cache => {
      cache.addAll(assets)
    })
  )
})
