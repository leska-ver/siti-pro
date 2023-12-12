document.addEventListener('DOMContentLoaded', function () {

  // Шаблон микс modal СПАСИБО/-Профессиональная окраска экстерьера-
  const btnCloseBuy03 = document.querySelector('.modal__close_js');
  const modalBuy03 = document.querySelector('.modal_js');
  if (modalBuy03) {
    btnCloseBuy03.addEventListener('click', function () {
      document.querySelector('.modal_js').classList.toggle('modal_js_active');
    });
    modalBuy03.addEventListener('click', function (event) {
      if (event._notClick) return;
      modalBuy03.classList.remove('modal_js_active');
      document.querySelector('.modal__sps_js').classList.remove('modal__sps_js_active');
    });    
  }
  
  
  // inputmask - Телефон/-Профессиональная окраска экстерьера-
  const formJs03 = document.querySelector('.form_js03');
  if (formJs03) { // Обёртка if. Спасение Gulp-а от null в браузере
    const telSelector = formJs03.querySelector('input[type="tel"]');
    const inputMask = new Inputmask('+7 (999) 999-99-99');
    inputMask.mask(telSelector);

    // const validateForms = function validateForms(form, selector, successModal, yaGoal) {
    new window.JustValidate('.form_js03', {
      rules: {
        name: {
          required: true,
          minLength: 2,
          maxLenght: 10,
          strength: {
            custom: '^[А-яёЁ\s-]' //только по русски текст
            //custom: '^[а-яёЁ\s]+$'только по русски и маленькими буквами
            //custom: '^[a-yeO\s]+$'только по английски текст
          }
        },
        tel: {
          required: true,
          function: () => {
            const phone = telSelector.inputmask.unmaskedvalue();
            return Number(phone) && phone.length === 10;
          }
        },
        checkbox: { // Обязательная галка
          required: true
        }
      },
      colorWrong: '#ff6972',
      messages: {
        name: {
          required: 'Введите ваше имя',
          minLength: 'Введите 3 и более символов',
          maxLength: 'Запрещено вводить более 15 символов',
          strength: 'Текст только по русски'
          //strength: 'Текст только по русски и маленькими буквами'
          //strength: 'Текст только по английски'
        },
        // email: {
        //   email: 'Недопустимый формат',
        //   required: 'Введите email'
        // },
        tel: {
          required: 'Введите ваш телефон',
          function: 'Здесь должно быть 11 симв..'
        },
        text: {
          required: 'Введите: адрес места жительства, название товара, размер и количество',
          minLength: 'Введите 15 и более символов',
          maxLength: 'Запрещено вводить более 1000 символов'
        },
        checkbox: {
          required: 'Поставьте галочку',
          function: 'Здесь должна быть галка'
        }
      },

      //*отправка формы*/
      submitHandler: function (thisForm) {
        let formData = new FormData(thisForm);
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('Отправлено');
            } //if xhr
          }
        }

        xhr.open('POST', 'mail.php', true);// 'mail.php', 'list.php',
        xhr.send(formData);
        thisForm.reset();
        document.querySelector('.modal_js').classList.toggle('modal_js_active');
        document.querySelector('.modal__sps_js').classList.toggle('modal__sps_js_active');
      }
    })
  }


});