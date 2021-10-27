import Player from '@vimeo/player';

const throttle = require('lodash.throttle');
const player = new Player(document.querySelector('iframe'));

player.on('timeupdate', throttle(setVideoplayerCurrentTime, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).catch(function (error) {
  console.log(error);
});

function setVideoplayerCurrentTime(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}
