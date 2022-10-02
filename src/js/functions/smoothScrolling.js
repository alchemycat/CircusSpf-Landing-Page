//Плавный скролл к секциям
export function smoothScrolling() {
  try {
    let anchorlinks = document.querySelectorAll('a[href^="#"]');

    for (let item of anchorlinks) {
      // relitere
      item.addEventListener('click', (e) => {
        let hashval = item.getAttribute('href');
        try {
          const navbar = document.querySelector('.header__menu');
          const burger = document.querySelector('.burger');
          navbar.classList.remove('active');
          burger.classList.remove('active');
        } catch {}
        let target = document.querySelector(hashval);
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        history.pushState(null, null, hashval);
        e.preventDefault();
      });
    }
  } catch (err) {
    console.log(err);
  }
}
