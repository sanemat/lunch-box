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

document.addEventListener('DOMContentLoaded', () => {
  const $playButton = document.getElementById('play-button');
  $playButton.addEventListener('click', playBoth.bind(null, player1, player2));
});
