!function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var t={};r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=0)}([function(e,r,t){"use strict";var n=t(1),o={rootMargin:"50px 0px",threshold:.01},a=document.querySelectorAll(".lazy-image");new n.LazyLoad(a,o)},function(e,r,t){"use strict";function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(r,"__esModule",{value:!0});r.LazyLoad=function e(r,t){var o=this;if(n(this,e),Object.defineProperty(this,"onIntersection",{enumerable:!0,writable:!0,value:function(e){var r=!0,t=!1,n=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done);r=!0){var l=a.value;l.intersectionRatio&&(o.observer.unobserve(l.target),o.preloadImage(l.target))}}catch(e){t=!0,n=e}finally{try{!r&&i.return&&i.return()}finally{if(t)throw n}}}}),Object.defineProperty(this,"preloadImage",{enumerable:!0,writable:!0,value:function(e){var r=e.dataset.src;return r?new Promise(function(e,t){var n=new Image;n.src=r,n.onload=e,n.onerror=t}).then(function(t){o.applyImage(e,r)}):Promise.reject(null)}}),Object.defineProperty(this,"applyImage",{enumerable:!0,writable:!0,value:function(e,r){e.src=r,e.classList.add("image-handled")}}),"IntersectionObserver"in window){this.observer=new IntersectionObserver(this.onIntersection,t);var a=!0,i=!1,l=void 0;try{for(var u,c=r[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var s=u.value;this.observer.observe(s)}}catch(e){i=!0,l=e}finally{try{!a&&c.return&&c.return()}finally{if(i)throw l}}}else{var f=!0,v=!1,d=void 0;try{for(var y,b=r[Symbol.iterator]();!(f=(y=b.next()).done);f=!0){var p=y.value;this.preloadImage(p)}}catch(e){v=!0,d=e}finally{try{!f&&b.return&&b.return()}finally{if(v)throw d}}}}}]);