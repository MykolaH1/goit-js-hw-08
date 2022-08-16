import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
//записує в localStorage час
player.on('timeupdate', throttle(function(data) {
   localStorage.setItem ("videoplayer-current-time", JSON.stringify(data.seconds));
},1000));


const saveTime = localStorage.getItem("videoplayer-current-time");
//перевіряю чи в змінній є якісь дан

   saveTime & player.setCurrentTime(saveTime);