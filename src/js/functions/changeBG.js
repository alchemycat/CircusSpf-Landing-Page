const header = document.querySelector('.header');

export function changeBG() {
  if (window.scrollY > 50) {
    header.classList.add('header__bg');
  } else {
    header.classList.remove('header__bg');
  }
}
