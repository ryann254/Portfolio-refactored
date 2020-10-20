const staticCacheName = "static-assets";
const assets = [
    '/',
    '/public/index.html',
    '/public/bundle.js',
    '/public/images/Messenger-app-coverphoto.webp',
    '/public/images/Bakery template.webp',
    '/public/images/Law-template.webp',
    '/public/images/Wedding-template.webp',
    '/public/images/Estimator-app.webp',
    '/public/images/Expense-app.webp',
    '/public/images/Fancy-form.webp',
    '/public/images/Netflix.webp',
    '/public/images/Home-furniture.webp',
    '/public/images/html-icon.webp',
    '/public/images/css-icon.webp',
    '/public/images/js-icon.webp',
    '/public/images/reactjs-icon.webp',
    '/public/images/nodejs-icon.webp',
    '/public/images/angular-icon.webp',
    '/public/images/jquery-icon.webp',
    '/public/images/Logo/logo6_192x192.webp',
    '/public/images/Logo/safari-pinned-tab.svg',
    '/src/index.js',
    '/src/index.css',
    'https://fonts.googleapis.com/css2?family=Nunito:wght@300&family=Roboto+Condensed&display=swap',
    'https://use.fontawesome.com/releases/v5.8.2/css/all.css',
    'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css',
    'https://unpkg.com/regenerator-runtime@0.13.1/runtime.js'
];

//Install service worker
self.addEventListener("install", (evt) => {
    evt.waitUntil(caches.open(staticCacheName).then(cache => {
        console.log('Caching shell assets');
        cache.addAll(assets);
    }))
});

//Activate service worker
self.addEventListener("activate", (evt) => {
    console.log("activating service worker")
});

//fetch event
self.addEventListener("fetch", (evt) => {
    evt.respondWith(caches.match(evt.request).then(cacheRes => {
        return cacheRes || fetch(evt.request);
    }))
});
