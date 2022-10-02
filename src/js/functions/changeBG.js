export function changeBG() {
  try {
    const header = document.querySelector('.header');

    if (window.scrollY > 50) {
      header.classList.add('header__bg');
    } else {
      header.classList.remove('header__bg');
    }
  } catch (err) {
    console.log(err);
  }
}
