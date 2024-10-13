const playButton = document.getElementById('playButton');
const audio = document.getElementById('welcomeAudio');

playButton.addEventListener('click', function() {
  audio.play().catch(error => {
    console.log('Audio play was prevented:', error);
  });
});
