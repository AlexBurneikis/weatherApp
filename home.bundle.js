(()=>{"use strict";var e={844:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(81),i=n.n(r),a=n(645),o=n.n(a),c=n(667),s=n.n(c),p=new URL(n(548),n.b),l=o()(i());l.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;900&display=swap);"]);var d=s()(p);l.push([e.id,'*,*::after,*::before{margin:0;padding:0;box-sizing:border-box}body,h1,h2,h3,h4 p,figure,picture{margin:0}h1,h2,h3,h4,h5{text-transform:capitalize;font-weight:400}a,li{text-decoration:none;list-style:none}body{line-height:1.5;min-height:100vh;font-family:"Roboto",sans-serif;grid-template-rows:-webkit-min-content 1fr;grid-template-rows:min-content 1fr;overflow-x:hidden}img,picture{max-width:100%;display:block}input,button,textarea,select{font:inherit;-webkit-appearance:none;appearance:none}input:focus{outline:none;appearance:none}@media(prefers-reduced-motion: reduce){*,*::before,*::after{-webkit-animation-duration:.01ms !important;animation-duration:.01ms !important;-webkit-animation-iteration-count:1 !important;animation-iteration-count:1 !important;transition-duration:.01sms !important;scroll-behavior:auto !important}}.hidden{display:none}.inline{display:inline-block}.flex{display:flex;gap:var(--gap, 1rem)}.grid{display:grid;gap:var(--gap, 1rem)}.d-block{display:block}.container{padding-inline:0rem;margin-inline:auto;max-width:inherit}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}.modal{display:none;position:absolute;top:0;left:0}.modal[data-visible=true]{display:grid;place-items:center;width:100vw;height:100vh;background-color:rgba(0,23,88,.541);backdrop-filter:blur(5px);z-index:1000}body{background-color:#fffffe}@media screen and (min-width: 0px){main{height:90vh;display:grid;place-items:center;font-size:2vmin}main .container--hero{display:grid}main .title{color:#094067;text-align:center}main .search-container{display:grid;grid-template-columns:1fr;gap:.5vh;place-items:center;position:relative}main .search-container .search-label{padding-inline:1vh;opacity:.8;color:#5f6c7b}main .search-container div{display:flex;gap:1vh;padding:.35vh;align-items:center;border:.3vmin solid #094067;border-radius:1.2vmin}main .search-container div input{padding-inline:1vh;outline:none;border:none;border-right:.3vmin solid #3da9fc;color:#5f6c7b}.search-btn{color:#094067;background-color:#094067;-webkit-mask-image:url('+d+");mask-image:url("+d+");-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;width:3vh;height:3vh;cursor:pointer}}@media screen and (max-width: 600px){main{font-size:3.5vmin}}@media screen and (max-height: 400px){.search-btn{width:6vh;height:6vh}}",""]);const u=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(o[s]=!0)}for(var p=0;p<e.length;p++){var l=[].concat(e[p]);r&&o[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},584:(e,t,n)=>{var r=n(379),i=n.n(r),a=n(795),o=n.n(a),c=n(569),s=n.n(c),p=n(565),l=n.n(p),d=n(216),u=n.n(d),h=n(589),m=n.n(h),f=n(844),v={};v.styleTagTransform=m(),v.setAttributes=l(),v.insert=s().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=u(),i()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},o=[],c=0;c<e.length;c++){var s=e[c],p=r.base?s[0]+r.base:s[0],l=a[p]||0,d="".concat(p," ").concat(l);a[p]=l+1;var u=n(d),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var m=i(h,r);r.byIndex=c,t.splice(c,0,{identifier:d,updater:m,references:1})}o.push(d)}return o}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var a=r(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var c=n(a[o]);t[c].references--}for(var s=r(e,i),p=0;p<a.length;p++){var l=n(a[p]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},527:(e,t,n)=>{n(584)},548:(e,t,n)=>{e.exports=n.p+"e5d5168b22647e7f0a59.svg"}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,n(527)})();