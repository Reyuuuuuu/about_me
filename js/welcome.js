const playButton = document.getElementById('playButton');
const audio = document.getElementById('welcomeAudio');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeModal = modal;  // Clicking anywhere on the modal will close it
const scrollingText = document.getElementById('scrollingText');
const textWrapper = document.getElementById('textWrapper');

playButton.addEventListener('click', function() {
  // Play the audio
  audio.play().catch(error => {
    console.log('Audio play was prevented:', error);
  });

  // Show the modal
  modal.classList.remove('hidden');
  
  // Animate image size and opacity
  setTimeout(() => {
    modalImage.classList.remove('scale-50', 'opacity-0');
    modalImage.classList.add('scale-100', 'opacity-100');
  }, 100); // Optional delay for smoother effect

  // Dynamically calculate the animation duration based on text width
  const textWidth = scrollingText.scrollWidth;
  const wrapperWidth = textWrapper.offsetWidth;

  // Calculate the animation duration based on the ratio of text width to wrapper width
  const duration = (textWidth / wrapperWidth) * 2; // Adjust the multiplier for speed (10s for normal)
  
  // Apply the calculated animation duration
  scrollingText.style.animation = `scroll ${duration}s linear infinite`;
});

closeModal.addEventListener('click', function() {
  // Animate the image to shrink and fade out
  modalImage.classList.remove('scale-100', 'opacity-100');
  modalImage.classList.add('scale-50', 'opacity-0');
  
  // Hide the modal after animation ends
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 300); // 300ms delay matches the animation duration
});
