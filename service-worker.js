if(!self.define){let s,e={};const a=(a,d)=>(a=new URL(a+".js",d).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(d,c)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let r={};const b=s=>a(s,i),f={module:{uri:i},exports:r,require:b};e[i]=Promise.all(d.map((s=>f[s]||b(s)))).then((s=>(c(...s),r)))}}define(["./workbox-2572b17b"],(function(s){"use strict";s.setCacheNameDetails({prefix:"Superdeep"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.clientsClaim(),s.precacheAndRoute([{url:"assets/css/0.styles.785c0160.css",revision:"9c1a8e1a45d4b3e9b46335666a0a0d1e"},{url:"assets/img/danger-dark.86c63c40.svg",revision:"86c63c4006d5cd5f860cdef57310696a"},{url:"assets/img/danger.1c7d8a0f.svg",revision:"1c7d8a0f45b8bee5d5b92334a16e2711"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.a1decb69.svg",revision:"a1decb69db82fb8eebb48704dd74e649"},{url:"assets/img/info.6f2cfedb.svg",revision:"6f2cfedb8e6d19d1b24eb73943f7ff4e"},{url:"assets/img/note-dark.8668720f.svg",revision:"8668720f2e50ebd01173f11a89d9da6e"},{url:"assets/img/note.32319b2e.svg",revision:"32319b2e9c86860d8a4f1c8f660096cb"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.0d0028db.svg",revision:"0d0028db13caec45ac1527d8b673fae0"},{url:"assets/img/tip.a9004be5.svg",revision:"a9004be5a8a5a83cc9c77bba88c816ff"},{url:"assets/img/warning-dark.b995cb45.svg",revision:"b995cb45fa552ac10ad35fa7716af15b"},{url:"assets/img/warning.57a43d6d.svg",revision:"57a43d6dcdee07d8db78a5dd3d6137ba"},{url:"assets/js/48.82a54d65.js",revision:"801c062de07275a9ed66972895e0c8af"},{url:"assets/js/49.63685df8.js",revision:"98d10e6b01ea08e2c51d8e24afad8616"},{url:"assets/js/50.f43dca2a.js",revision:"ca1aaf9a4b9d246aabc968a87ea7e679"},{url:"assets/js/51.30b8c1bd.js",revision:"8f8ee35351f21fc9badfd0c7f0447de2"},{url:"assets/js/52.9ce95a6f.js",revision:"14545cc37ac8b23e71dc97736be21c03"},{url:"assets/js/53.90e930e6.js",revision:"8d94ca9a31f275a60655f75c60b35c2a"},{url:"assets/js/54.bb3f05a7.js",revision:"3f5ce1269b3bcf85ffc8ca603eac336f"},{url:"assets/js/app.ee842c29.js",revision:"97cdff027d1bd46b66d00759fa02b76e"},{url:"assets/js/layout-Blog.8f855f10.js",revision:"71128d80e0d99f6a4b2c761f6c8655fc"},{url:"assets/js/layout-Layout.34943754.js",revision:"0fda33ab15812c500496459114127dca"},{url:"assets/js/layout-NotFound.75f69678.js",revision:"092b4a732041fbb160a5bd5df1d03469"},{url:"assets/js/layout-Slide.1af199a6.js",revision:"d5aad34c554d2fca21ff69643e2616ca"},{url:"assets/js/page-360摄像头防护文件更改.a5e5cb4d.js",revision:"5cbc5624117ba155d54ccbdcd5f31ccd"},{url:"assets/js/page-Git的使用和踩坑.aab8ebb1.js",revision:"70d66e121ec50bff6f2905c35a8fabe9"},{url:"assets/js/page-ipadmini1复活笔记.9cf1452b.js",revision:"ea92b1f492af9acdd751c3c56e03407a"},{url:"assets/js/page-kali渗透笔记.6747cf6d.js",revision:"9fe22ed2ca2e0b06db06b3097e2332b0"},{url:"assets/js/page-kal部署以及美化笔记.7e2a4281.js",revision:"d09f067fc9c2afb40b511951cfcf3845"},{url:"assets/js/page-Linux实用笔记.11699944.js",revision:"d3d2d9fd2d16a8c82a250f708b77046b"},{url:"assets/js/page-Proxmark3.5c92735a.js",revision:"0cd2a7c8a15556bb1cae269f5c6866bd"},{url:"assets/js/page-pythonpip更新错误.ba29223f.js",revision:"22a2289c55c54f8b99393a81a8387f43"},{url:"assets/js/page-python脚本.a81b1d57.js",revision:"b2e45d09ea774d663cfdd580a8c5f315"},{url:"assets/js/page-VScode手记.64c2e425.js",revision:"f0361fab608aaaad2a1820b8dfbdfbe6"},{url:"assets/js/page-Vuepress插件安装推荐及问题指南.14cbae39.js",revision:"f73d98bfc2bd9fd70751dde8e5fb0ecb"},{url:"assets/js/page-Vuepress美化指南.d4f81c53.js",revision:"880386bfa96676bbdae59ca5e9d640fe"},{url:"assets/js/page-Vuepress踩坑.cc0a5b88.js",revision:"386b460eebba794252ab7b7bf068f538"},{url:"assets/js/page-Vuepress部署.1152b17d.js",revision:"06a7c665cd137f25f89650fad7478c01"},{url:"assets/js/page-WindowsPE笔记.27dc2949.js",revision:"1e5690b9a2e25aa5c94633b5c39b4cdb"},{url:"assets/js/page-WindowsTerminal笔记.743ba505.js",revision:"19ff1974c607e9b63faa55d2fcd2c121"},{url:"assets/js/page-Windows实用命令.a557ad7f.js",revision:"5e7d9eb4364300476742a615d276306c"},{url:"assets/js/page-Windows速查手册.ef65ce5c.js",revision:"5a83b3236b17d8144cd056a7e6f25b2f"},{url:"assets/js/page-主页.e0ef646b.js",revision:"fcfb40047feb4db2ab02e9f9c1d34104"},{url:"assets/js/page-优雅的使用Windows.f9e3139a.js",revision:"c0727035bf303b4842fadcd65c258717"},{url:"assets/js/page-写在前面的话.059595d0.js",revision:"cb28b138167646ad452e1dab792c6286"},{url:"assets/js/page-华为主题修改与制作（轻雨）.1398deaf.js",revision:"953b66faaeb3a7e2907166d213e28086"},{url:"assets/js/page-奇奇怪怪的小知识.33c56529.js",revision:"5cb6df520098579edd7b34983c5a36c7"},{url:"assets/js/page-好物推荐.0b24ce58.js",revision:"0748ce8b7411c6ce656a1879764fa62d"},{url:"assets/js/page-安卓应用折腾.e0ccd483.js",revision:"49679b8b94e609a355a29cde213b3def"},{url:"assets/js/page-开启小米路由器硬盘访问.18c3dc3d.js",revision:"361725621f9ef02c06b0ca50d1a2b9a8"},{url:"assets/js/page-打造良好多终端写作体验.108b92d6.js",revision:"fc4f04e5ddba3e5d1e03d4fa15d3f04c"},{url:"assets/js/page-更换华为P9电池.fd722058.js",revision:"3e31aedafbb071a24097d21f92fdcd52"},{url:"assets/js/page-注册表笔记.e429dfd4.js",revision:"f62eea0cf53da210a61731e4e0167969"},{url:"assets/js/page-清理脚本.21e70f7c.js",revision:"b263d47bdc364c8decb3b615b7e04fbf"},{url:"assets/js/page-获取中兴F412光猫超级管理密码.7aa953cc.js",revision:"4fd844fee2d35c27977cbc47c191246f"},{url:"assets/js/page-软件使用小知识.8e51e53c.js",revision:"d06ca4073219d63be632f704e2a007fd"},{url:"assets/js/page-软件技巧.bedabcf7.js",revision:"b8dbdb38f3b96e077966d35fbe0fc17e"},{url:"assets/js/page-软件推荐集锦.7bbbb4b7.js",revision:"edbdede15d488a5674f12162ff803a5a"},{url:"assets/js/page-闲记.441d7915.js",revision:"c8db4a4ea9d1e29bdc9d5507657b2578"},{url:"assets/js/page-随身adb.96d0710f.js",revision:"9ce438b5c93445aa04351d23a3699e3c"},{url:"assets/js/vendors~layout-Blog~layout-Layout.02f38343.js",revision:"565c80d701eeccaa2e5b4461457300ef"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.4324ea5b.js",revision:"24c412469a40f2ebdfa3c48862591af8"},{url:"assets/js/vendors~layout-Layout.12de06cb.js",revision:"19d71c5013e893a4636d26232d3e0f3c"},{url:"assets/js/vendors~photo-swipe.e4100bab.js",revision:"accdb15b992864f34b9dca7ce646f521"},{url:"assets/js/vendors~reveal.ed568f10.js",revision:"dacfe5b17df11e6419c92179f8083e84"},{url:"assets/js/vendors~waline.45565c4a.js",revision:"4334e042888ed8d007a540d1408cab2c"},{url:"index.html",revision:"3aa22a19704eeed9f47b4419f8c5839a"}],{}),s.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map