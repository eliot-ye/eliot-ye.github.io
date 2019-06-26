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
    "revision": "c8cc01d7da0fb83ffe1cd74e99489e33"
  },
  {
    "url": "2018/08/03/vscode插件/index.html",
    "revision": "9d9ade58d941aae398e216b80b89eefd"
  },
  {
    "url": "2018/08/05/关于checkbox的展示应用/index.html",
    "revision": "68830a9927417e8e85ae4913898952be"
  },
  {
    "url": "2018/08/08/数组的排序/index.html",
    "revision": "13952e8e1f919a9c197e9d39793bdd5f"
  },
  {
    "url": "2018/08/21/关于内存泄漏/index.html",
    "revision": "08e1c2460171e7cc4626fba396c3326e"
  },
  {
    "url": "2018/08/22/包管理工具/index.html",
    "revision": "a5a04b9c7723cafddaa86c98bc5384fe"
  },
  {
    "url": "2018/08/23/js插件封装/index.html",
    "revision": "6271c068c3358df582a99d0a6845cfbe"
  },
  {
    "url": "2018/08/24/ios的坑/index.html",
    "revision": "66a26902ec4debe4e6b7f2dfbd63f0d5"
  },
  {
    "url": "2018/11/30/前端面试201811/index.html",
    "revision": "7288a0aa8c95d242603a6e3e85e9c3c7"
  },
  {
    "url": "2019/04/09/css文字溢出处理/index.html",
    "revision": "c057da1d933794e3648d339a333375ec"
  },
  {
    "url": "2019/04/26/格式化数字/index.html",
    "revision": "7b282f5ceb637e078b12a34c6b9bfed3"
  },
  {
    "url": "2019/06/03/js防抖动功能/index.html",
    "revision": "e99d90e182ea9924116207d81bfe3342"
  },
  {
    "url": "2019/06/24/npm使用git上的包/index.html",
    "revision": "f80c3db4cc5c89128fd44710c84bc188"
  },
  {
    "url": "404.html",
    "revision": "1a849387885ad69f4362f6e676d88a70"
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
    "url": "assets/js/12.b586eb2f.js",
    "revision": "da2fa8969bc6ae3aae02a83bd997fc4d"
  },
  {
    "url": "assets/js/13.378729df.js",
    "revision": "a50a320d4c4d23122757387f4a2e7cd4"
  },
  {
    "url": "assets/js/14.8d480c8f.js",
    "revision": "d4fa40b8e54283c977bcf53ef0177c16"
  },
  {
    "url": "assets/js/15.cdc506ba.js",
    "revision": "9594635cad440a05cbfea7f517f744ea"
  },
  {
    "url": "assets/js/16.f1f92ab9.js",
    "revision": "18e77bb55f092a66ebcd5c5e1dbc1022"
  },
  {
    "url": "assets/js/17.fe980e7f.js",
    "revision": "61b7094bd274f059b0329f03a55267fa"
  },
  {
    "url": "assets/js/18.0b558caa.js",
    "revision": "5bd1b6b2d377545f902a8945a3770b69"
  },
  {
    "url": "assets/js/19.55d6015b.js",
    "revision": "e9a60522e9bdc89741fe9c3ad949987a"
  },
  {
    "url": "assets/js/2.04275579.js",
    "revision": "204640e28b8aa0e4c1949b70f86f0330"
  },
  {
    "url": "assets/js/20.7b4f3bf4.js",
    "revision": "d01d516c60a1ade32ac2111dab04f055"
  },
  {
    "url": "assets/js/21.03af9742.js",
    "revision": "5b0471b1a1fcc237257f73c8e1e206c5"
  },
  {
    "url": "assets/js/22.6446a4ed.js",
    "revision": "a9b33dbd9a471ebd54cbe2cf296fed50"
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
    "url": "assets/js/6.a60043ef.js",
    "revision": "fe8b66718ba51ce267ba944a28905877"
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
    "url": "assets/js/app.efeb131d.js",
    "revision": "745089f12082a50e1b269db2729fafd4"
  },
  {
    "url": "index.html",
    "revision": "f1246685773a2941ae84be536d6236f4"
  },
  {
    "url": "others/index.html",
    "revision": "ccba17f1caa2fc6975211a2230e903d8"
  },
  {
    "url": "others/关于/index.html",
    "revision": "09fb69402d42caafc926178dda4be5aa"
  },
  {
    "url": "others/诗词/index.html",
    "revision": "6d3202e347163fbf91c487daa0ac7262"
  },
  {
    "url": "page/2/index.html",
    "revision": "649812e1cb2e9abe7e3900e6fc1b4d9e"
  },
  {
    "url": "portrait.jpg",
    "revision": "863c98691c26c3761944a50136c434a9"
  },
  {
    "url": "tag/css/index.html",
    "revision": "5c0c13987bb7c4f137fa9a6ea74de107"
  },
  {
    "url": "tag/html/index.html",
    "revision": "5d3ab01d8b3d0424642dfbb5b976c281"
  },
  {
    "url": "tag/index.html",
    "revision": "886e3eddff17e5fa4b66f9b01b8d297b"
  },
  {
    "url": "tag/ios/index.html",
    "revision": "9ef50ab74021db9a11d06e76699a4751"
  },
  {
    "url": "tag/js/index.html",
    "revision": "29a106920fb2ab859870b6e733b78efd"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "32aadb0e7fa41c5728605fe752f57a2b"
  },
  {
    "url": "tag/scss/index.html",
    "revision": "8f3692d725f4f68aeb7bc09725411b7f"
  },
  {
    "url": "tag/VSCode/index.html",
    "revision": "4d66b40873c569a86cfc6fa69b12fd62"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "d3439e674fe65cb24d301d8c2b424e70"
  },
  {
    "url": "tag/编辑器/index.html",
    "revision": "7e9d229c215765731c8809af2194fe67"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "80a66dc0fedf7d0c98d8ae780342ee3f"
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
