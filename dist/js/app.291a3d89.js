(function(e){function t(t){for(var a,r,s=t[0],c=t[1],l=t[2],d=0,v=[];d<s.length;d++)r=s[d],i[r]&&v.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(v.length)v.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},i={app:0},o=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/smile/dist/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"11d9":function(e,t,n){e.exports=n.p+"img/3.1eb9e86a.jpg"},"280a":function(e,t,n){e.exports=n.p+"img/fff.8cd7c9ad.gif"},2856:function(e,t,n){},"2d96":function(e,t,n){e.exports=n.p+"media/Friendships.bd25400c.mp3"},"358c":function(e,t,n){e.exports=n.p+"media/C400000KSVf32VXoTE.7e26e418.mp3"},"405a":function(e,t,n){e.exports=n.p+"img/2.7ca620e8.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"fullpage-container"},[a("div",{directives:[{name:"fullpage",rawName:"v-fullpage",value:e.opts,expression:"opts"}],staticClass:"fullpage-wp",on:{afterChange:e.afterChange}},[a("div",{staticClass:"page-1 page"},[a("div",{staticClass:"filter"}),a("span",{directives:[{name:"animate",rawName:"v-animate",value:{value:"bounceInDown"},expression:"{value: 'bounceInDown'}"}]},[e._v("笑 笑")]),a("img",{directives:[{name:"animate",rawName:"v-animate",value:{value:"swing"},expression:"{value: 'swing'}"}],staticClass:"img-1",attrs:{src:n("280a"),alt:""}}),a("span",{directives:[{name:"animate",rawName:"v-animate",value:{value:"bounceInUp"},expression:"{value: 'bounceInUp'}"}]},[e._v("2018年10月18日")])]),a("div",{staticClass:"page-2 page"},[a("div",{staticClass:"filter"}),a("img",{directives:[{name:"animate",rawName:"v-animate",value:{value:"bounceInLeft"},expression:"{value: 'bounceInLeft'}"}],staticClass:"img-1",attrs:{src:n("11d9"),alt:""}}),a("img",{directives:[{name:"animate",rawName:"v-animate",value:{value:"bounceInRight"},expression:"{value: 'bounceInRight'}"}],staticClass:"img-2",attrs:{src:n("8554"),alt:""}}),a("img",{directives:[{name:"animate",rawName:"v-animate",value:{value:"bounceInLeft"},expression:"{value: 'bounceInLeft'}"}],staticClass:"img-3",attrs:{src:n("405a"),alt:""}})]),a("div",{staticClass:"page-3 page"},[a("p",{directives:[{name:"animate",rawName:"v-animate",value:{value:"bounceInLeft",delay:0},expression:"{value: 'bounceInLeft', delay: 0}"}],staticClass:"part-3"},[e._v("vue-fullpage")]),a("p",{directives:[{name:"animate",rawName:"v-animate",value:{value:"bounceInRight",delay:600},expression:"{value: 'bounceInRight', delay: 600}"}],staticClass:"part-3"},[e._v("vue-fullpage")]),a("p",{directives:[{name:"animate",rawName:"v-animate",value:{value:"zoomInDown",delay:1200},expression:"{value: 'zoomInDown', delay: 1200}"}],staticClass:"part-3"},[e._v("vue-fullpage")])]),a("div",{staticClass:"page-4 page"},[a("div",{staticClass:"filter"}),a("img",{directives:[{name:"animate",rawName:"v-animate",value:{value:"rollIn"},expression:"{value: 'rollIn'}"}],staticClass:"img-1",attrs:{src:n("fd1f"),alt:""}})])])]),a("div",{staticClass:"number"},[e._v(e._s(e.nownumber+1)+"/4")]),a("canvas",{attrs:{id:"canvas1",height:"520",width:"300"}}),a("canvas",{attrs:{id:"canvas2",height:"520",width:"300"}})])},o=[],r=(n("34ef"),{data:function(){var e=this;return{color1:"red",color2:"green",nownumber:0,opts:{start:0,dir:"v",duration:500,preventWechat:!0,beforeChange:function(e,t){},afterChange:function(t,n){e.nownumber=n,console.log(t,n)}}}},methods:{drawFreq:function(){var e=document.getElementById("canvas1"),t=e.getContext("2d"),n=document.getElementById("canvas2"),a=n.getContext("2d"),i=window.AudioContext||window.webkitAudioContext,o=new i,r=o.createMediaElementSource(this.audio),s=o.createAnalyser();r.connect(s),s.connect(o.destination);var c=new Uint8Array(4),l=this;(function i(){s.getByteFrequencyData(c),t.clearRect(0,0,e.width,e.height),a.clearRect(0,0,n.width,n.height);for(var o=150,r=0;r<4;r++){var u=c[r]/1.5,d=c[3-r]/1.5;t.beginPath(),t.lineWidth=50;var v=r*o+30;t.moveTo(0,v),t.lineTo(u,v),t.closePath(),t.strokeStyle=l.color1,t.stroke(),a.beginPath(),a.lineWidth=50,a.moveTo(n.width,v),a.lineTo(n.width-d,v),a.closePath(),a.strokeStyle=l.color2,a.stroke()}requestAnimationFrame(i)})()},afterChange:function(e,t){console.log(t)}},mounted:function(){var e=["red","orange","cyan"],t=Math.floor(3*Math.random()),n=Math.floor(3*Math.random());this.color1=e[t],this.color2=e[n],this.drawFreq()}}),s=r,c=(n("5c0b"),n("2877")),l=Object(c["a"])(s,i,o,!1,null,null,null);l.options.__file="App.vue";var u=l.exports,d=(n("77ed"),n("d375"),n("ebee")),v=n.n(d),p=n("358c"),f=n.n(p),m=n("2d96"),g=n.n(m),h=n("9483");Object(h["a"])("".concat("/smile/dist/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),a["a"].use(v.a),a["a"].config.productionTip=!1;var w=function(){var e=document.documentElement.clientWidth;document.documentElement.style.fontSize="".concat(e/750*100,"px")};w(),window.addEventListener("resize",w);var b=2,y=new Audio;y.src=g.a,y.autoplay=!0,y.addEventListener("ended",function(){1==b?(y.src=g.a,b=2):(y.src=f.a,b=1)}),a["a"].prototype.audio=y,new a["a"]({render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("2856"),i=n.n(a);i.a},8554:function(e,t,n){e.exports=n.p+"img/1.8e365ac5.jpg"},fd1f:function(e,t,n){e.exports=n.p+"img/362458738353902347.d1d959b0.jpg"}});
//# sourceMappingURL=app.291a3d89.js.map