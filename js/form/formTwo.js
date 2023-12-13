document.addEventListener('DOMContentLoaded', function () {
 
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
  const btnCloseBuy02 = document.querySelector('.modal__close_js02');
  const modalBuy02 = document.querySelector('.modal_js02');
  if (modalBuy02) {
    btnCloseBuy02.addEventListener('click', function () {
      document.querySelector('.modal_js02').classList.toggle('modal_js02_active');
    });
    modalBuy02.addEventListener('click', function (event) {
      if (event._notClick) return;
      modalBuy02.classList.remove('modal_js02_active');
      document.querySelector('.modal__sps_js02').classList.remove('modal__sps_js02_active');
    });    
  }
  
  
  // inputmask - Телефон/-Профессиональная окраска на объекте-
  const formJs02 = document.querySelector('.form_js02');
  if (formJs02) { // Обёртка if. Спасение Gulp-а от null в браузере
    const telSelector = formJs02.querySelector('input[type="tel"]');
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

        xhr.open('POST', 'mail.php', true);// 'mail.php', 'list.php',
        xhr.send(formData);
        thisForm.reset();
        document.querySelector('.modal_js02').classList.toggle('modal_js02_active');
        document.querySelector('.modal__sps_js02').classList.toggle('modal__sps_js02_active');
      }
    })
  }


});