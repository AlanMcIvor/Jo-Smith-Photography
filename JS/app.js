const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const wedding_btn = document.querySelector("#wedding_btn");
const landscape_btn = document.querySelector("#landscape_btn");
const wedding_img = document.querySelectorAll(".wedding");
const landscape_img = document.querySelectorAll(".landscape");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
});

// when wedding button clicked hide all landscape images
wedding_btn.addEventListener("click", (e) => {
  e.preventDefault()
    landscape_img.forEach(img => {
      img.classList.toggle("img_toggle")
    })

})


// when landscape button clicked hide all landscape images
landscape_btn.addEventListener("click", (e) => {
  e.preventDefault()
  wedding_img.forEach(img => {
    img.classList.toggle("img_toggle")
  })

})

// jQuery to show images full screen upon click
$(document).ready(function () {
  $("img").click(function () {
    this.requestFullscreen();
  });
});
