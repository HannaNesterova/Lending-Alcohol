const burger = document.querySelector('.header_burger');
const heading = document.querySelector('.heading');
const headerMenu = document.querySelector('.header_menu');
const body = document.querySelector('body');

burger.addEventListener('click',() => {
burger.classList.toggle('active');
headerMenu.classList.toggle('active');
body.classList.toggle('lock');
})