/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2018/08/02/scss的安装使用/index.html",
    "revision": "097369b02e53bc82966797c8fc55bf13"
  },
  {
    "url": "2018/08/03/vscode插件/index.html",
    "revision": "237dea20cb0e93a6afe5ba59e3c0f68e"
  },
  {
    "url": "2018/08/05/关于checkbox的展示应用/index.html",
    "revision": "625172c63557233a89eabd76c6e7d62d"
  },
  {
    "url": "2018/08/08/数组的排序/index.html",
    "revision": "e4ebcba00dbe0f09f74ebf91146a93b2"
  },
  {
    "url": "2018/08/21/关于内存泄漏/index.html",
    "revision": "4d39d2a814ac2719f827c05047ee60db"
  },
  {
    "url": "2018/08/22/包管理工具/index.html",
    "revision": "635968ad65dd13941937e82cdc34c283"
  },
  {
    "url": "2018/08/23/js插件封装/index.html",
    "revision": "3dcd44068ce706d0236c1ebf1e1f2323"
  },
  {
    "url": "2018/08/24/ios的坑/index.html",
    "revision": "fe6515fb004549f02461bbf0abffd881"
  },
  {
    "url": "2018/11/30/前端面试201811/index.html",
    "revision": "0fc39778445eeb3eb4e466f5a0cb711a"
  },
  {
    "url": "2019/04/09/css文字溢出处理/index.html",
    "revision": "b2cfb5ee1bddb6dfb45ae4dcea2d2c36"
  },
  {
    "url": "2019/04/26/格式化数字/index.html",
    "revision": "8758c39f0c48dc76b909e0b249266e72"
  },
  {
    "url": "2019/06/03/js防抖动功能/index.html",
    "revision": "237be028d7a8866026a9a9328cff759d"
  },
  {
    "url": "2019/06/24/npm使用git上的包/index.html",
    "revision": "7b69003dbc6d51fc6ec05a37805bae01"
  },
  {
    "url": "404.html",
    "revision": "493bfd2d9ab9ac57d3bf1be77207d97f"
  },
  {
    "url": "assets/css/0.styles.a54d6d16.css",
    "revision": "37b2f2570ad8d0b38ff34a3fa8209698"
  },
  {
    "url": "assets/img/15093281194279.26f6e4fb.jpg",
    "revision": "26f6e4fbb4ca0dae3894b0ccc85bbe3d"
  },
  {
    "url": "assets/img/20180806142450.ea910124.png",
    "revision": "ea910124604127a2b7730aa8850773a0"
  },
  {
    "url": "assets/img/20180806142553.5392acdb.png",
    "revision": "5392acdb0c9fd28a96c0be67107d9816"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.59518e67.js",
    "revision": "7097f796f04d93c86e4077ef57bd0c89"
  },
  {
    "url": "assets/js/11.f6fb89b3.js",
    "revision": "0b92aa53d31d8a417d42b8e828b1b1c5"
  },
  {
    "url": "assets/js/12.c41a551d.js",
    "revision": "e3870f4d1c1b27856c51a2ff4c4322a3"
  },
  {
    "url": "assets/js/13.0dfc305e.js",
    "revision": "24d9d9a6784c8bc8e50db9f7031d3d53"
  },
  {
    "url": "assets/js/14.7f79baac.js",
    "revision": "f914e4e5461c4dcf108662c46de02ba6"
  },
  {
    "url": "assets/js/15.34d9a20a.js",
    "revision": "42446cde65504f9f5c2ab683e67b12e1"
  },
  {
    "url": "assets/js/16.99514de6.js",
    "revision": "c4e40b35929990604fdcaeaeb5d17307"
  },
  {
    "url": "assets/js/17.01217a95.js",
    "revision": "bd54702e01dc4785d58d592ed6246550"
  },
  {
    "url": "assets/js/18.0b558caa.js",
    "revision": "5bd1b6b2d377545f902a8945a3770b69"
  },
  {
    "url": "assets/js/19.35db7c4b.js",
    "revision": "ca280d32d1e0e11e08bf3861fe8e47d3"
  },
  {
    "url": "assets/js/2.04275579.js",
    "revision": "204640e28b8aa0e4c1949b70f86f0330"
  },
  {
    "url": "assets/js/20.ce5fb721.js",
    "revision": "391b9e0b018c707f105e33bbbba8669c"
  },
  {
    "url": "assets/js/21.f13c1846.js",
    "revision": "249d109c15dac9844bec529bf47b108e"
  },
  {
    "url": "assets/js/22.363fb9a6.js",
    "revision": "1c68694c415b26ff532b5648dc1fe843"
  },
  {
    "url": "assets/js/23.8810a25f.js",
    "revision": "f78a195f4ef5f8821cd333f009015d1d"
  },
  {
    "url": "assets/js/3.3a8ac1c8.js",
    "revision": "dc920bdcbb942f7772119945beb4f290"
  },
  {
    "url": "assets/js/4.d952eeee.js",
    "revision": "cf38f2e03d47e4e7da151a294e53d0c8"
  },
  {
    "url": "assets/js/5.7320779a.js",
    "revision": "48052125bacb8dcabdb2f0ed35cb1818"
  },
  {
    "url": "assets/js/6.ac01c95e.js",
    "revision": "051f25efe6fdbfa65d10610bac2beae0"
  },
  {
    "url": "assets/js/7.40629450.js",
    "revision": "6227561e2d6eb88014e5fc91230d4a29"
  },
  {
    "url": "assets/js/8.1b5c81c1.js",
    "revision": "ea7d84f99aec6be598dfd11580e02b66"
  },
  {
    "url": "assets/js/9.7605278b.js",
    "revision": "e8e740bb1431e94ae75082d08584c240"
  },
  {
    "url": "assets/js/app.ac7f00e3.js",
    "revision": "6bda68215e04fbd021fc83e4482a1939"
  },
  {
    "url": "index.html",
    "revision": "1df4ec5c719a4083de4ff64a826bcfb5"
  },
  {
    "url": "others/index.html",
    "revision": "ec5596bbb0bf72a2b9dc11e8a492515e"
  },
  {
    "url": "others/关于/index.html",
    "revision": "0e1a3ad7aed55a2b848e5a57e3218be4"
  },
  {
    "url": "others/诗词/index.html",
    "revision": "2425198e0a0fb6808e398c25a311d975"
  },
  {
    "url": "page/2/index.html",
    "revision": "4af4563dc0aa7cc0748713d2576b5bfd"
  },
  {
    "url": "portrait.jpg",
    "revision": "863c98691c26c3761944a50136c434a9"
  },
  {
    "url": "tag/css/index.html",
    "revision": "65667e9bdd97823a066f6f81f95234eb"
  },
  {
    "url": "tag/html/index.html",
    "revision": "35aa18ea48a6e946c5403bb1fa5c6111"
  },
  {
    "url": "tag/index.html",
    "revision": "347df371198e8d6a90b721c40b313425"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "80bae914248d336bbd46cc0d5897820f"
  },
  {
    "url": "tag/js/index.html",
    "revision": "5134a971a151a1c95bba9013fea18760"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "6a82241bc263e09f9fdad672e0bdc237"
  },
  {
    "url": "tag/scss/index.html",
    "revision": "1a881c8dc32d15b1a305d4b002f63182"
  },
  {
    "url": "tag/VSCode/index.html",
    "revision": "b46c8b1610ec7a7b2f4b6ab6fef6514f"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "43b396336e99b697c3ddb08ba4d3764a"
  },
  {
    "url": "tag/编辑器/index.html",
    "revision": "1b9263031f6a663013af0ad2cffc86c6"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "f26d4209f6f94015586a115f04d498dc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
