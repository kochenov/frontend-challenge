(function(){"use strict";var e={5625:function(e,t,n){var o=n(9242),r=n(3396);const a={class:"root"},i={class:"page"},s=(0,r._)("footer",{id:"footer"},null,-1);function c(e,t,n,o,c,u){const l=(0,r.up)("NavigationMain"),f=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",a,[(0,r._)("div",i,[(0,r.Wm)(l),(0,r.Wm)(f)]),s])}var u=n(65);const l={class:"wrap"},f=(0,r.Uk)("Все котики"),d=(0,r.Uk)("Любимые котики");function p(e,t,n,o,a,i){const s=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("header",null,[(0,r._)("div",l,[(0,r._)("ul",null,[(0,r._)("li",null,[(0,r.Wm)(s,{to:"/","active-class":"active"},{default:(0,r.w5)((()=>[f])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(s,{to:"/favorits","active-class":"active"},{default:(0,r.w5)((()=>[d])),_:1})])])])])}var v={name:"NavigationMain"},m=n(89);const h=(0,m.Z)(v,[["render",p],["__scopeId","data-v-6832aa6b"]]);var g=h,b={components:{NavigationMain:g},computed:{},methods:{...(0,u.nv)({loadCats:"loadAction"})},mounted(){this.loadCats()}};const y=(0,m.Z)(b,[["render",c]]);var w=y,F=n(5431);(0,F.z)("/frontend-challenge/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var k=n(678),O=[{path:"/",name:"home",meta:{title:"Кошачий пинтерест"},component:()=>n.e(322).then(n.bind(n,8322))},{path:"/favorits",name:"favorins",meta:{title:"Список любимых котиков"},component:()=>n.e(877).then(n.bind(n,6877))},{path:"/:pathMatch(.*)*",name:"NotFound",meta:{},component:()=>n.e(651).then(n.bind(n,2651))}];const C=O,E=(0,k.p7)({history:(0,k.PO)(),routes:C});E.beforeEach(((e,t,n)=>{"undefined"!==typeof e.meta.title&&(document.title=`${e.meta.title}`),n()}));var S=E,_=n(6265),j=n.n(_),N=(0,u.MT)({state:{cats:[],limit:15,page:0,order:"DESC",catsFaforits:[],loading:!0},getters:{getCats:e=>{let t=e.catsFaforits,n=e.cats,o=n.map((e=>(t.forEach((t=>{e=e.id==t.id?{...e,favorite:!0}:e})),e)));return o},getFavorits:e=>e.catsFaforits},mutations:{setLoading:(e,t)=>{e.loading=t},setCats:(e,t)=>{e.cats=[...e.cats,...t]},setFaforits:e=>{e.catsFaforits=JSON.parse(localStorage.favorite)},addFavorite:(e,t)=>{let n=e.cats.map((e=>e.id==t.id?e=t:e)),o=e.catsFaforits;o=[...o,t],e.catsFaforits=o,localStorage.favorite=JSON.stringify(e.catsFaforits),e.cats=n},deleteFavorite:(e,t)=>{let n=e.cats,o=e.catsFaforits;n.forEach((e=>{e.id==t.id&&delete e.favorite})),e.cats=n,e.catsFaforits=o.filter((e=>e.id!==t.id)),localStorage.favorite=JSON.stringify(e.catsFaforits)}},actions:{loadAction({commit:e,state:t}){e("setLoading",!0),t.page+=1,j()({method:"get",url:"",params:{limit:t.limit,page:t.page,order:t.order,size:"thumb"}}).then((t=>{200==t.status&&(e("setCats",t.data),e("setFaforits"))})).catch((e=>{console.log("Это ошибки:",e)})).finally((()=>{e("setLoading",!1)}))},addFavoriteAction({commit:e},t){!0!==t.favorite&&(t={...t,favorite:!0},e("addFavorite",t))},deleteFavoriteAction({commit:e},t){!0===t.favorite&&e("deleteFavorite",t)}},modules:{}}),A=n(6423);const x=(0,o.ri)(w);j().defaults.baseURL="https://api.thecatapi.com/v1/images/search",j().defaults.headers.common["x-api-key"]="45fbfa2d-54ce-41af-bcec-4c961a6d335f",x.use(N).use(S).use(A.Z,j()).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,loaded:!1,exports:{}};return e[o](a,a.exports,n),a.loaded=!0,a.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],a=e[l][2];for(var s=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"static/js/"+e+"."+{322:"9500cd71",651:"d914b038",877:"f8a38fbd"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"static/css/"+e+"."+{322:"94a92b89",877:"9b63d5e4"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="cats-project:";n.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var s,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var f=u[l];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==t+a){s=f;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=o),e[o]=[r];var d=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/frontend-challenge/"}(),function(){var e=function(e,t,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(a){if(r.onerror=r.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,r.parentNode.removeChild(r),o(c)}};return r.onerror=r.onload=a,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===t)return r}},o=function(o){return new Promise((function(r,a){var i=n.miniCssF(o),s=n.p+i;if(t(i,s))return r();e(o,s,r,a)}))},r={143:0};n.f.miniCss=function(e,t){var n={322:1,877:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(t),s=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],s=o[1],c=o[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var l=c(n)}for(t&&t(o);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},o=self["webpackChunkcats_project"]=self["webpackChunkcats_project"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(5625)}));o=n.O(o)})();