const navbar = document.querySelector(".navbar");
const burger = document.querySelector(".burger");

burger.addEventListener("click", function(){
  navbar.classList.toggle("moveIn");
})