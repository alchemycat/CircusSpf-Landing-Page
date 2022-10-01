import { burger } from './functions/burger';
import './functions/inputmask.min';
import './functions/just-validate.min';

window.addEventListener('DOMContentLoaded', () => {
  burger();

  function createMask(inputsSelector, mask) {
    let inputs = document.querySelectorAll(inputsSelector);

    let im = new Inputmask(mask);
    im.mask(inputs);
  }

  createMask('[type="tel"]', '+7(999)999-99-99');

  //Валидация форм
  function validateForms(selector, rules) {
    new window.JustValidate(selector, {
      rules: rules,
      messages: {
        name: 'Укажите имя',
        phone: 'Укажите телефон',
      },
      submitHandler: function (form) {
        console.log(form);

        const at = document.querySelector('.alert');

        if (at) {
          at.remove();
        }

        const alertText = document.createElement('div');
        alertText.classList.add('alert');

        let formData = new FormData(form);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              alertText.innerText = 'Заявка успешно отправлена.';

              form.append(alertText);
            } else {
              alertText.innerText =
                'Ошибка, не удалось отправить заявку, попробуйте еще раз.';
              form.append(alertText);
            }
            form.reset();
          }
          setTimeout(() => {
            alertText.remove();
          }, 3000);
        };

        xhr.open('POST', '/mailer/smart.php', true);
        xhr.send(formData);
      },
    });
  }

  validateForms('#apply', {
    name: { required: true },
    phone: { required: true },
  });
});
