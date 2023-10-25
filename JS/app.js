const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
});

// jQuery to show images full screen upon click
$(document).ready(function () {
  $("img").click(function () {
    this.requestFullscreen();
  });
});
