const videoUrlInput = document.getElementById('video-url');
const submitButton = document.getElementById('submit-button');
const mp4PlayerIframe = document.getElementById('mp4-player');

submitButton.addEventListener('click', () => {
  const videoUrl = videoUrlInput.value;
  const videoId = videoUrl.split('v=')[1];
  const apiEndpoint = `https://api.vevioz.com/api/button/videos/${videoId}`;
  mp4PlayerIframe.src = apiEndpoint;
});

videoUrlInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const videoUrl = videoUrlInput.value;
    const videoId = videoUrl.split('v=')[1];
    const apiEndpoint = `https://api.vevioz.com/api/button/videos/${videoId}`;
    mp4PlayerIframe.src = apiEndpoint;
  }
});
