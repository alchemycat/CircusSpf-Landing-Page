const fixBlocks = document.querySelectorAll('.fix-block');

function disableScroll() {
  let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
  document.body.style.paddingRight = paddingOffset;
  fixBlocks.forEach((el) => {
    el.style.paddingRight = paddingOffset;
  });
}

function enableScroll() {
  fixBlocks.forEach((el) => {
    document.body.style.paddingRight = '0px';
    el.style.paddingRight = '0px';
  });
}

export function closeModal(modalSelector, modalCloseSelector) {
  try {
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(modalCloseSelector);
    const body = document.body;

    modal.addEventListener('click', (e) => {
      if (e.target.getAttribute('class') == 'modal active') {
        enableScroll();
        body.classList.remove('disable-scroll');
        e.target.classList.remove('active');
      }
    });

    close.addEventListener('click', (e) => {
      e.preventDefault();
      enableScroll();
      modal.classList.toggle('active');
      body.classList.remove('disable-scroll');
    });
  } catch (err) {
    console.log(err);
  }
}

export function openModal(
  triggersSelector,
  modalSelector,
  captionSelector,
  priceSelector
) {
  try {
    const triggers = document.querySelectorAll(triggersSelector);
    const modal = document.querySelector(modalSelector);

    const caption = document.querySelector('[name="caption"');
    const price = document.querySelector('[name="price"]');

    const body = document.body;

    triggers.forEach((btn, i) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        disableScroll();

        const captions = document.querySelectorAll(captionSelector);
        const prices = document.querySelectorAll(priceSelector);

        caption.value = captions[i].textContent.trim();
        price.value = prices[i].textContent.trim();

        body.classList.add('disable-scroll');
        modal.classList.toggle('active');
      });
    });
  } catch (err) {
    console.log(err);
  }
}
