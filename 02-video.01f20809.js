!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n=document.querySelector("iframe"),i=new Vimeo.Player(n),r={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var u="Expected a function",f=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,d=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,v="object"==typeof self&&self&&self.Object===Object&&self,m=s||v||Function("return this")(),y=Object.prototype.toString,p=Math.max,g=Math.min,b=function(){return m.Date.now()};function h(e,t,n){var i,r,o,f,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(u);function m(t){var n=i,o=r;return i=r=void 0,l=t,f=e.apply(o,n)}function y(e){return l=e,a=setTimeout(w,t),d?m(e):f}function h(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=o}function w(){var e=b();if(h(e))return O(e);a=setTimeout(w,function(e){var n=t-(e-c);return s?g(n,o-(e-l)):n}(e))}function O(e){return a=void 0,v&&i?m(e):(i=r=void 0,f)}function S(){var e=b(),n=h(e);if(i=arguments,r=this,c=e,n){if(void 0===a)return y(c);if(s)return a=setTimeout(w,t),m(c)}return void 0===a&&(a=setTimeout(w,t)),f}return t=T(t)||0,j(n)&&(d=!!n.leading,o=(s="maxWait"in n)?p(T(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=c=r=a=void 0},S.flush=function(){return void 0===a?f:O(b())},S}function j(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function T(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==y.call(e)}(e))return NaN;if(j(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=j(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var i=c.test(e);return i||l.test(e)?d(e.slice(2),i?2:8):a.test(e)?NaN:+e}r=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(u);return j(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),h(e,t,{leading:i,maxWait:t,trailing:r})};var w="videoplayer-current-time";i.on("timeupdate",r((function(e){localStorage.setItem(w,JSON.stringify(e))}),1e3));var O=localStorage.getItem(w);O&&i.setCurrentTime(O.seconds),i.setCurrentTime(O).then((function(e){O.seconds})).catch((function(e){if("RangeError"===e.name)O.seconds<0||(O.seconds,O.duration);else e.name,e.message}))}();
//# sourceMappingURL=02-video.01f20809.js.map
