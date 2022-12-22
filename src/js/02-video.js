import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const time = 'videoplayer-current-time';

const timeHandle = function (data) {
  localStorage.setItem(time, data.seconds);
};
player.on('timeupdate', throttle(timeHandle, 1000));

const newTimeHandle = localStorage.getItem(time);
if (newTimeHandle) {
  player.setCurrentTime(newTimeHandle.seconds);
}
