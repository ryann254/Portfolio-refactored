importScripts('workbox-v5.1.4/workbox-sw.js')

workbox.setConfig({ modulePathPrefix: 'workbox-v5.1.4/' })

const precacheManifest = self.__WB_MANIFEST;

workbox.precaching.precacheAndRoute(precacheManifest)

const dataCacheConfig = {
    cacheName: 'page-data'
}

const handlerCb = async ({url, request, event, params}) => {
    const response = await fetch(request);
    const responseBody = await response.text();
    return new Response(`${responseBody}`); 
  };

// workbox.routing.registerRoute(
//     new RegExp('/styles/.*\\.css'),
//     handlerCb
//   );

workbox.routing.registerRoute(/.*categories/, new workbox.strategies.CacheFirst(dataCacheConfig), 'GET')
workbox.routing.registerRoute(/.*templates/, new workbox.strategies.CacheFirst(dataCacheConfig), 'GET')
workbox.routing.registerRoute('https://fonts.googleapis.com/css2?family=Nunito:wght@300&family=Roboto+Condensed&display=swap', new workbox.strategies.CacheFirst(dataCacheConfig), 'GET')
workbox.routing.registerRoute('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap', new workbox.strategies.CacheFirst(dataCacheConfig), 'GET')
workbox.routing.registerRoute('https://fonts.googleapis.com/css2?family=Clicker+Script&family=Nunito+Sans&display=swap', new workbox.strategies.CacheFirst(dataCacheConfig), 'GET')
workbox.routing.registerRoute('https://fonts.gstatic.com/s/nunito/v14/XRXW3I6Li01BKofAnsSUYevIWzgPDA.woff2', new workbox.strategies.CacheFirst(dataCacheConfig), 'GET')
workbox.routing.registerRoute('https://fonts.gstatic.com/s/robotocondensed/v19/ieVl2ZhZI2eCN5jzbjEETS9weq8-19K7DQk6YvM.woff2', new workbox.strategies.CacheFirst(dataCacheConfig), 'GET')
workbox.routing.registerRoute('https://fonts.gstatic.com/s/clickerscript/v8/raxkHiKPvt8CMH6ZWP8PdlEq71rf0Tu2Krfu.woff2', new workbox.strategies.CacheFirst(dataCacheConfig), 'GET')
workbox.routing.registerRoute('https://fonts.gstatic.com/s/nunitosans/v6/pe0qMImSLYBIv1o4X1M8cce9I9tAcVwo.woff2', new workbox.strategies.CacheFirst(dataCacheConfig), 'GET')
workbox.routing.registerRoute('https://use.fontawesome.com/releases/v5.8.2/webfonts/fa-solid-900.woff', new workbox.strategies.CacheFirst(dataCacheConfig), 'GET')
workbox.routing.registerRoute('https://use.fontawesome.com/releases/v5.8.2/webfonts/fa-solid-900.woff2', new workbox.strategies.CacheFirst(dataCacheConfig), 'GET')
workbox.routing.registerRoute('https://use.fontawesome.com/releases/v5.8.2/webfonts/fa-solid-900.ttf', new workbox.strategies.CacheFirst(dataCacheConfig), 'GET')
workbox.routing.registerRoute('https://use.fontawesome.com/releases/v5.8.2/webfonts/fa-brands-400.woff2', new workbox.strategies.CacheFirst(dataCacheConfig), 'GET')
workbox.routing.registerRoute('https://use.fontawesome.com/releases/v5.8.2/webfonts/fa-brands-400.woff', new workbox.strategies.CacheFirst(dataCacheConfig), 'GET')
workbox.routing.registerRoute('https://use.fontawesome.com/releases/v5.8.2/webfonts/fa-brands-400.ttf', new workbox.strategies.CacheFirst(dataCacheConfig), 'GET')


workbox.routing.registerRoute(/.*\.css$/
    , new workbox.strategies.CacheFirst({
        cacheName: 'css-cache'
    }), 'GET')

workbox.routing.registerRoute(
    /.*.(?:png|jpg|jpeg|svg|css)$/,
    new workbox.strategies.CacheFirst({
        cacheName: 'page-images'
    }), 'GET'
)

self.addEventListener('install', function(evt) {
//(chas)
})

self.addEventListener("fetch", (evt) => {
    evt.respondWith(caches.match(evt.request).then(cacheRes => {
        return cacheRes || fetch(evt.request);
    }))
});