document.addEventListener('DOMContentLoaded', function () {

  /*Клик БУРГЕР*/
  const registrationBurger04 = document.querySelector('#registration__burger04');
  const registrationMenu04 = document.querySelector('#registration__menu04');
  //Анимируем крест бургера
  registrationBurger04.addEventListener('click', function(e) {
    registrationBurger04.classList.toggle('active');
  });
  //Кликом по бургеру открываем меню
  registrationBurger04.addEventListener('click', function () {
    registrationBurger04.classList.add('open');

    registrationMenu04.classList.toggle('is-active');

    if (registrationMenu04.classList.contains('is-active')) {
      registrationMenu04.style.transition = 'transform .7s ease-in-out';
    }
  });
  registrationMenu04.addEventListener('transitionend', function () {
    if (!registrationMenu04.classList.contains('is-active')) {
      registrationMenu04.style.transition = '';
      registrationBurger04.classList.remove('open');
    }
  });


  // Активность кнопки - галка и Отправить(.form__button_filled:disabled)
  const formDis04 = document.querySelector(".form-disabled04");
  if (formDis04) {
    const e = formDis04.querySelector(".checkbox-disabled04");
    if (e) {
      const t = formDis04.querySelector(".form__button_jsDis04");
      e.addEventListener("change", () => {
        e.checked ? t.removeAttribute("disabled") : t.setAttribute("disabled", "")
      })
    }
  }


  // Шаблон микс modal СПАСИБО/-Профессиональная окраска ограждений и витражей-
  const btnCloseBuy01 = document.querySelector('.modalFour__close_js');
  const modalBuy01 = document.querySelector('.modalFour_js');
  if (modalBuy01) {
    btnCloseBuy01.addEventListener('click', function () {
      document.querySelector('.modalFour_js').classList.toggle('modalFour_js_active');
    });
    modalBuy01.addEventListener('click', function (event) {
      if (event._notClick) return;
      modalBuy01.classList.remove('modalFour_js_active');
      document.querySelector('.modalFour__sps_js').classList.remove('modalFour__sps_js_active');
    });    
  }
  
  
  // inputmask - Телефон/-Профессиональная окраска ограждений и витражей-
  const formJsFour = document.querySelector('.form_js04');
  if (formJsFour) { // Обёртка if. Спасение Gulp-а от null в браузере
    const telSelector = formJsFour.querySelector('input[type="tel"]');
    const inputMask = new Inputmask('+7 999 999 99 99');
    inputMask.mask(telSelector);

    // const validateForms = function validateForms(form, selector, successModal, yaGoal) {
    new window.JustValidate('.form_js04', {
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
        document.querySelector('.modalFour_js').classList.toggle('modalFour_js_active');
        document.querySelector('.modalFour__sps_js').classList.toggle('modalFour__sps_js_active');
      }
    })
  }


});