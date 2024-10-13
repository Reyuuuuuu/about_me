const playButton = document.getElementById("playButton");
const audio = document.getElementById("welcomeAudio");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const closeModal = modal; // Clicking anywhere on the modal will close it

playButton.addEventListener("click", function () {
  // Play the audio
  audio.play().catch((error) => {
    console.log("Audio play was prevented:", error);
  });

  // Show the modal
  modal.classList.remove("hidden");

  // Animate image size and opacity
  setTimeout(() => {
    modalImage.classList.remove("scale-50", "opacity-0");
    modalImage.classList.add("scale-100", "opacity-100");
  }, 100); // Optional delay for smoother effect
});

closeModal.addEventListener("click", function () {
  // Animate the image to shrink and fade out
  modalImage.classList.remove("scale-100", "opacity-100");
  modalImage.classList.add("scale-50", "opacity-0");

  // Hide the modal after animation ends
  setTimeout(() => {
    modal.classList.add("hidden");
  }, 300); // 300ms delay matches the animation duration
});
