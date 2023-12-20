document.addEventListener('DOMContentLoaded', function () {

  /*Клик БУРГЕР - 02*/
  const registrationBurger02 = document.querySelector('#registration__burger02');
  const registrationMenu02 = document.querySelector('#registration__menu02');
  //Анимируем крест бургера
  registrationBurger02.addEventListener('click', function(e) {
    registrationBurger02.classList.toggle('active');
  });
  //Кликом по бургеру открываем меню
  registrationBurger02.addEventListener('click', function () {
    registrationBurger02.classList.add('open');

    registrationMenu02.classList.toggle('is-active');

    if (registrationMenu02.classList.contains('is-active')) {
      registrationMenu02.style.transition = 'transform .7s ease-in-out';
    }
  });
  registrationMenu02.addEventListener('transitionend', function () {
    if (!registrationMenu02.classList.contains('is-active')) {
      registrationMenu02.style.transition = '';
      registrationBurger02.classList.remove('open');
    }
  });

 
  // Активность кнопки - галка и Отправить(.form__button_filled:disabled)
  const formDis02 = document.querySelector(".form-disabled02");
  if (formDis02) {
    const e = formDis02.querySelector(".checkbox-disabled02");
    if (e) {
      const t = formDis02.querySelector(".form__button_jsDis02");
      e.addEventListener("change", () => {
        e.checked ? t.removeAttribute("disabled") : t.setAttribute("disabled", "")
      })
    }
  } 


  // Шаблон микс modal СПАСИБО/-Профессиональная окраска на объекте-
  const btnCloseBuy01 = document.querySelector('.modalTwo__close_js');
  const modalBuy01 = document.querySelector('.modalTwo_js');
  if (modalBuy01) {
    btnCloseBuy01.addEventListener('click', function () {
      document.querySelector('.modalTwo_js').classList.toggle('modalTwo_js_active');
    });
    modalBuy01.addEventListener('click', function (event) {
      if (event._notClick) return;
      modalBuy01.classList.remove('modalTwo_js_active');
      document.querySelector('.modalTwo__sps_js').classList.remove('modalTwo__sps_js_active');
    });    
  }
  
  
  // inputmask - Телефон/-Профессиональная окраска на объекте-
  const formJsTwo = document.querySelector('.form_js02');
  if (formJsTwo) { // Обёртка if. Спасение Gulp-а от null в браузере
    const telSelector = formJsTwo.querySelector('input[type="tel"]');
    const inputMask = new Inputmask('+7 999 999 99 99');
    inputMask.mask(telSelector);

    // const validateForms = function validateForms(form, selector, successModal, yaGoal) {
    new window.JustValidate('.form_js02', {
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
        document.querySelector('.modalTwo_js').classList.toggle('modalTwo_js_active');
        document.querySelector('.modalTwo__sps_js').classList.toggle('modalTwo__sps_js_active');
      }
    })
  }


});