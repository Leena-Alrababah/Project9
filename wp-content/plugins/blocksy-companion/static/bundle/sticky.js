!function(){"use strict";var t={n:function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,{a:r}),r},d:function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}},e=window.ctEvents,r=t.n(e),n=window.ctFrontend,i=function(t,e,r){return Math.max(t,Math.min(e,r))},o=function(t,e,r){return e[0]+(e[1]-e[0])/(t[1]-t[0])*(r-t[0])},a=function(t){var e=getComputedStyle(t),r=getComputedStyle(t.firstElementChild),n=parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth)+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),i=parseFloat(e.getPropertyValue("--height"));if(t.querySelector('[data-items] > [data-id="logo"]')){var o=getComputedStyle(t.querySelector('[data-items] > [data-id="logo"]')),a=parseFloat(o.height);if(a+=parseFloat(o.marginTop)+parseFloat(o.marginBottom),t.querySelector(".site-logo-container")){var c=getComputedStyle(t.querySelector(".site-logo-container")),s=parseFloat(c.getPropertyValue("--logo-shrink-height")||0);s>0&&(a=a-s+parseFloat(c.getPropertyValue("--logo-max-height")||50))}a>i&&(i=a)}if(t.querySelector('[data-items] > [data-id*="widget-area"]')){var l=getComputedStyle(t.querySelector('[data-items] > [data-id*="widget-area"]')),u=parseFloat(l.height);u>i&&(i=u)}return i+n},c=function(t){if(t.blcInitialHeight)return t.blcInitialHeight;var e=t.firstElementChild;t.firstElementChild.firstElementChild&&(e=t.firstElementChild.firstElementChild);var r=e.getBoundingClientRect().height;return t.blcInitialHeight=r,r},s=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(t.blcStickyHeight)return t.blcStickyHeight;var r=c(t),n=getComputedStyle(t),i=getComputedStyle(t.firstElementChild);if(t.closest('[data-sticky*="yes"]')){var o=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth);e||(o=0);var s=t.getBoundingClientRect().height-o;if(Math.round(s)!==Math.round(r)||Math.round(r)>Math.round(a(t)))return t.blcStickyHeight=t.getBoundingClientRect().height,s}var l=100;return t.dataset.row.includes("middle")&&(l=n.getPropertyValue("--sticky-shrink")),l&&(r*=parseFloat(l)/100),r},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return 0},e=document.querySelector(".ct-floating-bar");e&&e.style.setProperty("--header-sticky-height-animated",t())};function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var d=null,y=function(t){var e,r=t.stickyContainer,n=t.startPosition;(e=r.querySelectorAll('[data-row*="middle"]'),function(t){if(Array.isArray(t))return u(t)}(e)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){if(t.querySelector('[data-id="logo"] .site-logo-container')){var e=t.querySelector('[data-id="logo"] .site-logo-container'),r=function(t){var e=t.logo,r=t.row;if(d)return d;var n=parseFloat(getComputedStyle(e).getPropertyValue("--logo-max-height")||50),i=parseFloat(getComputedStyle(e).getPropertyValue("--logo-sticky-shrink").toString().replace(",",".")||1),o=c(r),a=s(r);return d={initialHeight:n,stickyShrink:i,rowInitialHeight:o,rowStickyHeight:a}}({logo:e,row:t}),a=r.initialHeight,l=r.stickyShrink,u=r.rowInitialHeight,y=r.rowStickyHeight,f=a*l;1!==l&&e.style.setProperty("--logo-shrink-height","".concat(o([n,n+Math.abs(u===y?a-f:u-y)],[1,l],i(n,n+Math.abs(u===y?a-f:u-y),scrollY))*a,"px"))}}))},f=null,h=function(t){var e=t.stickyContainer,r=(t.containerInitialHeight,t.startPosition);e.querySelector('[data-row*="middle"]')&&[e.querySelector('[data-row*="middle"]')].map((function(t){var e=function(t){var e=t.row;if(f)return f;var r=c(e),n=s(e);return f={rowInitialHeight:r,rowStickyHeight:n}}({row:t}),n=e.rowInitialHeight,a=e.rowStickyHeight;if(n!==a){var l;l=o([r,r+Math.abs(n-a)],[n,a],i(r,r+Math.abs(n-a),scrollY)),t.style.setProperty("--shrink-height","".concat(Math.round(l),"px"))}}))};function m(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return p(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function g(t){return function(t){if(Array.isArray(t))return k(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return k(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?k(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var v=function(t){var e=t.stickyContainer,r=g(e.querySelectorAll("[data-row]")).reduce((function(t,e){return t+s(e,!1)}),0);return{stickyContainerHeight:r,stickyContainerHeightAbsolute:r+parseFloat(getComputedStyle(e).top)}},b=null;function w(t){return function(t){if(Array.isArray(t))return S(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return S(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?S(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function A(t){return function(t){if(Array.isArray(t))return C(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return C(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?C(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var O=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yes";Array.from(t.querySelectorAll("[data-row][data-transparent-row]")).map((function(t){t.dataset.transparentRow=e}))},x=null,I={},j=null,H=null,P=!1,q=function(){f=null,d=null,x=null,j=null,H=null,M=null,P=!1};if(r().on("blocksy:sticky:compute",(function(){setTimeout((function(){q(),T()}),100)})),window.wp&&wp.customize&&wp.customize.selectiveRefresh){var F=!1;wp.customize.selectiveRefresh.bind("partial-content-rendered",(function(t){F||(F=!0,setTimeout((function(){q(),P=!0,T(),F=!1}),500))}))}var M=null,T=function(){if(M!==scrollY){var t=document.querySelector('[data-device="'.concat((0,n.getCurrentScreen)(),'"] [data-sticky]'));if(t){var e=(0,n.getCurrentScreen)({withTablet:!0}),r=I[e],i=!r||P;r&&!P||(I[e]=A(t.querySelectorAll("[data-row]")).reduce((function(t,e){return t+a(e)}),0),r=I[e]),i&&(P=!1,t.parentNode.style.height="".concat(r,"px"));var o=x;null===o&&(o=function(t){-1===t.dataset.sticky.indexOf("shrink")&&t.dataset.sticky.indexOf("auto-hide");var e=t.closest("header").getBoundingClientRect().top+scrollY;if(e>0){var r=document.elementFromPoint(0,3);r&&function(t){for(var e=[];t&&t!==document;t=t.parentNode)e.push(t);return e}(r).map((function(t){return getComputedStyle(t).position})).indexOf("fixed")>-1&&(e-=r.getBoundingClientRect().height)}-1===t.dataset.sticky.indexOf("shrink")&&-1===t.dataset.sticky.indexOf("auto-hide")&&(e+=200);var n=t.parentNode,i=getComputedStyle(document.body),o=parseFloat(i.getPropertyValue("--header-sticky-offset")||0);if(o+=parseFloat(i.getPropertyValue("--frame-size"))||0,1===n.parentNode.children.length||n.parentNode.children[0].classList.contains("ct-sticky-container"))return e>0?e-o:e;var a=Array.from(n.parentNode.children).reduce((function(t,e,r){return t.indexOf(0)>-1||!e.dataset.row?[].concat(A(t),[0]):[].concat(A(t),[e.classList.contains("ct-sticky-container")?0:e.getBoundingClientRect().height])}),[]).reduce((function(t,e){return t+e}),e);return a>0?a-o:a}(t),x=o);var c=j;null===c&&(c=t.closest("[data-device]").getBoundingClientRect().height,j=c);var u=H,d=t.dataset.sticky.split(":").filter((function(t){return"yes"!==t&&"no"!==t&&"fixed"!==t}));u||(u=A(t.querySelectorAll("[data-row]")).reduce((function(t,e){return t+s(e)}),0),H=parseInt(u),l((function(){return-1===d.indexOf("auto-hide")?u>A(t.querySelectorAll("[data-row]")).reduce((function(t,e){return t+a(e)}),0)?"".concat(u,"px"):"".concat(A(t.querySelectorAll("[data-row]")).reduce((function(t,e){return t+s(e)}),0),"px"):"0px"})));var f=o>0&&Math.abs(window.scrollY-o)<5||window.scrollY>o;d.indexOf("shrink")>-1&&(f=o>0?window.scrollY>=o:window.scrollY>0),setTimeout((function(){f&&-1===document.body.dataset.header.indexOf("shrink")&&(document.body.dataset.header="".concat(document.body.dataset.header,":shrink")),!f&&document.body.dataset.header.indexOf("shrink")>-1&&(document.body.dataset.header=document.body.dataset.header.replace(":shrink",""))}),300);var p=scrollY;d.indexOf("shrink")>-1&&function(t){var e=t.containerInitialHeight,r=t.stickyContainer,n=t.isSticky,i=t.startPosition,o=t.stickyComponents;if(0===i&&0===window.scrollY&&(r.dataset.sticky=["fixed"].concat(m(o)).join(":")),n){if(o.indexOf("yes")>-1)return;-1===r.dataset.sticky.indexOf("yes")&&(O(r,"no"),r.dataset.sticky=["yes"].concat(m(o)).join(":")),y({stickyContainer:r,startPosition:i}),h({stickyContainer:r,containerInitialHeight:e,startPosition:i})}else Array.from(r.querySelectorAll("[data-row]")).map((function(t){return t.removeAttribute("style")})),Array.from(r.querySelectorAll('[data-row*="middle"] .site-logo-container')).map((function(t){return t.removeAttribute("style")})),O(r,"yes"),0===i&&window.scrollY<=0?r.dataset.sticky=["fixed"].concat(m(o)).join(":"):r.dataset.sticky=o.join(":")}({stickyContainer:t,stickyContainerHeight:u,containerInitialHeight:r,isSticky:f,startPosition:o,stickyComponents:d}),d.indexOf("auto-hide")>-1&&function(t){var e=t.currentScrollY,r=t.stickyContainer,n=t.containerInitialHeight,i=t.headerInitialHeight,o=t.startPosition,a=t.isSticky,c=t.stickyComponents;a&&e-t.prevScrollY==0&&l((function(){return"0px"})),a?-1===r.dataset.sticky.indexOf("yes")&&e>2*i+o&&(r.dataset.sticky=["yes"].concat(g(c)).join(":"),y({stickyContainer:r,startPosition:o}),h({stickyContainer:r,containerInitialHeight:n,startPosition:o}),O(r,"no"),document.body.removeAttribute("style")):(Array.from(r.querySelectorAll("[data-row]")).map((function(t){return t.removeAttribute("style")})),Array.from(r.querySelectorAll('[data-row*="middle"] .site-logo-container')).map((function(t){return t.removeAttribute("style")})),r.dataset.sticky=g(c).join(":"),O(r,"yes"),l((function(){return"0px"})),b=null),null===b&&(b=1e3);var s=b+t.prevScrollY-e,u=0;if(e>2*i+o||r.dataset.sticky.indexOf("yes")>-1){if(e<=o)u=0;else if(e>t.prevScrollY){var d=v({stickyContainer:r}).stickyContainerHeightAbsolute;u=Math.abs(s)>d?-d:s}else u=s>0?0:s;r.style.transform="translateY(".concat(u,"px)"),b=u}else r.removeAttribute("style");r.dataset.sticky.indexOf("yes")>-1&&(e<=o||e>t.prevScrollY||(y({stickyContainer:r,startPosition:o}),h({stickyContainer:r,containerInitialHeight:n,startPosition:o}))),l((function(){var t=v({stickyContainer:r}).stickyContainerHeight;return"".concat(t-Math.abs(u),"px")}))}({stickyContainer:t,isSticky:f,startPosition:o,stickyComponents:d,containerInitialHeight:r,stickyContainerHeight:u,headerInitialHeight:c,currentScrollY:p,prevScrollY:M}),(d.indexOf("slide")>-1||d.indexOf("fade")>-1)&&function(t){var e=t.stickyContainer,r=t.startPosition,n=t.stickyComponents;t.isSticky?(-1===e.dataset.sticky.indexOf("yes")&&(e.dataset.sticky=["yes-start"].concat(w(n)).join(":"),setTimeout((function(){e.dataset.sticky=e.dataset.sticky.replace("yes-start","yes-end"),setTimeout((function(){e.dataset.sticky=e.dataset.sticky.replace("yes-end","yes")}),200)}),1)),O(e,"no")):-1===e.dataset.sticky.indexOf("yes-hide")&&e.dataset.sticky.indexOf("yes:")>-1&&(Math.abs(window.scrollY-r)>10?(e.dataset.sticky=n.join(":"),setTimeout((function(){Array.from(e.querySelectorAll("[data-row]")).map((function(t){return t.removeAttribute("style")}))}),300),O(e,"yes")):(e.dataset.sticky=["yes-hide-start"].concat(w(n)).join(":"),requestAnimationFrame((function(){e.dataset.sticky=e.dataset.sticky.replace("yes-hide-start","yes-hide-end"),setTimeout((function(){e.dataset.sticky=n.join(":"),setTimeout((function(){Array.from(e.querySelectorAll("[data-row]")).map((function(t){return t.removeAttribute("style")}))}),300),O(e,"yes")}),200)}))))}({stickyContainer:t,isSticky:f,startPosition:o,stickyComponents:d}),M=p}}},Y=function(){if(document.querySelector("header [data-sticky]")){var t=window.width;window.addEventListener("resize",(function(e){window.width!==t&&(t=window.width,q(),T(e),r().trigger("ct:header:update"))}),!1),window.addEventListener("orientationchange",(function(t){q(),T(t),r().trigger("ct:header:update")})),window.addEventListener("scroll",T,!1),window.addEventListener("load",T,!1),T()}};document.body.className.indexOf("e-preview")>-1?setTimeout((function(){Y()}),500):Y(),(0,n.registerDynamicChunk)("blocksy_sticky_header",{mount:function(t){}})}();