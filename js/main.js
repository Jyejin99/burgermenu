const burgers = document.querySelector('.burgers');
const nav_menu = document.querySelector(".nav_menu");
const nav_back = document.querySelector(".nav_back");

const handleBurgerClick = () =>{
    burgers.classList.toggle("active");
    nav_menu.classList.toggle("active");
    nav_back.classList.toggle("active");
}

burgers.addEventListener('click', handleBurgerClick);