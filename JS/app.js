
// variables
const sidebar = document.querySelector(".sidebar");
const burger = document.querySelector(".burger");

// event listneres

burger.addEventListener("click", function(){
    // when burger clicked show/hide nav
 sidebar.classList.toggle("move_in");
})


// jQuery to show images full screen upon click
$(document).ready(function(){$("img").click(function(){this.requestFullscreen()})});