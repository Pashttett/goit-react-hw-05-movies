/*! For license information please see 384.2c9adffb.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[384],{129:function(t,r,e){e.d(r,{Lo:function(){return h},SU:function(){return u},TZ:function(){return l},VQ:function(){return f},z1:function(){return s}});var n=e(861),o=e(243);function a(){a=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function h(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{h({},"")}catch(t){h=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var a=r&&r.prototype instanceof y?r:y,i=Object.create(a.prototype),c=new P(n||[]);return o(i,"_invoke",{value:j(t,e,c)}),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=l;var p="suspendedStart",d="executing",v="completed",g={};function y(){}function m(){}function w(){}var x={};h(x,c,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(I([])));L&&L!==e&&n.call(L,c)&&(x=L);var E=w.prototype=y.prototype=Object.create(x);function k(t){["next","throw","return"].forEach((function(r){h(t,r,(function(t){return this._invoke(r,t)}))}))}function _(t,r){function e(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?r.resolve(h.__await).then((function(t){e("next",t,i,c)}),(function(t){e("throw",t,i,c)})):r.resolve(h).then((function(t){s.value=t,i(s)}),(function(t){return e("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return a=a?a.then(o,o):o()}})}function j(r,e,n){var o=p;return function(a,i){if(o===d)throw new Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=f(r,e,n);if("normal"===s.type){if(o=n.done?v:"suspendedYield",s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function O(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,O(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=f(o,r.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,g;var i=a.arg;return i?i.done?(e[r.resultName]=i.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function Z(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function S(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(Z,this),this.reset(!0)}function I(r){if(r||""===r){var e=r[c];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError(typeof r+" is not iterable")}return m.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:m,configurable:!0}),m.displayName=h(w,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,h(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},k(_.prototype),h(_.prototype,u,(function(){return this})),r.AsyncIterator=_,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new _(l(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(E),h(E,s,"Generator"),h(E,c,(function(){return this})),h(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=I,P.prototype={constructor:P,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),S(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;S(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:I(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),g}},r}var i="d30456e4d3ee6b31f7190be35549114f",c="https://api.themoviedb.org/3/",u=function(){var t=(0,n.Z)(a().mark((function t(){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(c,"/trending/all/day?api_key=").concat(i));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 7:return t.prev=7,t.t0=t.catch(0),console.error("Error fetching movies:",t.t0),t.abrupt("return",[]);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)(a().mark((function t(r){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(c,"/search/movie?api_key=").concat(i,"&query=").concat(r));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:return t.prev=7,t.t0=t.catch(0),console.error("Error searching movies:",t.t0),t.abrupt("return",[]);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(r){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(a().mark((function t(r){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(c,"movie/").concat(r,"?api_key=").concat(i));case 3:if(200!==(e=t.sent).status){t.next=8;break}return t.abrupt("return",e.data);case 8:throw Error("Failed to get film by ID");case 9:t.next=15;break;case 11:return t.prev=11,t.t0=t.catch(0),console.error("Error getting film by ID:",t.t0),t.abrupt("return",null);case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(r){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(a().mark((function t(r){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(c,"movie/").concat(r,"/credits?api_key=").concat(i));case 3:if(200!==(e=t.sent).status||!e.data){t.next=8;break}return t.abrupt("return",e.data);case 8:console.error("Failed to get cast data for film with ID: ".concat(r));case 9:t.next=15;break;case 11:throw t.prev=11,t.t0=t.catch(0),console.error("Error getting film cast by ID:",t.t0),t.t0;case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(a().mark((function t(r){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("".concat(c,"movie/").concat(r,"/reviews?api_key=").concat(i));case 3:if(200!==(e=t.sent).status||!e.data){t.next=8;break}return t.abrupt("return",e.data);case 8:console.error("Failed to get reviews data for film with ID: ".concat(r));case 9:t.next=15;break;case 11:throw t.prev=11,t.t0=t.catch(0),console.error("Error getting film reviews by ID:",t.t0),t.t0;case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(r){return t.apply(this,arguments)}}()},472:function(t,r,e){e.d(r,{Z:function(){return l}});e(791);var n,o,a=e(87),i=e(168),c=e(867),u=c.ZP.div(n||(n=(0,i.Z)(["\n  background-color: #f0f0f0;\n  padding: 0.5rem;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);\n  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;\n\n  img {\n    width: 420px;\n    max-width: 100%;\n    height: auto;\n    border-radius: 8px;\n  }\n\n  h2 {\n    font-size: 1.1rem;\n    color: #333;\n    padding: 12px;\n    transition: color 0.3s ease-in-out;\n  }\n\n  &:hover {\n    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);\n    transform: translateY(-4px);\n  }\n\n  &:hover h2 {\n    color: #1b5e20;\n  }\n"]))),s=c.ZP.div(o||(o=(0,i.Z)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 0.5rem;\n  margin-top: 1rem;\n"]))),h=e(184),l=function(t){var r=t.movies;return(0,h.jsx)(s,{children:r.map((function(t){return(0,h.jsx)(a.rU,{to:"/movies/".concat(t.id),children:(0,h.jsxs)(u,{children:[(0,h.jsx)("img",{src:t.poster_path?"https://image.tmdb.org/t/p/w500".concat(t.poster_path):"https://taho.com.ua/image/cache/placeholder-335x200w.png.webp",alt:t.title}),(0,h.jsx)("h2",{children:t.title||t.name})]})},t.id)}))})}},384:function(t,r,e){e.r(r),e.d(r,{default:function(){return w}});var n,o,a,i,c=e(861),u=e(439),s=e(791),h=e(168),l=e(867),f=l.ZP.div(n||(n=(0,h.Z)(["\n  padding: 20px;\n"]))),p=l.ZP.form(o||(o=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n\n  input {\n    margin-right: 25px;\n    width: 456px;\n    max-width: 100%;\n    padding: 10px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    transition: border-color 0.3s;\n    padding-left: 10px;\n\n    &:hover {\n      border-color: darkgreen;\n    }\n  }\n\n  button {\n    padding: 10px 20px;\n    background-color: black;\n    border: none;\n    color: white;\n    font-weight: bold;\n    border-radius: 4px;\n    cursor: pointer;\n    transition: background-color 0.3s;\n\n    &:hover {\n      background-color: darkgreen;\n    }\n  }\n"]))),d=(l.ZP.div(a||(a=(0,h.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(440px, 1fr)); /* Update this line */\n  gap: 20px;\n  margin-top: 20px;\n"]))),l.ZP.div(i||(i=(0,h.Z)(["\n  background-color: #f0f0f0;\n  padding: 16px;\n  border-radius: 8px;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);\n  transition: box-shadow 0.3s, border-radius 0.3s, transform 0.3s;\n\n  img {\n    max-width: 100%;\n    height: auto;\n    border-radius: 4px;\n  }\n\n  h2 {\n    color: #333;\n    margin-top: 8px;\n    padding: 12px;\n    font-size: 1.2rem;\n    transition: color 0.3s;\n  }\n\n  &:hover {\n    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);\n    border-radius: 12px;\n    transform: translateY(-4px);\n  }\n\n  &:hover h2 {\n    color: darkgreen;\n    transition: color 0.3s;\n  }\n"]))),e(472)),v=e(689),g=e(129),y=e(184);function m(){m=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var a=r&&r.prototype instanceof g?r:g,i=Object.create(a.prototype),c=new P(n||[]);return o(i,"_invoke",{value:j(t,e,c)}),i}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var f="suspendedStart",p="executing",d="completed",v={};function g(){}function y(){}function w(){}var x={};s(x,i,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(I([])));L&&L!==e&&n.call(L,i)&&(x=L);var E=w.prototype=g.prototype=Object.create(x);function k(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function _(t,r){function e(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?r.resolve(h.__await).then((function(t){e("next",t,i,c)}),(function(t){e("throw",t,i,c)})):r.resolve(h).then((function(t){s.value=t,i(s)}),(function(t){return e("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return a=a?a.then(o,o):o()}})}function j(r,e,n){var o=f;return function(a,i){if(o===p)throw new Error("Generator is already running");if(o===d){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var s=l(r,e,n);if("normal"===s.type){if(o=n.done?d:"suspendedYield",s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=d,n.method="throw",n.arg=s.arg)}}}function O(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,O(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var a=l(o,r.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,v;var i=a.arg;return i?i.done?(e[r.resultName]=i.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function Z(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function S(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(Z,this),this.reset(!0)}function I(r){if(r||""===r){var e=r[i];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError(typeof r+" is not iterable")}return y.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:y,configurable:!0}),y.displayName=s(w,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===y||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,s(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},k(_.prototype),s(_.prototype,c,(function(){return this})),r.AsyncIterator=_,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new _(h(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(E),s(E,u,"Generator"),s(E,i,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=I,P.prototype={constructor:P,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),S(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;S(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:I(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),v}},r}var w=function(){var t=(0,v.TH)(),r=sessionStorage.getItem("searchTerm")||"",e=JSON.parse(sessionStorage.getItem("searchResults"))||[],n=(0,s.useState)(r),o=(0,u.Z)(n,2),a=o[0],i=o[1],h=(0,s.useState)(e),l=(0,u.Z)(h,2),w=l[0],x=l[1],b=function(){var t=(0,c.Z)(m().mark((function t(r){var e;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),""!==a.trim()){t.next=4;break}return x([]),t.abrupt("return");case 4:return t.next=6,(0,g.z1)(a);case 6:e=t.sent,x(e),sessionStorage.setItem("searchTerm",a),sessionStorage.setItem("searchResults",JSON.stringify(e));case 10:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}();return(0,s.useEffect)((function(){t.state&&t.state.fromMoviesPage&&(sessionStorage.removeItem("searchTerm"),sessionStorage.removeItem("searchResults"))}),[t.state]),(0,y.jsxs)(f,{children:[(0,y.jsx)("h1",{children:"Search Movies"}),(0,y.jsxs)(p,{onSubmit:b,children:[(0,y.jsx)("input",{type:"text",placeholder:"Enter movie title...",value:a,onChange:function(t){return i(t.target.value)}}),(0,y.jsx)("button",{type:"submit",children:"Search"})]}),(0,y.jsx)(d.Z,{movies:w})]})}}}]);
//# sourceMappingURL=384.2c9adffb.chunk.js.map