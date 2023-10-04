  
//   variables
  const menuButton = document.querySelector('.menu_btn');
  const navList = document.querySelector('.nav_list');
  const body = document.querySelector('body');

//  event listeners
  menuButton.addEventListener("click", () => {
    // when hamburger clicked add or remove the active class
    navList.classList.toggle("active");
    body.classList.toggle("noScroll");
  } )
