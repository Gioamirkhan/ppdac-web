'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "039082f9a29894803079883533b32733",
"version.json": "55067a20a55fb044c02a90028a674666",
"index.html": "849697bd44685f68623797165a230098",
"/": "849697bd44685f68623797165a230098",
"main.dart.js": "18338141b7e9bd63e30bbbf9ef0ca1d8",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8fec9ad037728a9b96c732c8dd940976",
".git/config": "2e5e67484933401f67ee95fe9c94acff",
".git/objects/50/5fdd5789f25941204b127356ff523edaffff64": "89139e52cbf3df6711bd710f8dfe4db4",
".git/objects/57/027ae28f82704a165dece9b75689348cb2340b": "9cfe1eccda38f30e74467e5360ba5d06",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/9e/32b563721650a9e51bb091fcd81b30523fd34d": "2b873e3ba969eab0de553f96534a9cdb",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/34/bbb475bf3edb610534eb3b3b559669ddd675df": "fe255ce549d2c0661289c2cc3f59ded6",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f4/ebae7c665bb7a67425b109dbc6ddaaefb08dfd": "6ab0583ad7c1e28009e53007a23aa22e",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/ae5d4e466fa8e0c4327367f2b4b88c1ff19da0": "b6d4136e5a5223d8854dea679144f01c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/20/6aa4ada75714e2df6709c7b51bc1276c191388": "66f3be8d7c9e195e0ac70b5829e68407",
".git/objects/4b/8257899a7eef6a8c0668710d271dbff32ef261": "f946d0d25adb5f047acc77ed0aa4c925",
".git/objects/11/79cb164f20e15f02d72d0d7201373bc8e642b7": "4d5ef58f730ea0c0b7dd944b1d898f54",
".git/objects/7d/31b8fae29af1653af1083fa9e7b27e0bd3013f": "7c163ebcf565e64c568f176aeced7480",
".git/objects/16/8143d52839e7ade46b0a2b88cb52d5a4417d7c": "32122fb930ed6737927416b1e1e59ade",
".git/objects/1f/7c05d5e9099c272908868b91696d3ad55cd552": "0e89b7188ef266e7afb4cfe8687c9227",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/86/a90168ae8b5f9ec67e0c5285e171f408039f36": "d4c03b159abffef416278ecd315b22ba",
".git/objects/44/9e1c028bc843b755f0a27dc1658a4e50ff6441": "0924a5109fa66bd5687d731fbc6615ff",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/8f1df65cdf1d64e0a6dd1291a590487a5a90ce": "45785bea1268b489fedd3193a18ef025",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/5c/4a477c4d66bc48ca012413ee08341f091923d4": "048a8b16703f0ef627dbf94929c1e56f",
".git/objects/5d/f76cb69a0a34cae4b92516fc5ce7fc527f07ad": "5c4c0a3c8bb1670c124ab84c020237bc",
".git/objects/31/4eceb94da672d0438e2f725a990726e6be8f10": "b81581258425374f561d0b9632061a11",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/53/c253bdf8d2068356e0c4d2d5fbcb2268bf49b9": "d6ebf6c8dad733dcc2a8b2465b2ffbba",
".git/objects/53/256ab2c643daca175ff2a1b8a15aab32477fe9": "66d4a92cf0293bd11a37a68c01763b5f",
".git/objects/3f/4ebe7438ee81901150eba9b2ccfc25ad0e0496": "bd0659d76df16bec65adbbca09dc3232",
".git/objects/3f/22a062a8f6cd152bc90c06d95ca902b0bfefdf": "47f68716ca0597abaed7ca576dedd630",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/08/db414712f3e0895e7421f19cb9441c71a23d6e": "88804f35e8b95425e3b62af43c4baa4f",
".git/objects/01/cff9b8529f6d090d6fac853f9b0bd5746b5ea4": "1e340984e47008dc6aebd097b5c2badd",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d2/9ac2b86960d9438a85675dc3664f5d352c6f7a": "e7936d50c7d0fcc0d492b195f05ce109",
".git/objects/d2/adef33b002ad0c2ae65724ef5a1f960e7a2a33": "dbff453a136bc3e2bd8b51cfd19ffd0e",
".git/objects/b7/7cbcbf4f16a307f4ae2d58422706a9419f327f": "48878891f9a7a4c60ad16872b1567859",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/e21d92e05f15c365943ff6869c327152565d3e": "eda0bf9a9b78e4fcb104d5744c7bd6b0",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f9/7b310aa7c4b460e3ce4f95668914d35f9133e1": "705fe061156559e7bf1bbcbec24f4709",
".git/objects/c2/970994ea0a27a9ef09adf367806d4025b9fc99": "1c6e3e47d108b07f2ff9536d4fa84a8a",
".git/objects/cb/1c8e826db91488888dccf32fb669e3ad162253": "7eeab620a9201df009bb356bd414c758",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/46/37845fada8c260dcaee6e895b9e7cb6d8bca3a": "e0efceb8803deeffcba38aa650160a1e",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/133f99820e18826a80e0e8365e9b7aff772367": "04d46abb79241d2c96b2ca7bf9043cb2",
".git/objects/15/faa429e3ea8c7a2ffa9d2918d9d860e3bb9243": "0e3813a6318fd7e940ab7abd1d292c9b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/2e/c97f018448998da5b45b9760371571bca5d7f2": "e1b3e50fff4bcc90db89d89df1eb05bf",
".git/objects/7a/809826e12b46258746f02f3da59890c8908657": "d4eba82874ce40b5f836642ddf03c615",
".git/objects/22/54a0fe7bdbfd88cf9354f1343b36bad4714ea9": "4eab64a09e6bf24a9ce5a11321c2ab7d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6fd1a66e0306f8a36d479464fe0ad861",
".git/logs/refs/heads/main": "6fd1a66e0306f8a36d479464fe0ad861",
".git/logs/refs/remotes/origin/main": "55295c5931085ee502a796d853c49307",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "a20be8f460defb6bdc508d37c295c2a5",
".git/refs/remotes/origin/main": "a20be8f460defb6bdc508d37c295c2a5",
".git/index": "bf0d5bc477fc03cabe0275c3194028b5",
".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
"assets/AssetManifest.json": "c9f331207cffa82db59d421bfde4fd1a",
"assets/NOTICES": "8608f6a2e6f640ea7339f1187afe652f",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "cee7ead33aa575ae63aa0d2d3edb86dc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/lib/stickers/lion.jpeg": "452b994bc307f496226ab191817b79dd",
"assets/lib/stickers/giraffe.jpeg": "c03352b7b1273e00a9e961eed4b1ac19",
"assets/lib/stickers/cat.png": "601e2dc9f5d62ba2954cd7943ece92ab",
"assets/lib/stickers/bird_photo.jpeg": "f7f7d8f8783eb2f44d58cd53fa726370",
"assets/lib/stickers/monkey.jpeg": "ae6359ea164af89569bbdd2448ee6093",
"assets/lib/stickers/chair.webp": "16c917571aa82292255231a451b6978b",
"assets/lib/stickers/books.jpeg": "0d98753cfbb9036a28ad0387ea620999",
"assets/lib/stickers/blue_pencil.jpeg": "a71f09f27c6604d62f02e5735b714e07",
"assets/lib/icons/arrow_data_page.png": "7dd8683dc56f42b1f0c2059c1cbc8a18",
"assets/AssetManifest.bin": "2f1f3d944d0df8461eb85f9e2edf1ff6",
"assets/fonts/MaterialIcons-Regular.otf": "7e00bd0908f73f20a5f24e245be15b69",
"assets/assets/question_mark.png": "1307b593c50b8ce089b7fd47f0d3aed6",
"assets/assets/elephant.png": "fd769d2349bc672f1969fcc11db323d2",
"assets/assets/AI_tiger.json": "ca42bfbd12b060af34e879f502a0a782",
"assets/assets/fireworks.json": "3cd4ceb16a06cbf3490b3917e53749f7",
"assets/assets/speech_bubbles.png": "09a01b143b2df72ea73b928f4bc21c00",
"assets/assets/lightbulb.png": "a2fba1b69dfa17b2f4be730b0513295a",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
