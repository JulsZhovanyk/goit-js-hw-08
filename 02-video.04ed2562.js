const e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("timeUpdate",throttle((function(e){localStorage.getItem("videoplayer-current-time",JSON.stringify(e))}),1e3));try{const e=JSON.parse(localStorage.getItem("videoplayer-current-time"));t.setCurrentTime(parceData.seconds).then((function(t){e.sec})).catch((function(t){if("RangeError"===t.name)e.sec<0||(e.sec,e.duration)}))}catch(e){e.name,e.message}
//# sourceMappingURL=02-video.04ed2562.js.map