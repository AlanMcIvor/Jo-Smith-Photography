// variables
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const wedding_btn = document.querySelector("#wedding_btn");
const landscape_btn = document.querySelector("#landscape_btn");
const wedding_img = document.querySelectorAll(".wedding");
const landscape_img = document.querySelectorAll(".landscape");
const form_btn = document.querySelector(".form_btn");
const show_info = document.querySelector(".show_info");
const form = document.querySelector(".form");

// hamburger click event
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
  let bars = document.querySelectorAll(".bar");
  bars.forEach(line => {
    line.classList.toggle("bg_white");
  })

 

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

// when comtact form is submited show info back to user
form_btn.addEventListener("click", (e) => {
  e.preventDefault()
  show_info.classList.toggle("hide");
  form.classList.toggle("hide");
// show contact form back to screen
  const name = document.querySelector(".name");
  const name_output = document.querySelector(".name_output");
  name_output.innerHTML = name.value;

  const email = document.querySelector(".email");
  const email_output = document.querySelector(".email_output");
  email_output.innerHTML = email.value;


})

// jQuery to show images full screen upon click
$(document).ready(function () {
  $("img").click(function () {
    this.requestFullscreen();
  });
});
