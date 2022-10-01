export function burger() {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.header__menu');
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
  });
}
