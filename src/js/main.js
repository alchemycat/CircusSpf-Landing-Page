import './functions/validate-forms';

window.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.header__menu');
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
  });

  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if (window.scrollY > 50) {
      header.classList.add('header__bg');
    } else {
      header.classList.remove('header__bg');
    }
  });
});
