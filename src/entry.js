import YouTubePlayer from 'youtube-player';
import queryString from 'query-string';

const defaultVideoId = 'CTl1BDngldc';
const videoId = queryString.parse(location.search)['v'] || defaultVideoId;

YouTubePlayer('player-1', {
  videoId: videoId,
});
YouTubePlayer('player-2', {
  videoId: 'q6_U9r2qZl8',
});
