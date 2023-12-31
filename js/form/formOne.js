document.addEventListener('DOMContentLoaded', function () {

  /*Клик БУРГЕР - 01*/
  const registrationBurger01 = document.querySelector('#registration__burger01');
  const registrationMenu01 = document.querySelector('#registration__menu01');
  //Анимируем крест бургера
  registrationBurger01.addEventListener('click', function(e) {
    registrationBurger01.classList.toggle('active');
  });
  //Кликом по бургеру открываем меню
  registrationBurger01.addEventListener('click', function () {
    registrationBurger01.classList.add('open');

    registrationMenu01.classList.toggle('is-active');

    if (registrationMenu01.classList.contains('is-active')) {
      registrationMenu01.style.transition = 'transform .7s ease-in-out';
    }
  });
  registrationMenu01.addEventListener('transitionend', function () {
    if (!registrationMenu01.classList.contains('is-active')) {
      registrationMenu01.style.transition = '';
      registrationBurger01.classList.remove('open');
    }
  });


  // Активность кнопки - галка и Отправить(.form__button_filled:disabled)
  const formDis01 = document.querySelector(".form-disabled01");
  if (formDis01) {
    const e = formDis01.querySelector(".checkbox-disabled01");
    if (e) {
      const t = formDis01.querySelector(".form__button_jsDis01");
      e.addEventListener("change", () => {
        e.checked ? t.removeAttribute("disabled") : t.setAttribute("disabled", "")
      })
    }
  }


  // Шаблон микс modal СПАСИБО/-Реставрация лакокрасочного покрытия-
  const btnCloseBuy01 = document.querySelector('.modalOne__close_js');
  const modalBuy01 = document.querySelector('.modalOne_js');
  if (modalBuy01) {
    btnCloseBuy01.addEventListener('click', function () {
      document.querySelector('.modalOne_js').classList.toggle('modalOne_js_active');
    });
    modalBuy01.addEventListener('click', function (event) {
      if (event._notClick) return;
      modalBuy01.classList.remove('modalOne_js_active');
      document.querySelector('.modalOne__sps_js').classList.remove('modalOne__sps_js_active');
    });    
  }
  
  
  // inputmask - Телефон/-Реставрация лакокрасочного покрытия-
  const formJsOne = document.querySelector('.form_js01');
  if (formJsOne) { // Обёртка if. Спасение Gulp-а от null в браузере
    const telSelector = formJsOne.querySelector('input[type="tel"]');
    const inputMask = new Inputmask('+7 999 999 99 99');
    inputMask.mask(telSelector);

    // const validateForms = function validateForms(form, selector, successModal, yaGoal) {
    new window.JustValidate('.form_js01', {
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
        document.querySelector('.modalOne_js').classList.toggle('modalOne_js_active');
        document.querySelector('.modalOne__sps_js').classList.toggle('modalOne__sps_js_active');
      }
    })
  }
  
  
  });