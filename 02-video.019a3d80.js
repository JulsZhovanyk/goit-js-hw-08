!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n=document.querySelector("iframe"),i=new Vimeo.Player(n),r={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var u="Expected a function",a=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,d=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,v="object"==typeof self&&self&&self.Object===Object&&self,p=s||v||Function("return this")(),y=Object.prototype.toString,m=Math.max,g=Math.min,b=function(){return p.Date.now()};function h(e,t,n){var i,r,o,a,f,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(u);function p(t){var n=i,o=r;return i=r=void 0,l=t,a=e.apply(o,n)}function y(e){return l=e,f=setTimeout(O,t),d?p(e):a}function h(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=o}function O(){var e=b();if(h(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-c);return s?g(n,o-(e-l)):n}(e))}function T(e){return f=void 0,v&&i?p(e):(i=r=void 0,a)}function S(){var e=b(),n=h(e);if(i=arguments,r=this,c=e,n){if(void 0===f)return y(c);if(s)return f=setTimeout(O,t),p(c)}return void 0===f&&(f=setTimeout(O,t)),a}return t=w(t)||0,j(n)&&(d=!!n.leading,o=(s="maxWait"in n)?m(w(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=c=r=f=void 0},S.flush=function(){return void 0===f?a:T(b())},S}function j(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==y.call(e)}(e))return NaN;if(j(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=j(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var i=c.test(e);return i||l.test(e)?d(e.slice(2),i?2:8):f.test(e)?NaN:+e}r=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(u);return j(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),h(e,t,{leading:i,maxWait:t,trailing:r})};i.on("timeUpdate",r((function(e){localStorage.setItem("videoplayer-current-time",JSON.stringify(e))}),1e3));try{var O=JSON.parse(localStorage.getItem("videoplayer-current-time"));i.setCurrentTime(parceData.seconds).then((function(e){O.sec})).catch((function(e){if("RangeError"===e.name)O.sec<0||(O.sec,O.duration)}))}catch(e){e.name,e.message}}();
//# sourceMappingURL=02-video.019a3d80.js.map
