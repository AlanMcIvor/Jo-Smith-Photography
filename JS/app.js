  
//   variables
  const menuButton = document.querySelector('.menu_btn');
  const navList = document.querySelector('.nav_list');

//  event listeners
  menuButton.addEventListener("click", () => {
    // when hamburger clicked add or remove the active class
    navList.classList.toggle("active");
  } )
