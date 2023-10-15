
// variables
const sidebar = document.querySelector(".sidebar");
const burger = document.querySelector(".bx");

// event listners

// when burger clicked show/hide nav
burger.addEventListener("click", function(){
 sidebar.classList.toggle("move_in");
})


// jquery to show images full screen upon click
$(document).ready(function(){$("img").click(function(){this.requestFullscreen()})});