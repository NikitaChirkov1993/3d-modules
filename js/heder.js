
const navMobile = document.querySelector(".nav__mobile");
const navClose = document.querySelector(".nav__close");
const navList = document.querySelector(".nav__list");

navMobile.addEventListener('click', ()=>{
    navList.classList.add("nav__list--open");
});

navClose.addEventListener('click', ()=>{
    navList.classList.remove("nav__list--open");
});
