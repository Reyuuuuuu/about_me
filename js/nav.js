const navToggle = document.getElementById("navToggle");
const mobileMenu = document.getElementById("mobileMenu");

navToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
