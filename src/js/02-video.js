const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const throttle = require('lodash.throttle');
const time = 'videoplayer-current-time';

const timeHandle = function (data) {
  localStorage.setItem(time, JSON.stringify(data));
};

player.on('timeupdate', throttle(timeHandle, 1000));

const newTimeHandle = localStorage.getItem(time);
if (newTimeHandle) {
  player.setCurrentTime(newTimeHandle.seconds);
}

player
  .setCurrentTime(newTimeHandle)
  .then(function (seconds) {
    seconds = newTimeHandle.seconds;
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        newTimeHandle.seconds < 0 ||
          newTimeHandle.seconds > newTimeHandle.duration;
        break;

      default:
        error.name;
        error.message;
        break;
    }
  });

// try {
//   const dataParced = JSON.parse(localStorage.getItem(time));
//   player
//     .setCurrentTime(dataParced.seconds)
//     .then(function (seconds) {
//       seconds = dataParced.seconds;
//     })
//     .catch(function (error) {
//       switch (error.name) {
//         case 'RangeError':
//           dataParced.seconds < 0 || dataParced.seconds > dataParced.duration;
//           break;
//       }
//     });
// } catch (error) {
//   error.name;
//   error.message;
// }

// const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);
// const throttle = require('lodash.throttle');

// const onPlay = function (data) {
//   localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
// };

// player.on('timeupdate', throttle(onPlay, 1000));

// try {
//   const parsedData = JSON.parse(
//     localStorage.getItem('videoplayer-current-time')
//   );
//   player
//     .setCurrentTime(parsedData.seconds)
//     .then(function (seconds) {
//       seconds = parsedData.seconds;
//     })
//     .catch(function (error) {
//       switch (error.name) {
//         case 'RangeError':
//           parsedData.seconds < 0 || parsedData.seconds > parsedData.duration;
//           break;
//       }
//     });
// } catch (error) {
//   error.name;
//   error.message;
// }

// import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';

// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);
// const CURRENT_TIME = 'videoplayer-current-time';

// const onTime = function (data) {
//   localStorage.setItem(CURRENT_TIME, data.seconds);
// };
// player.on('timeupdate', throttle(onTime, 1000));

// const newTime = localStorage.getItem(CURRENT_TIME);
// if (newTime) {
//   player.setCurrentTime(newTime);
// }
