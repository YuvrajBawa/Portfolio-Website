burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
menu = document.querySelector('.menu')

burger.addEventListener('click', ()=> {
    navbar.classList.toggle('hnav');
    menu.classList.toggle('v-class');
})