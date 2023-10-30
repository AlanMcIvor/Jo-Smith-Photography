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
const name_input = document.querySelector(".name");
const email_input = document.querySelector(".email");
const comment_input = document.querySelector(".comment");
const name_output = document.querySelector(".name_output");
const email_output = document.querySelector(".email_output");

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

// form validation 
form_btn.addEventListener("click", (e) => {
  e.preventDefault()
  if(!name_input == "" && !email_input == "" && !comment_input == ""){
    // show the output div and hide the form
    show_info.classList.toggle("hide");
    form.classList.toggle("hide");
    // show the name and email input in the outout div
    name_output.innerHTML = name_input.value;
    email_output.innerHTML = email_input.value;
  } else{
    // if part of the form is empty show an alert
    alert("Please fill in the form");
  }



})

// jQuery to show images full screen upon click
$(document).ready(function () {
  $("img").click(function () {
    this.requestFullscreen();
  });
});
