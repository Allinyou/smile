(function(e){function t(t){for(var a,r,u=t[0],s=t[1],l=t[2],c=0,f=[];c<u.length;c++)r=u[c],o[r]&&f.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var u=n[r];0!==o[u]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-4425":"38a0a9dd"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-4425":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-4425":"c6906637"}[e]+".css",r=s.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===r))return t()}var c=document.getElementsByTagName("style");for(i=0;i<c.length;i++){u=c[i],l=u.getAttribute("data-href");if(l===a||l===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.request=a,n(o)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){r[e]=0}));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise(function(t,n){a=o[e]=[t,n]});t.push(a[2]=i);var l,c=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.src=u(e),l=function(t){f.onerror=f.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");i.type=a,i.request=r,n[1](i)}o[e]=void 0}};var p=setTimeout(function(){l({type:"timeout",target:f})},12e4);f.onerror=f.onload=l,c.appendChild(f)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/newcli/dist/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var p=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1914:function(e,t,n){},"21bb":function(e,t,n){"use strict";var a=n("1914"),r=n.n(a);r.a},2856:function(e,t,n){},"4f0e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=(n("5c0b"),n("2877")),u={},s=Object(i["a"])(u,r,o,!1,null,null,null);s.options.__file="App.vue";var l=s.exports,c=n("ebee"),f=n.n(c),p=(n("77ed"),n("d375"),n("c93e")),d=n("8c4f"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"fullpage-container"},[n("div",{directives:[{name:"fullpage",rawName:"v-fullpage",value:e.opts,expression:"opts"}],staticClass:"fullpage-wp"},[n("div",{staticClass:"page-1 page"},[n("p",{directives:[{name:"animate",rawName:"v-animate",value:{value:"bounceInLeft"},expression:"{value: 'bounceInLeft'}"}],staticClass:"part-1"},[e._v("vue-fullpage")])]),n("div",{staticClass:"page-2 page"},[n("p",{directives:[{name:"animate",rawName:"v-animate",value:{value:"bounceInRight"},expression:"{value: 'bounceInRight'}"}],staticClass:"part-2"},[e._v("vue-fullpage")])]),n("div",{staticClass:"page-3 page"},[n("p",{directives:[{name:"animate",rawName:"v-animate",value:{value:"bounceInLeft",delay:0},expression:"{value: 'bounceInLeft', delay: 0}"}],staticClass:"part-3"},[e._v("vue-fullpage")]),n("p",{directives:[{name:"animate",rawName:"v-animate",value:{value:"bounceInRight",delay:600},expression:"{value: 'bounceInRight', delay: 600}"}],staticClass:"part-3"},[e._v("vue-fullpage")]),n("p",{directives:[{name:"animate",rawName:"v-animate",value:{value:"zoomInDown",delay:1200},expression:"{value: 'zoomInDown', delay: 1200}"}],staticClass:"part-3"},[e._v("vue-fullpage")])])])])])},m=[],h=n("bc3a"),g=n.n(h),b=(g.a.create({baseURL:"/api",transformRequest:[function(e){return JSON.stringify(e)}],headers:{"Content-Type":"application/x-www-form-urlencoded"}}),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))])])}),y=[],w={name:"HelloWorld",props:{msg:{type:String,default:"hello"}}},_=w,x=(n("6d43"),Object(i["a"])(_,b,y,!1,null,"516cda74",null));x.options.__file="HelloWorld.vue";var C=x.exports,j={methods:{goAbout:function(){this.$router.push({name:"about"})}}},k={name:"home",mixins:[j],data:function(){return{time:0,list1:[],list:[{name:"1"},{name:"2"},{name:"3"},{name:"4"},{name:"5"},{name:"6"},{name:"7"}],opts:{start:0,dir:"v",duration:500,beforeChange:function(e,t){},afterChange:function(e,t){}}}},components:{HelloWorld:C},methods:{goAbout:function(){this.$router.push({name:"about"})}},mounted:function(){var e=this,t=0,n=setInterval(function(){t>=7?clearInterval(n):(e.list1.push(e.list[t]),t+=1)},200)}},E=k,O=(n("21bb"),Object(i["a"])(E,v,m,!1,null,null,null));O.options.__file="Home.vue";var I=O.exports,N=function(){return n.e("chunk-4425").then(n.bind(null,"f820"))};a["a"].use(d["a"]);var S=new d["a"]({mode:"history",base:"/newcli/dist/",routes:[{path:"/",name:"home",component:I,meta:{title:"高荣珍个人简历",auth:!1}},{path:"/about",name:"about",component:N,meta:{title:"关于我",auth:!1}}]});S.beforeEach(function(e,t,n){var a=e.meta.title;if(a&&(document.title=a),e.meta.auth){var r=localStorage.getItem("token");if(!r&&"/login"!==e.path){var o={to:e.fullPath};n({path:"/login",query:Object(p["a"])({},o)})}}n()});var A=S,P=n("2f62");a["a"].use(P["a"]);var T=new P["a"].Store({state:{},mutations:{},actions:{}}),L=n("9483");Object(L["a"])("".concat("/newcli/dist/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),a["a"].use(f.a);var R=new Audio("./assets/audio/1111.mp3");R.loop="loop",R.play(),a["a"].config.productionTip=!1;var $=function(){var e=document.documentElement.clientWidth;document.documentElement.style.fontSize="".concat(e/750*100,"px")};$(),window.addEventListener("resize",$),new a["a"]({router:A,store:T,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("2856"),r=n.n(a);r.a},"6d43":function(e,t,n){"use strict";var a=n("4f0e"),r=n.n(a);r.a}});
//# sourceMappingURL=app.00ac1aee.js.map