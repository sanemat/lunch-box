import YouTubePlayer from 'youtube-player';
import queryString from 'query-string';
import containerHtml from './container.html';
import MobileDetect from 'mobile-detect';
import './player.css';
import './dokaben.css';
import './button.css';

document.querySelector('.app-container').innerHTML = containerHtml;

const previousDefaultId = 'k4xGqY5IDBE';
const nextDefaultId = 'q6_U9r2qZl8';
const marginDefaultSecond = 6;
const startDefaultSecond = 11;
const previousVideoId = queryString.parse(location.search).pv || previousDefaultId;
const nextVideoId = queryString.parse(location.search).nv || nextDefaultId;
const marginSecond = queryString.parse(location.search).mg || marginDefaultSecond;
const startSecond = queryString.parse(location.search).st || startDefaultSecond;

const player1 = YouTubePlayer('player-1', {
  videoId: previousVideoId,
  playerVars: {
    playsinline: 1,
    showinfo: 0,
    rel: 0,
    wmode: 'transparent',
  },
});
const player2 = YouTubePlayer('player-2', {
  videoId: nextVideoId,
  width: '0',
  height: '0',
  playerVars: {
    start: marginSecond,
    playsinline: 1,
    wmode: 'transparent',
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
  Array.from(document.getElementsByClassName('js-lunch-box'), target => target.classList.remove('hidden'));
}

let switched = false;
function update(p1, p2) {
  setTimeout(update.bind(null, p1, p2), 1000 / 60);
  if (switched) { return; }
  p1.getCurrentTime()
    .then((result) => {
      if (result > startSecond) {
        switched = true;
        forceLunchBox(p1, p2);
      }
    });
}
update(player1, player2);

function setTweetUrl() {
  const md = new MobileDetect(window.navigator.userAgent);
  let targetUrl = '#';
  if(md.is('iOS')){
    targetUrl = 'twitter://post?message=' + encodeURIComponent('全く気付かないうちにあの曲になる ' + location.href);
  } else if (md.is('androidOS')) {
    targetUrl = 'intent://post?message=' + encodeURIComponent('全く気付かないうちにあの曲になる ' + location.href) + '#Intent;scheme=twitter;package=com.twitter.android;end;'
  } else {
    targetUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('全く気付かないうちにあの曲になる') + '&url=' + encodeURIComponent(location.href);
  }
  Array.from(document.getElementsByClassName('btn-twitter'), target => { target.href = targetUrl; })
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('player-1-wrapper').addEventListener('click', playBoth.bind(null, player1, player2));
  setTweetUrl();
});
