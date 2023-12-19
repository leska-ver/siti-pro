document.addEventListener('DOMContentLoaded', function () {

  /*Клик БУРГЕР*/
  const registrationBurger03 = document.querySelector('#registration__burger03');
  const registrationMenu03 = document.querySelector('#registration__menu03');
  //Анимируем крест бургера
  registrationBurger03.addEventListener('click', function(e) {
    registrationBurger03.classList.toggle('active');
  });
  //Кликом по бургеру открываем меню
  registrationBurger03.addEventListener('click', function () {
    registrationBurger03.classList.add('open');

    registrationMenu03.classList.toggle('is-active');

    if (registrationMenu03.classList.contains('is-active')) {
      registrationMenu03.style.transition = 'transform .7s ease-in-out';
    }
  });
  registrationMenu03.addEventListener('transitionend', function () {
    if (!registrationMenu03.classList.contains('is-active')) {
      registrationMenu03.style.transition = '';
      registrationBurger03.classList.remove('open');
    }
  });


  // Активность кнопки - галка и Отправить(.form__button_filled:disabled)
  const formDis03 = document.querySelector(".form-disabled03");
  if (formDis03) {
    const e = formDis03.querySelector(".checkbox-disabled03");
    if (e) {
      const t = formDis03.querySelector(".form__button_jsDis03");
      e.addEventListener("change", () => {
        e.checked ? t.removeAttribute("disabled") : t.setAttribute("disabled", "")
      })
    }
  } 


  // Шаблон микс modal СПАСИБО/-Профессиональная окраска экстерьера-
  const btnCloseBuy03 = document.querySelector('.modal__close_js03');
  const modalBuy03 = document.querySelector('.modal_js03');
  if (modalBuy03) {
    btnCloseBuy03.addEventListener('click', function () {
      document.querySelector('.modal_js03').classList.toggle('modal_js03_active');
    });
    modalBuy03.addEventListener('click', function (event) {
      if (event._notClick) return;
      modalBuy03.classList.remove('modal_js03_active');
      document.querySelector('.modal__sps_js03').classList.remove('modal__sps_js03_active');
    });    
  }
  
  
  // inputmask - Телефон/-Профессиональная окраска экстерьера-
  const formJsThree = document.querySelector('.form_js03');
  if (formJsThree) { // Обёртка if. Спасение Gulp-а от null в браузере
    const telSelector = formJsThree.querySelector('input[type="tel"]');
    const inputMask = new Inputmask('+7 999 999 99 99');
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
          required: 'Пару слов к заказу',
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

        xhr.open('POST', 'mail.php', 'list.php', true);//
        xhr.send(formData);
        thisForm.reset();
        document.querySelector('.modal_js03').classList.toggle('modal_js03_active');
        document.querySelector('.modal__sps_js03').classList.toggle('modal__sps_js03_active');
      }
    })
  }


});