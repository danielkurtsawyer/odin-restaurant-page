(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>h});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),l=new URL(t(874),t.b),d=new URL(t(325),t.b),p=i()(o()),u=s()(l),f=s()(d);p.push([e.id,`@font-face {\n    font-family: 'HeaderFont';\n    src: url(${u}) format(truetype);\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'ContentFont';\n    src: url(${f}) format(truetype);\n    font-weight: 400;\n    font-style: normal;\n}\n\n:root {\n    --light-color: #bbe4e9;\n    --dark-color: #79c2d0;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\n#content {\n    height: 100vh;\n    background-color: var(--light-color);\n    display: grid;\n    grid-template-rows: 60px 1fr 30px;\n}\n\n.header {\n    padding: 0px 24px;\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    font-family: 'HeaderFont';\n    font-size: 24px;\n}\n\n.logo {\n    height: 50px;\n    width: auto;\n    flex: none;\n}\n\n.headerText{\n    flex: 1;\n}\n\n.main {\n    font-family: 'ContentFont';\n}\n\nimg {\n    width: 100vw;\n    height: 400px;\n    object-fit: cover;\n    object-position: 50% 40%;\n}\n\np {\n    margin: 24px;\n    text-align: center;\n    \n}\n\n.footer {\n    background-color: var(--dark-color);\n    display: flex; \n    justify-content: center;\n    align-items: center;\n    gap: 6px;\n    font-family: 'ContentFont';\n    font-size: 12px;\n}\n\n`,""]);const h=p},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var h=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},874:(e,n,t)=>{e.exports=t.p+"613585db06f849ca7717.ttf"},325:(e,n,t)=>{e.exports=t.p+"e53e0538893d432e0635.ttf"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const e=t.p+"8268c89cac7483da22f9.png",n=t.p+"d59d06be06971cb47bcf.jpeg";var r=t(379),o=t.n(r),a=t(795),i=t.n(a),c=t(569),s=t.n(c),l=t(565),d=t.n(l),p=t(216),u=t.n(p),f=t(589),h=t.n(f),m=t(426),v={};v.styleTagTransform=h(),v.setAttributes=d(),v.insert=s().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=u(),o()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals,function(){const t=document.querySelector("#content"),r=document.createElement("div");r.classList.add("header");const o=new Image;o.src=e,o.classList.add("logo"),r.appendChild(o);const a=document.createElement("div");a.textContent="Thai Gourmet Food Truck",r.appendChild(a),t.appendChild(r);const i=document.createElement("div");i.classList.add("main");const c=new Image;c.src=n,i.appendChild(c);const s=document.createElement("p");s.textContent="This is my absolute favorite place to get quick, affordable, and delicious Thai food in Oakland. 5/5 stars! Would highly reccomend! - Dan",i.appendChild(s),t.appendChild(i);const l=document.createElement("div");l.classList.add("footer"),l.textContent="Copyright 2023 Daniel Sawyer | ";const d=document.createElement("a");d.textContent="GitHub",d.setAttribute("href","https://github.com/danielkurtsawyer/odin-restaurant-page"),l.appendChild(d),t.appendChild(l)}()})()})();