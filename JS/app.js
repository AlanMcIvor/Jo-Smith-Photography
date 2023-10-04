  
//   variables
  const menuButton = document.querySelector('.menu_btn');
  const navList = document.querySelector('.nav_list');
  const body = document.querySelector('body');

//  event listeners

 // when hamburger clicked add or remove the active class
  menuButton.addEventListener("click", () => {
    navList.classList.toggle("active");
    body.classList.toggle("noScroll");
  } )
