export function burger() {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.header__menu');
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
  });

  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('header__bg');
    } else {
      header.classList.remove('header__bg');
    }
  });
}
