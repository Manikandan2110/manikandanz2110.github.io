'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6bbfa9ee8d2b1169c8a64715c8be3e5d",
"assets/AssetManifest.bin.json": "585480795239cf853227451ec4c3d21c",
"assets/AssetManifest.json": "3c91d31b600369077afc08c9aefb2a8f",
"assets/assets/fonts/times.ttf": "fcb8965acd0e90c50138958a2a7e0421",
"assets/assets/images/certi1.png": "821c72f5e290379943ef6b0be21018ae",
"assets/assets/images/certi2.png": "beed73501c35b462e6afcb5d6c0e3c67",
"assets/assets/images/certificate.png": "0d5efefbb17a778f08033c039a6d5559",
"assets/assets/images/cook.jpg": "2f1acccdb99a5e760c28fead278cc308",
"assets/assets/images/Coursera.jpg": "7cc3ae5f839e927967f320f0c62eb2ed",
"assets/assets/images/hobby.png": "ce2669692cebc7eca51458550c958b5c",
"assets/assets/images/integra_software_services_pvt_ltd_logo.jpeg": "1573ccd33ff371d1dc18da848e3d6ffa",
"assets/assets/images/Internship.jpg": "9d30435c418f22166b8c1b651467e86c",
"assets/assets/images/karzeallo.jpg": "7dcd8d3bf2aec6182d076477732ff5b8",
"assets/assets/images/karzeallogo.jpg": "f51db0a080aac699e3c6a6adcd40bf8a",
"assets/assets/images/link.png": "0fbeb508422472bd6976366778afa80d",
"assets/assets/images/mortarboard.png": "0839a927ad2cc7b8fc7a4aad00aeac6d",
"assets/assets/images/myphoto.jpg": "d94cd2aeeb750281e3417649247d9a44",
"assets/assets/images/myphoto.png": "bea0dfd7feb9f1673b3d029b399bade3",
"assets/assets/images/ownpro.png": "9ea8f224830fbc8d640ab9cd41e6e226",
"assets/assets/images/ownproo.jpg": "674604f5926d4c10d822500372d5dfd5",
"assets/assets/images/photography.jpeg": "b772af4d35dfb47fb6bc8bf6e8228cde",
"assets/assets/images/pubg-mobile-Wfr8fn.jpg": "a5d2721cc8487b37c8c751c055da7f33",
"assets/assets/images/skill.png": "9a086ceea9375ba88ab26538bd787c40",
"assets/assets/images/success.png": "7a5b3197522d3f35e5147a012b89305c",
"assets/assets/images/suitcase.png": "3868f67d6d9004fe386efb1de7ee71a1",
"assets/assets/images/user.png": "32ddd7aa5495a0bfa4a48d0ffa4c4fd6",
"assets/assets/images/wellgide.jpg": "11478dd0e50a9d6681fac6707019cf8d",
"assets/assets/images/work-experience.png": "d3db7edd9849f86106d79d4e95f55062",
"assets/assets/images/zethic_technologies_logo.jpeg": "b8bfffc68371f0b8378906b290ec7e7f",
"assets/FontManifest.json": "3c12f8923f565de2843ca3e7f63d0a37",
"assets/fonts/MaterialIcons-Regular.otf": "14664b92d582f4ae7bbaf2e5f86032c2",
"assets/NOTICES": "7041bcc67547f8a0db758ce125288038",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "947d8f36f18975fe38c2d95ffff8b6af",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "49969d47deefece8ab195f4f1da472c8",
"/": "49969d47deefece8ab195f4f1da472c8",
"main.dart.js": "6e3f4a5bc011827ec7a3db0e1b1f0ad5",
"manifest.json": "5e7b5d955a07fbbb28cae40b4c16599a",
"version.json": "47ca335d5ce8e62f74993fd2412e94fa"};
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
