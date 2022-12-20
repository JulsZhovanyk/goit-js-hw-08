const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const throttle = require('lodash.throttle');

const playHandle = function (data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
};

player.on('timeUpdate', throttle(playHandle, 1000));

try {
  const dataParced = JSON.parse(
    localStorage.getItem('videoplayer-current-time')
  );
  player
    .setCurrentTime(parceData.seconds)
    .then(function (sec) {
      sec = dataParced.sec;
    })
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          dataParced.sec < 0 || dataParced.sec > dataParced.duration;
          break;
      }
    });
} catch (error) {
  error.name;
  error.message;
}
