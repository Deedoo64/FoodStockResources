'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"flutter_bootstrap.js": "def9b6ed75f42b9b7a6bddc5fdbed433",
"assets/FontManifest.json": "a63181e8683d924dd4cc50e2798962d3",
"assets/NOTICES": "682a80562cdc43cc03cab2cf6b97242f",
"assets/AssetManifest.bin.json": "a35f629dedab612ecbdd522c4ef6baeb",
"assets/assets/icons/food/cereals.png": "65f5a88b03892c4cc812c1701281ac72",
"assets/assets/icons/food/cake.png": "e8336e22ce3cc35ea206fe336e190b9c",
"assets/assets/icons/food/cheese.png": "6315d89c69a4b7c5466377d954989b4d",
"assets/assets/icons/food/pastry.png": "3301d23c4f4af34097fa962678cadeef",
"assets/assets/icons/food/meat.png": "614d6a62d4ca7cad01acf084ad5c9de3",
"assets/assets/icons/food/soft-drink.png": "982edcda4f1cd733d6cc747846e1f195",
"assets/assets/icons/food/pepper.png": "17468798475ef137a52987f4cf66735b",
"assets/assets/icons/food/alcohol.png": "13e69afcaa81d256f19af462db5e4ada",
"assets/assets/icons/food/ingredient.png": "846d15b2b5fa8db3b15c3c657082021a",
"assets/assets/icons/food/cooked_dish.png": "6f9f04bca34953612ee4df9e92cfaf33",
"assets/assets/icons/food/deli.png": "38b85d0d0db40a9070c0061b96a2de80",
"assets/assets/icons/food/fruit.png": "efab531d8589c44e53f7e6b96a93f4ac",
"assets/assets/icons/food/ice-cream.png": "2c10ebb1c5c1a6c7c83e1ac3625b6b2f",
"assets/assets/icons/food/cereal.png": "9ff8ca5a8c8040924caa609a5a3e2823",
"assets/assets/icons/food/dairy-product.png": "681a0c6e8dad82607a40b158af0f4aa0",
"assets/assets/icons/food/confectionery.png": "b201187cdc3ec9a1c40d1d52e4c3873b",
"assets/assets/icons/food/vegetable.png": "8aae1b85a21a8c2c48c793d99fa5fe4b",
"assets/assets/icons/food/fish.png": "b575b2e7bcf8d309c1c4f72ecc79b38c",
"assets/assets/icons/food/egg.png": "1e0a0200f5f3baf0b59350d4c14a7dce",
"assets/assets/icons/food/condiment.png": "8c9ea07333ca94190c3d57d45f64aa40",
"assets/assets/icons/food/other.png": "4076d8c327fab6d0ccc1457d5b9663ff",
"assets/assets/icons/app_logo2.png": "a84e6f2bb8f0283b228454be477ef22c",
"assets/assets/icons/food_stock_transp.png": "e8fc2ef62aaccad4b1742c045466d965",
"assets/assets/icons/icon_appli.png": "1547df4e6b74ea7edd9e6d475c8e6534",
"assets/assets/icons/user/plan_free.png": "7ef5b17b0be6e48e58388399f09e3146",
"assets/assets/icons/user/plan_gold.png": "5c87aa2ee7702d0c349627289578c938",
"assets/assets/icons/user/plan_silver.png": "6a7a775951de11cda127ea0023724488",
"assets/assets/icons/user/plan_platinium.png": "3a88c0ea7111ff8cd7bbf5a68d5f7df5",
"assets/assets/icons/app_logo.png": "ee8ba164559eb26eebe386cfa9b30085",
"assets/assets/icons/app_icon.png": "cc54cd4efc170b52360f9c3670cff1e8",
"assets/assets/icons/food_stock.png": "a36651e8bb0ca1f09506b49e2c701636",
"assets/assets/icons/google.png": "5b6700333bdb4d557ebf433e3b3dd575",
"assets/assets/icons/storage/warm.png": "c99fb3cf7dc63fe19c8c23eaee504c6e",
"assets/assets/icons/storage/frozen.png": "23af082bd31703c6bc116ad49240557f",
"assets/assets/icons/storage/ambiente_indicator.png": "37aafe1c37d43643763e04caf0848557",
"assets/assets/icons/storage/frozen_indicator.png": "689fb8b79086440e06978761592f4776",
"assets/assets/icons/storage/warm.xcf": "abd2bd8d98f2aa842ede4136460b2f38",
"assets/assets/icons/storage/fresh_indicator.png": "e7e9c11b9902c203ab6af51899e68c7e",
"assets/assets/icons/storage/fresh.png": "2c2d4ba4511cc9bfa5205735e6f9765e",
"assets/assets/icons/food_stock_transp_1024x500.png": "1ada4b06fd585c6d1f0074545208302e",
"assets/assets/fonts/Raleway-Regular.ttf": "6310192cd2011f527e18b1586a1245c8",
"assets/assets/fonts/PlaywriteZA-VariableFont_wght.ttf": "02aa8228ccbf6c5de2ff0a4d94b7b657",
"assets/assets/fonts/PoetsenOne-Regular.ttf": "70d65213731578cdde9a95a4a6cd237c",
"assets/assets/fonts/IndieFlower-Regular.ttf": "8a33aae7305b37411d775d6617e80aca",
"assets/assets/fonts/Abel-Regular.ttf": "1052d6ca3993ae24a932304560a4c8b4",
"assets/AssetManifest.bin": "52fd0058ea003faed34474726cb5d263",
"assets/fonts/MaterialIcons-Regular.otf": "3e822e8f03e064395d6416855414ab1b",
"assets/config/firebase_config.json": "ab42f83a1244d4d0fa0e93a0bfb9b416",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "8f4e71bded0938241afb8c9ba7913a90",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "607c383c5b90f1b4dc1db14383b53e5e",
"/": "607c383c5b90f1b4dc1db14383b53e5e",
"version.json": "f1a8104050576c99b48e6aaeb964f5dd",
"manifest.json": "200d6622ff020948522733feefa7244e",
"main.dart.js": "4646885b7def294f3f83ee3acd07478e",
"flutter.js": "f393d3c16b631f36852323de8e583132"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
