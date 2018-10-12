importScripts('/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/07daa85840012843e7f0.js",
    "revision": "a17ce9d5e853417afbfbf2df4db98807"
  },
  {
    "url": "/_nuxt/0e79c47033e32a992573.js",
    "revision": "c4d6c0d2f8ff99f034b0180d8b6f4324"
  },
  {
    "url": "/_nuxt/267a8aca6b9d34ae7821.js",
    "revision": "71f860432a3aa88cb098e5cb143d6005"
  },
  {
    "url": "/_nuxt/6e7c7b9faf2e416d792f.js",
    "revision": "ea12de066ebe651ce9d428c1678f48cf"
  },
  {
    "url": "/_nuxt/90207c6245022e75f713.js",
    "revision": "c2f0468a9bcd349709e4adc1ec296aee"
  },
  {
    "url": "/_nuxt/9480e0ecac61629e63ca.js",
    "revision": "216fb9dd5ab6cb5a0ea1888facab07fa"
  },
  {
    "url": "/_nuxt/f240670d2886768a708a.js",
    "revision": "d58762dd2913995a0e0d5ad3551ec92d"
  }
], {
  "cacheId": "garlic",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





