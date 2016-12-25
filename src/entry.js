import YouTubePlayer from 'youtube-player';
import queryString from 'query-string';

const defaultVideoId = 'CTl1BDngldc';
const videoId = queryString.parse(location.search).v || defaultVideoId;

const player1 = YouTubePlayer('player-1', {
  videoId,
});
const player2 = YouTubePlayer('player-2', {
  videoId: 'q6_U9r2qZl8',
  width: '0',
  height: '0',
});

function playBoth(p1, p2) {
  p1.playVideo();
  p2.playVideo();
}

function forceLunchBox(p1, p2) {
  console.log('force lunch box');// eslint-disable-line no-console
}

document.addEventListener('DOMContentLoaded', () => {
  Array.from(document.querySelectorAll('.play-button'), (target) => {
    target.addEventListener('click', playBoth.bind(null, player1, player2));
  });
  Array.from(document.querySelectorAll('.force-lunch-box'), (target) => {
    target.addEventListener('click', forceLunchBox.bind(null, player1, player2));
  });
});
