importScripts('/_nuxt/workbox.5c678697.js')

workbox.precaching.precacheAndRoute(
  [
    {
      url: '/_nuxt/5c03e8f5cf3061ca7931.js',
      revision: 'b2920e6f43106444d6deb6d45fd8e8f1'
    },
    {
      url: '/_nuxt/7d60cab21cb35ee365d9.js',
      revision: '222a1c61e88c0d5a3e1f2e2a30e8cad1'
    },
    {
      url: '/_nuxt/89a21badbcc81a3e90e2.js',
      revision: '7ac35c6f1e85929c3c5cb91a82f62443'
    },
    {
      url: '/_nuxt/b6ba5fb8536e630e4cd6.js',
      revision: 'aeac189ef4f85cec995ffd9e573e4104'
    },
    {
      url: '/_nuxt/d1924119e12c2ccfc47c.js',
      revision: 'd12402fad55b97d89333d86ec34e4abb'
    },
    {
      url: '/_nuxt/de775fca9ccc360e1da9.js',
      revision: 'a67bc9b976cb31a67591012f92027398'
    },
    {
      url: '/_nuxt/f87ae46b9e3f7f064229.js',
      revision: '873e8fdf967cb532c9147061e309d01f'
    }
  ],
  {
    cacheId: 'garlic',
    directoryIndex: '/',
    cleanUrls: false
  }
)

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(
  new RegExp('/_nuxt/.*'),
  workbox.strategies.cacheFirst({}),
  'GET'
)

workbox.routing.registerRoute(
  new RegExp('/.*'),
  workbox.strategies.networkFirst({}),
  'GET'
)
