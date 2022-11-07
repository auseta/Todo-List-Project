/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t={890:(t,n,e)=>{e.d(n,{Z:()=>s});var r=e(81),a=e.n(r),o=e(645),i=e.n(o)()(a());i.push([t.id,":root {\r\n  --bg-color: #000000;\r\n  --green-color: #03a062;\r\n}\r\n\r\n/* general */\r\n\r\n*,\r\n*::after,\r\n*::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Antic Slab\", serif;\r\n  color: var(--green-color);\r\n}\r\n\r\nh1 {\r\n  font-weight: 100;\r\n}\r\n\r\n\r\ninput[type='text'] {\r\n  background-color: var(--bg-color);\r\n  border: 5px inset var(--green-color);\r\n  height: 30px;\r\n  font-size: 16px;\r\n  padding: 3px 5px;\r\n  outline: none;\r\n}\r\n\r\nbutton {\r\n  background-color: var(--bg-color);\r\n  border: 5px inset var(--green-color);\r\n  font-weight: bolder;\r\n  height: 30px;\r\n  padding: 2px 3px;\r\n}\r\n\r\nbutton:hover {\r\n  color: var(--bg-color);\r\n  background-color: var(--green-color);\r\n  cursor: pointer;\r\n}\r\n\r\n/* APP */\r\n\r\n.container {\r\n  display: grid;\r\n  grid-template-columns: 1fr 5fr;\r\n  grid-template-rows: 100px 10fr 1fr;\r\n  height: 100%;\r\n  padding: 10px 15px;\r\n  gap: 15px;\r\n  background: black;\r\n}\r\n\r\n.header {\r\n  grid-column: 1 / 3;\r\n  display: grid;\r\n  height: 120px;\r\n  grid-template-columns: 1fr 8fr;\r\n  justify-items: center;\r\n  align-items: center;\r\n  background: var(--header-bg-color);\r\n  border: 5px inset var(--green-color);\r\n}\r\n\r\n.header img {\r\n  width: 50px;\r\n}\r\n\r\n.header h1 {\r\n  letter-spacing: 10px;\r\n  font-size: 42px;\r\n  margin-right: 150px;\r\n}\r\n\r\n.aside {\r\n  margin-top: 20px;\r\n  grid-column: 1 / 2;\r\n  grid-row: 2 / 3;\r\n  display: grid;\r\n  padding-left: 10px;\r\n  grid-template-rows: 200px 200px;\r\n  border: 5px inset var(--green-color);\r\n}\r\n\r\n.aside .sections {\r\n  padding: 10px 0;\r\n  display: flex;\r\n  height: 100px;\r\n  gap: 15px;\r\n  align-items: flex-start;\r\n  flex-direction: column;\r\n}\r\n\r\n.projects-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n}\r\n\r\n.aside .sections a, .projects-section {\r\n  margin-top: 5px;\r\n  padding: 5px;\r\n  font-size: 24px;\r\n  background-color: black;\r\n  border: none;\r\n}\r\n\r\n.aside .sections a:hover {\r\n  background-color: #03a062c6;\r\n  color: var(--bg-color);\r\n  cursor: pointer;\r\n}\r\n\r\n.aside .sections a img, .projects-section img {\r\n  vertical-align: -4px;\r\n  margin-right: 4px;\r\n}\r\n\r\n.aside .projects-section .add-project-controls {\r\n  display: flex;\r\n  gap: 5px;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.aside .projects-section .add-project-controls input {\r\n  width: 150px;\r\n}\r\n\r\n.content {\r\n  margin-top: 20px;\r\n  grid-column: 2 / 3;\r\n  grid-row: 2 / 3;\r\n  margin-right: 0;\r\n  padding: 50px;\r\n  padding-left: 120px;\r\n  display: grid;\r\n  justify-items: flex-start;\r\n  grid-template-columns: 1fr;\r\n  grid-template-rows: 1fr 1fr 6fr;\r\n  border: 5px inset var(--green-color);\r\n}\r\n\r\n.content h2 {\r\n  font-size: 32px;\r\n}\r\n\r\n.content button {\r\n  height: 40px;\r\n  font-size: 20px;\r\n  padding: 5px 15px;\r\n}\r\n\r\n.content .tasks-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n.footer {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  grid-column: 1 / 3;\r\n  grid-row: 3 / 4;\r\n}\r\n\r\n.footer p {\r\n  color: var(--green-color);\r\n  padding: 10px 25px;\r\n  border: 5px inset var(--green-color);\r\n  font-size: 24px;\r\n}\r\n\r\n.error-modal {\r\n  display: grid;\r\n  position: absolute;\r\n  grid-template-rows: 1fr 5fr;\r\n  height: 30%;\r\n  width: 30%;\r\n  top: 200px;\r\n  left: 540px;\r\n  padding: 5px 10px;\r\n  background: var(--bg-color);\r\n}\r\n\r\n.error-header {\r\n  display: flex;\r\n  height: 50px;\r\n  justify-content: end;\r\n  border: 5px inset var(--green-color);\r\n}\r\n\r\n.error-header button {\r\n  background-color: black;\r\n  border: none;\r\n}\r\n\r\n.error-header button:hover {\r\n  cursor: pointer;\r\n}\r\n.error-header button img {\r\n  width: 35px;\r\n}\r\n\r\n.error-content {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding-left: 50px;\r\n  font-size: 20px;\r\n  border: 5px inset var(--green-color);\r\n  border-top: none;\r\n}\r\n\r\n/** ADD TASK MODAL  */\r\n\r\n.task-modal-container {\r\n  position: absolute;\r\n  font-family: 'Antic Slab', sans-serif;\r\n  height: 400px;\r\n  width: 380px;\r\n  display: grid;\r\n  top: 170px;\r\n  left: 300px;\r\n  background-color: var(--bg-color);\r\n  border: 5px inset var(--green-color);\r\n  grid-template-columns: 1fr 1fr;\r\n  padding: 10px;\r\n  gap: 10px;\r\n  align-items: center;\r\n  color: var(--green-color);\r\n}\r\n\r\n.task-modal-container input, .task-modal-container select {\r\n  border: 5px inset var(--green-color);\r\n  background-color: var(--bg-color);\r\n  color: var(--green-color);\r\n  height: 35px;\r\n  font-size: 18px;\r\n}\r\n\r\n.task-modal-containerr input::placeholder {\r\n  color: #03a061c5;\r\n}\r\n\r\n.task-modal-container input[type='checkbox'] {\r\n  width: 30px;\r\n  height: 30px;\r\n  appearance: none;\r\n}\r\n\r\n.task-modal-container input[type='checkbox']:checked::before {\r\n  content: 'X';\r\n  padding-top: 6px;\r\n  padding-left: 4px;\r\n  font-size: 18px;\r\n}\r\n\r\n.task-modal-container button {\r\n  padding: 5px 15px;\r\n  width: 100px;\r\n  font-size: 18px;\r\n  font-weight: bolder;\r\n  height: 40px;\r\n}\r\n\r\n/* task */\r\n\r\n.task {\r\n  display: flex;\r\n  gap: 5px;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  color: #03a062;\r\n  padding: 10px 0;\r\n  padding-left: 25px;\r\n  width: 800px;\r\n  border: 5px inset #03a062;\r\n  background-color: #000000;\r\n}\r\n\r\n.delete-task {\r\n  display: flex;\r\n  justify-content: end;\r\n  padding-bottom: 0;\r\n  padding-right: 25px;\r\n}\r\n\r\n.delete-task button {\r\n  height: 32px;\r\n  width: 32px;\r\n  padding: 0px;\r\n}\r\n\r\n.task h2 {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.task p {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.task-description {\r\n  display: grid;\r\n  grid-template-columns: 2fr 1fr;\r\n  align-items: center;\r\n}\r\n\r\n.task-state {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}",""]);const s=i},645:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var u=this[s][0];null!=u&&(i[u]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var o={},i=[],s=0;s<t.length;s++){var u=t[s],d=r.base?u[0]+r.base:u[0],l=o[d]||0,c="".concat(d," ").concat(l);o[d]=l+1;var f=e(c),h={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==f)n[f].references++,n[f].updater(h);else{var g=a(h,r);r.byIndex=s,n.splice(s,0,{identifier:c,updater:g,references:1})}i.push(c)}return i}function a(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var s=e(o[i]);n[s].references--}for(var u=r(t,a),d=0;d<o.length;d++){var l=e(o[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=u}}},569:t=>{var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},565:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:t=>{t.exports=function(t){var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var a=void 0!==e.layer;a&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,a&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return t[r](o,o.exports,e),o.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.nc=void 0,(()=>{var t=e(379),n=e.n(t),r=e(795),a=e.n(r),o=e(569),i=e.n(o),s=e(565),u=e.n(s),d=e(216),l=e.n(d),c=e(589),f=e.n(c),h=e(890),g={};function m(t,n){if(n.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+n.length+" present")}function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function v(t){return m(1,arguments),t instanceof Date||"object"===p(t)&&"[object Date]"===Object.prototype.toString.call(t)}function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function y(t){m(1,arguments);var n=Object.prototype.toString.call(t);return t instanceof Date||"object"===b(t)&&"[object Date]"===n?new Date(t.getTime()):"number"==typeof t||"[object Number]"===n?new Date(t):("string"!=typeof t&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function w(t){if(m(1,arguments),!v(t)&&"number"!=typeof t)return!1;var n=y(t);return!isNaN(Number(n))}function x(t){if(null===t||!0===t||!1===t)return NaN;var n=Number(t);return isNaN(n)?n:n<0?Math.ceil(n):Math.floor(n)}function k(t,n){m(2,arguments);var e=y(t).getTime(),r=x(n);return new Date(e+r)}function T(t,n){m(2,arguments);var e=x(n);return k(t,-e)}g.styleTagTransform=f(),g.setAttributes=u(),g.insert=i().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=l(),n()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;var C=864e5;function M(t){m(1,arguments);var n=1,e=y(t),r=e.getUTCDay(),a=(r<n?7:0)+r-n;return e.setUTCDate(e.getUTCDate()-a),e.setUTCHours(0,0,0,0),e}function S(t){m(1,arguments);var n=y(t),e=n.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(e+1,0,4),r.setUTCHours(0,0,0,0);var a=M(r),o=new Date(0);o.setUTCFullYear(e,0,4),o.setUTCHours(0,0,0,0);var i=M(o);return n.getTime()>=a.getTime()?e+1:n.getTime()>=i.getTime()?e:e-1}function D(t){m(1,arguments);var n=S(t),e=new Date(0);e.setUTCFullYear(n,0,4),e.setUTCHours(0,0,0,0);var r=M(e);return r}var P=6048e5,U={};function E(){return U}function W(t,n){var e,r,a,o,i,s,u,d;m(1,arguments);var l=E(),c=x(null!==(e=null!==(r=null!==(a=null!==(o=null==n?void 0:n.weekStartsOn)&&void 0!==o?o:null==n||null===(i=n.locale)||void 0===i||null===(s=i.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==a?a:l.weekStartsOn)&&void 0!==r?r:null===(u=l.locale)||void 0===u||null===(d=u.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==e?e:0);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=y(t),h=f.getUTCDay(),g=(h<c?7:0)+h-c;return f.setUTCDate(f.getUTCDate()-g),f.setUTCHours(0,0,0,0),f}function N(t,n){var e,r,a,o,i,s,u,d;m(1,arguments);var l=y(t),c=l.getUTCFullYear(),f=E(),h=x(null!==(e=null!==(r=null!==(a=null!==(o=null==n?void 0:n.firstWeekContainsDate)&&void 0!==o?o:null==n||null===(i=n.locale)||void 0===i||null===(s=i.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==a?a:f.firstWeekContainsDate)&&void 0!==r?r:null===(u=f.locale)||void 0===u||null===(d=u.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==e?e:1);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var g=new Date(0);g.setUTCFullYear(c+1,0,h),g.setUTCHours(0,0,0,0);var p=W(g,n),v=new Date(0);v.setUTCFullYear(c,0,h),v.setUTCHours(0,0,0,0);var b=W(v,n);return l.getTime()>=p.getTime()?c+1:l.getTime()>=b.getTime()?c:c-1}function q(t,n){var e,r,a,o,i,s,u,d;m(1,arguments);var l=E(),c=x(null!==(e=null!==(r=null!==(a=null!==(o=null==n?void 0:n.firstWeekContainsDate)&&void 0!==o?o:null==n||null===(i=n.locale)||void 0===i||null===(s=i.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==a?a:l.firstWeekContainsDate)&&void 0!==r?r:null===(u=l.locale)||void 0===u||null===(d=u.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==e?e:1),f=N(t,n),h=new Date(0);h.setUTCFullYear(f,0,c),h.setUTCHours(0,0,0,0);var g=W(h,n);return g}var Y=6048e5;function j(t,n){for(var e=t<0?"-":"",r=Math.abs(t).toString();r.length<n;)r="0"+r;return e+r}const O=function(t,n){var e=t.getUTCFullYear(),r=e>0?e:1-e;return j("yy"===n?r%100:r,n.length)},L=function(t,n){var e=t.getUTCMonth();return"M"===n?String(e+1):j(e+1,2)},A=function(t,n){return j(t.getUTCDate(),n.length)},z=function(t,n){return j(t.getUTCHours()%12||12,n.length)},H=function(t,n){return j(t.getUTCHours(),n.length)},F=function(t,n){return j(t.getUTCMinutes(),n.length)},Q=function(t,n){return j(t.getUTCSeconds(),n.length)},X=function(t,n){var e=n.length,r=t.getUTCMilliseconds();return j(Math.floor(r*Math.pow(10,e-3)),n.length)};var G={G:function(t,n,e){var r=t.getUTCFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return e.era(r,{width:"abbreviated"});case"GGGGG":return e.era(r,{width:"narrow"});default:return e.era(r,{width:"wide"})}},y:function(t,n,e){if("yo"===n){var r=t.getUTCFullYear(),a=r>0?r:1-r;return e.ordinalNumber(a,{unit:"year"})}return O(t,n)},Y:function(t,n,e,r){var a=N(t,r),o=a>0?a:1-a;return"YY"===n?j(o%100,2):"Yo"===n?e.ordinalNumber(o,{unit:"year"}):j(o,n.length)},R:function(t,n){return j(S(t),n.length)},u:function(t,n){return j(t.getUTCFullYear(),n.length)},Q:function(t,n,e){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(n){case"Q":return String(r);case"QQ":return j(r,2);case"Qo":return e.ordinalNumber(r,{unit:"quarter"});case"QQQ":return e.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return e.quarter(r,{width:"narrow",context:"formatting"});default:return e.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,n,e){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(n){case"q":return String(r);case"qq":return j(r,2);case"qo":return e.ordinalNumber(r,{unit:"quarter"});case"qqq":return e.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return e.quarter(r,{width:"narrow",context:"standalone"});default:return e.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,n,e){var r=t.getUTCMonth();switch(n){case"M":case"MM":return L(t,n);case"Mo":return e.ordinalNumber(r+1,{unit:"month"});case"MMM":return e.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return e.month(r,{width:"narrow",context:"formatting"});default:return e.month(r,{width:"wide",context:"formatting"})}},L:function(t,n,e){var r=t.getUTCMonth();switch(n){case"L":return String(r+1);case"LL":return j(r+1,2);case"Lo":return e.ordinalNumber(r+1,{unit:"month"});case"LLL":return e.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return e.month(r,{width:"narrow",context:"standalone"});default:return e.month(r,{width:"wide",context:"standalone"})}},w:function(t,n,e,r){var a=function(t,n){m(1,arguments);var e=y(t),r=W(e,n).getTime()-q(e,n).getTime();return Math.round(r/Y)+1}(t,r);return"wo"===n?e.ordinalNumber(a,{unit:"week"}):j(a,n.length)},I:function(t,n,e){var r=function(t){m(1,arguments);var n=y(t),e=M(n).getTime()-D(n).getTime();return Math.round(e/P)+1}(t);return"Io"===n?e.ordinalNumber(r,{unit:"week"}):j(r,n.length)},d:function(t,n,e){return"do"===n?e.ordinalNumber(t.getUTCDate(),{unit:"date"}):A(t,n)},D:function(t,n,e){var r=function(t){m(1,arguments);var n=y(t),e=n.getTime();n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0);var r=n.getTime(),a=e-r;return Math.floor(a/C)+1}(t);return"Do"===n?e.ordinalNumber(r,{unit:"dayOfYear"}):j(r,n.length)},E:function(t,n,e){var r=t.getUTCDay();switch(n){case"E":case"EE":case"EEE":return e.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return e.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return e.day(r,{width:"short",context:"formatting"});default:return e.day(r,{width:"wide",context:"formatting"})}},e:function(t,n,e,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(n){case"e":return String(o);case"ee":return j(o,2);case"eo":return e.ordinalNumber(o,{unit:"day"});case"eee":return e.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return e.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return e.day(a,{width:"short",context:"formatting"});default:return e.day(a,{width:"wide",context:"formatting"})}},c:function(t,n,e,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(n){case"c":return String(o);case"cc":return j(o,n.length);case"co":return e.ordinalNumber(o,{unit:"day"});case"ccc":return e.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return e.day(a,{width:"narrow",context:"standalone"});case"cccccc":return e.day(a,{width:"short",context:"standalone"});default:return e.day(a,{width:"wide",context:"standalone"})}},i:function(t,n,e){var r=t.getUTCDay(),a=0===r?7:r;switch(n){case"i":return String(a);case"ii":return j(a,n.length);case"io":return e.ordinalNumber(a,{unit:"day"});case"iii":return e.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return e.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return e.day(r,{width:"short",context:"formatting"});default:return e.day(r,{width:"wide",context:"formatting"})}},a:function(t,n,e){var r=t.getUTCHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return e.dayPeriod(r,{width:"narrow",context:"formatting"});default:return e.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,n,e){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",n){case"b":case"bb":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return e.dayPeriod(r,{width:"narrow",context:"formatting"});default:return e.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,n,e){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",n){case"B":case"BB":case"BBB":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return e.dayPeriod(r,{width:"narrow",context:"formatting"});default:return e.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,n,e){if("ho"===n){var r=t.getUTCHours()%12;return 0===r&&(r=12),e.ordinalNumber(r,{unit:"hour"})}return z(t,n)},H:function(t,n,e){return"Ho"===n?e.ordinalNumber(t.getUTCHours(),{unit:"hour"}):H(t,n)},K:function(t,n,e){var r=t.getUTCHours()%12;return"Ko"===n?e.ordinalNumber(r,{unit:"hour"}):j(r,n.length)},k:function(t,n,e){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===n?e.ordinalNumber(r,{unit:"hour"}):j(r,n.length)},m:function(t,n,e){return"mo"===n?e.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):F(t,n)},s:function(t,n,e){return"so"===n?e.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):Q(t,n)},S:function(t,n){return X(t,n)},X:function(t,n,e,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(n){case"X":return B(a);case"XXXX":case"XX":return I(a);default:return I(a,":")}},x:function(t,n,e,r){var a=(r._originalDate||t).getTimezoneOffset();switch(n){case"x":return B(a);case"xxxx":case"xx":return I(a);default:return I(a,":")}},O:function(t,n,e,r){var a=(r._originalDate||t).getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+R(a,":");default:return"GMT"+I(a,":")}},z:function(t,n,e,r){var a=(r._originalDate||t).getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+R(a,":");default:return"GMT"+I(a,":")}},t:function(t,n,e,r){var a=r._originalDate||t;return j(Math.floor(a.getTime()/1e3),n.length)},T:function(t,n,e,r){return j((r._originalDate||t).getTime(),n.length)}};function R(t,n){var e=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return e+String(a);var i=n||"";return e+String(a)+i+j(o,2)}function B(t,n){return t%60==0?(t>0?"-":"+")+j(Math.abs(t)/60,2):I(t,n)}function I(t,n){var e=n||"",r=t>0?"-":"+",a=Math.abs(t);return r+j(Math.floor(a/60),2)+e+j(a%60,2)}const J=G;var _=function(t,n){switch(t){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});default:return n.date({width:"full"})}},$=function(t,n){switch(t){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});default:return n.time({width:"full"})}};const Z={p:$,P:function(t,n){var e,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return _(t,n);switch(a){case"P":e=n.dateTime({width:"short"});break;case"PP":e=n.dateTime({width:"medium"});break;case"PPP":e=n.dateTime({width:"long"});break;default:e=n.dateTime({width:"full"})}return e.replace("{{date}}",_(a,n)).replace("{{time}}",$(o,n))}};function K(t){var n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),t.getTime()-n.getTime()}var V=["D","DD"],tt=["YY","YYYY"];function nt(t){return-1!==V.indexOf(t)}function et(t){return-1!==tt.indexOf(t)}function rt(t,n,e){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(n,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(n,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(n,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(n,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var at={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function ot(t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.width?String(n.width):t.defaultWidth,r=t.formats[e]||t.formats[t.defaultWidth];return r}}const it={date:ot({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:ot({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:ot({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var st={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function ut(t){return function(n,e){var r;if("formatting"===(null!=e&&e.context?String(e.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,o=null!=e&&e.width?String(e.width):a;r=t.formattingValues[o]||t.formattingValues[a]}else{var i=t.defaultWidth,s=null!=e&&e.width?String(e.width):t.defaultWidth;r=t.values[s]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(n):n]}}const dt={ordinalNumber:function(t,n){var e=Number(t),r=e%100;if(r>20||r<10)switch(r%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"},era:ut({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:ut({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:ut({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:ut({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:ut({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function lt(t){return function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=n.match(a);if(!o)return null;var i,s=o[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(u)?ft(u,(function(t){return t.test(s)})):ct(u,(function(t){return t.test(s)}));i=t.valueCallback?t.valueCallback(d):d,i=e.valueCallback?e.valueCallback(i):i;var l=n.slice(s.length);return{value:i,rest:l}}}function ct(t,n){for(var e in t)if(t.hasOwnProperty(e)&&n(t[e]))return e}function ft(t,n){for(var e=0;e<t.length;e++)if(n(t[e]))return e}var ht,gt={ordinalNumber:(ht={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.match(ht.matchPattern);if(!e)return null;var r=e[0],a=t.match(ht.parsePattern);if(!a)return null;var o=ht.valueCallback?ht.valueCallback(a[0]):a[0];o=n.valueCallback?n.valueCallback(o):o;var i=t.slice(r.length);return{value:o,rest:i}}),era:lt({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:lt({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:lt({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:lt({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:lt({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const mt={code:"en-US",formatDistance:function(t,n,e){var r,a=at[t];return r="string"==typeof a?a:1===n?a.one:a.other.replace("{{count}}",n.toString()),null!=e&&e.addSuffix?e.comparison&&e.comparison>0?"in "+r:r+" ago":r},formatLong:it,formatRelative:function(t,n,e,r){return st[t]},localize:dt,match:gt,options:{weekStartsOn:0,firstWeekContainsDate:1}};var pt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,vt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,bt=/^'([^]*?)'?$/,yt=/''/g,wt=/[a-zA-Z]/;function xt(t){var n=t.match(bt);return n?n[1].replace(yt,"'"):t}const kt=document;class Tt{static saveTask(t,n="default title",e,r,a,o){return{id:t,title:n||"DEFAULT TITLE",description:e,date:r||"No date",notes:a,completed:o}}static renderTasks(t){const n=kt.querySelector(".tasks-container");n.innerHTML="",t.forEach((t=>{const e=kt.createElement("div");e.className="task",e.id=t.id,e.innerHTML=`\n        <div class='delete-task'>\n          <button id='delete-task'>X</button>\n        </div>\n        <div class='task-title'>\n          <h3>${t.title}</h3>\n        </div>\n        <div class='task-description'>\n          <span>Description: ${t.description}</span>\n          <span>Date: ${"No date"===t.date?"No date":function(t,n,e){var r,a,o,i,s,u,d,l,c,f,h,g,p,v,b,k,C,M;m(2,arguments);var S=String(n),D=E(),P=null!==(r=null!==(a=null==e?void 0:e.locale)&&void 0!==a?a:D.locale)&&void 0!==r?r:mt,U=x(null!==(o=null!==(i=null!==(s=null!==(u=null==e?void 0:e.firstWeekContainsDate)&&void 0!==u?u:null==e||null===(d=e.locale)||void 0===d||null===(l=d.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==s?s:D.firstWeekContainsDate)&&void 0!==i?i:null===(c=D.locale)||void 0===c||null===(f=c.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==o?o:1);if(!(U>=1&&U<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var W=x(null!==(h=null!==(g=null!==(p=null!==(v=null==e?void 0:e.weekStartsOn)&&void 0!==v?v:null==e||null===(b=e.locale)||void 0===b||null===(k=b.options)||void 0===k?void 0:k.weekStartsOn)&&void 0!==p?p:D.weekStartsOn)&&void 0!==g?g:null===(C=D.locale)||void 0===C||null===(M=C.options)||void 0===M?void 0:M.weekStartsOn)&&void 0!==h?h:0);if(!(W>=0&&W<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!P.localize)throw new RangeError("locale must contain localize property");if(!P.formatLong)throw new RangeError("locale must contain formatLong property");var N=y(t);if(!w(N))throw new RangeError("Invalid time value");var q=K(N),Y=T(N,q),j={firstWeekContainsDate:U,weekStartsOn:W,locale:P,_originalDate:N};return S.match(vt).map((function(t){var n=t[0];return"p"===n||"P"===n?(0,Z[n])(t,P.formatLong):t})).join("").match(pt).map((function(r){if("''"===r)return"'";var a=r[0];if("'"===a)return xt(r);var o=J[a];if(o)return null!=e&&e.useAdditionalWeekYearTokens||!et(r)||rt(r,n,String(t)),null!=e&&e.useAdditionalDayOfYearTokens||!nt(r)||rt(r,n,String(t)),o(Y,r,P.localize,j);if(a.match(wt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return r})).join("")}(new Date(t.date),"MM/dd/yyyy")} </span>\n        </div>\n        <div class='task-notes'>\n          <span>${t.notes}</span>\n        </div>\n        <div class='task-state'>\n          <label for='state'>Completed: </label>\n          <input type='checkbox' id='state' ${t.completed?"checked":""} >\n        </div>\n      `,n.append(e)}))}}const Ct=document,Mt=Ct.querySelector(".content"),St=[];let Dt=1;const Pt=()=>{Ct.querySelector(".task-modal-container").remove()},Ut=()=>{const t=Ct.querySelector("#task-title"),n=Ct.querySelector("#task-description"),e=Ct.querySelector("#task-date"),r=Ct.querySelector("#task-notes"),a=!0===Ct.querySelector("#task-state").checked;St.push(Tt.saveTask(Dt,t.value,n.value,e.value,r.value,a)),Dt++,Pt(),Tt.renderTasks(St),Ct.querySelectorAll(".task"),Ct.querySelectorAll(".delete-task").forEach((t=>{t.addEventListener("click",(()=>{const n=t.parentNode;St.forEach((t=>{t.id===+n.id&&(St.splice(St.indexOf(t),1),n.remove(),console.log(St))}))}))}))};document.querySelector("#inbox").addEventListener("click",(()=>{Mt.innerHTML="";const t=Ct.createElement("h2"),n=Ct.createElement("button"),e=Ct.createElement("div");e.className="tasks-container",n.textContent="+Add task",n.id="open-task-modal",t.textContent="Inbox",Mt.append(t,n,e),Tt.renderTasks(St),Ct.querySelector("#open-task-modal").addEventListener("click",(()=>{(()=>{const t=Ct.querySelector(".tasks-container"),n=Ct.createElement("div");n.className="task-modal-container",n.innerHTML="\n      <label for='task-title'>Title: </label>\n      <input type='text' id='task-title' placeholder='task title' maxlength='24'>\n      <label for='task-description'>Description: </label>\n      <input type='text' id='task-description' placeholder='task description' maxlength='24'>\n      <label for='task-date'>Date: </label>\n      <input type='date' id='task-date'>\n      <label for='task-prior'>Priority: </label>\n      <select id='task-prior'>\n        <option value='high'>High</option>\n        <option value='mid'>Mid</option>\n        <option value='low'>Low</option>\n      </select>\n      <label for='task-notes'>Notes: </label>\n      <input type='text' id='task-notes' placeholder='add a note' maxlength='24'>\n      <label for='task-state'>Completed: </label>\n      <input type='checkbox' id='task-state'>\n      <button id='add-task-button' type='button'>Add</button>\n      <button id='close-task-modal' type='button'>Cancel</button>\n  ",t.append(n)})(),Ct.querySelector("#close-task-modal").addEventListener("click",Pt),Ct.querySelector("#add-task-button").addEventListener("click",Ut)}))}))})()})();