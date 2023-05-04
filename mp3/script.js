const videoUrlInput = document.getElementById('video-url');
const submitButton = document.getElementById('submit-button');
const mp3PlayerIframe = document.getElementById('mp3-player');

submitButton.addEventListener('click', () => {
  const videoUrl = videoUrlInput.value;
  const apiEndpoint = `https://convert2mp3s.com/api/single/mp3?url=${encodeURIComponent(videoUrl)}`;
  mp3PlayerIframe.src = apiEndpoint;
});