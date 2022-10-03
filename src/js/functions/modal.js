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

export function closeModal(
  overlaySelector,
  modalsSelector,
  modalCloseSelector
) {
  try {
    const overlay = document.querySelector(overlaySelector);
    const modals = document.querySelectorAll(modalsSelector);
    const closeButtons = document.querySelectorAll(modalCloseSelector);
    const body = document.body;

    overlay.addEventListener('click', (e) => {
      if (e.target.getAttribute('class') == 'modal active') {
        enableScroll();

        body.classList.remove('disable-scroll');

        modals.forEach((modal) => {
          modal.classList.remove('active');
        });

        e.target.classList.remove('active');
      }
    });

    closeButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        enableScroll();
        overlay.classList.toggle('active');

        modals.forEach((modal) => {
          modal.classList.remove('active');
        });

        body.classList.remove('disable-scroll');
      });
    });
  } catch (err) {
    console.log(err);
  }
}

export function openModal(
  triggersSelector,
  overlaySelector,
  modalSelector,
  captionSelector = null,
  priceSelector = null
) {
  try {
    const triggers = document.querySelectorAll(triggersSelector);
    const overlay = document.querySelector(overlaySelector);
    const modal = document.querySelector(modalSelector);

    let caption;
    let price;

    if (captionSelector && priceSelector) {
      caption = document.querySelector('[name="caption"');
      price = document.querySelector('[name="price"]');
    }

    const body = document.body;

    triggers.forEach((btn, i) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        disableScroll();

        if (caption && price) {
          const captions = document.querySelectorAll(captionSelector);
          const prices = document.querySelectorAll(priceSelector);

          caption.value = captions[i].textContent.trim();
          price.value = prices[i].textContent.trim();
        }

        body.classList.add('disable-scroll');
        overlay.classList.toggle('active');
        modal.classList.toggle('active');
      });
    });
  } catch (err) {
    console.log(err);
  }
}
