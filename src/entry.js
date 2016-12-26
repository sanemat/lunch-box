import YouTubePlayer from 'youtube-player';
import queryString from 'query-string';

const previousDefaultId = 'CTl1BDngldc';
const nextDefaultId = 'q6_U9r2qZl8';
const marginDefaultSecond = 6;
const previousVideoId = queryString.parse(location.search).pv || previousDefaultId;
const nextVideoId = queryString.parse(location.search).nv || nextDefaultId;
const marginSecond = queryString.parse(location.search).mg || marginDefaultSecond;

const player1 = YouTubePlayer('player-1', {
  videoId: previousVideoId,
});
const player2 = YouTubePlayer('player-2', {
  videoId: nextVideoId,
  width: '0',
  height: '0',
  playerVars: {
    start: marginSecond,
  },
});

function playBoth(p1, p2) {
  p1.playVideo();
  p2.playVideo();
  p2.pauseVideo();
}

function forceLunchBox(p1, p2) {
  p2.playVideo();
  p1.mute();
}

document.addEventListener('DOMContentLoaded', () => {
  Array.from(document.querySelectorAll('.play-button'), target => target.addEventListener('click', playBoth.bind(null, player1, player2)));
  Array.from(document.querySelectorAll('.force-lunch-box'), target => target.addEventListener('click', forceLunchBox.bind(null, player1, player2)));
});
