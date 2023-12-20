document.addEventListener('DOMContentLoaded', function () {


/*Клик БУРГЕР*/
  const burger = document.querySelector('#burger');
  const menu = document.querySelector('#menu');
  //Анимируем крест бургера
  burger.addEventListener('click', function(e) {
    burger.classList.toggle('active');
  });
  //Кликом по бургеру открываем меню
  burger.addEventListener('click', function () {
    burger.classList.add('open');

    menu.classList.toggle('is-active');

    if (menu.classList.contains('is-active')) {
      menu.style.transition = 'transform .7s ease-in-out';
    }
  });
  menu.addEventListener('transitionend', function () {
    if (!menu.classList.contains('is-active')) {
      menu.style.transition = '';
      burger.classList.remove('open');
    }
  });

  
  // hero SWIPER
  const swiperHero = document.querySelector(".hero")// Для обёртки if
  if (swiperHero) { // Обёртка if. Спасение Gulp-а от null в браузере
    const heroSwiper = new Swiper(".hero__mySwiper", {
      pagination: {
        el: ".hero__pagination",
        clickable: true,  
      }
    });
  };   



  // services SWIPER
  const swiperServices = document.querySelector(".services")// Для обёртки if
  if (swiperServices) { // Обёртка if. Спасение Gulp-а от null в браузере
    const servicesSwiper = new Swiper(".services__mySwiper", {    
      // navigation: {
      //   nextEl: '.services__button_next',
      //   prevEl: '.services__button_prev',
      // },
      pagination: {
        el: '.services__pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        555: {
          slidesPerGroup: 1,
          slidesPerView: 1,
          spaceBetween: 20,
        },
        666: {
          slidesPerGroup: 2,
          slidesPerView: 2,
          spaceBetween: 20,
        },
        999: {
          slidesPerGroup: 3,
          slidesPerView: 3,
          spaceBetween: 25,
        },
        1252: {
          slidesPerGroup: 4,
          slidesPerView: 4,
          spaceBetween: 25,
        },
      },
      //Бесконечное листание страниц
      speed: 3000,//Интервал ожидания

      autoplay: {
        delay: 5000,//Интервал ожидания
        disableOnInteraction: false,      
      }
    });
  };


  
  // portfolio SWIPER
  const swiperPortfolio = document.querySelector(".portfolio")// Для обёртки if
  if (swiperPortfolio) { // Обёртка if. Спасение Gulp-а от null в браузере
    const swiperPortfolio = new Swiper(".portfolio__mySwiper", {
      pagination: {
        el: ".portfolio__pagination_1920",
        type: "fraction", 
      },      
      navigation: {
        nextEl: ".portfolio__button_next",
        prevEl: ".portfolio__button_prev",
      },
    });
  };


  // portfolio SWIPER-555px
  const swiperPortfolio555 = document.querySelector(".portfolio")// Для обёртки if
  if (swiperPortfolio555) { // Обёртка if. Спасение Gulp-а от null в браузере
    const swiperPortfolio555 = new Swiper(".portfolio__mySwiper", {
      pagination: {
        el: ".portfolio__pagination_555",
        clickable: true,
      },      
      navigation: {
        nextEl: ".portfolio__button_next",
        prevEl: ".portfolio__button_prev",
      },
    });
  };


  // Модальное окно для нескольких окон(services). Модалка не прокручиваеться.//
  const activeClass = "trigger-active";
  const buttons = document.querySelectorAll(".triggerBtn-js");

  for (let button of buttons) {
    modalEvent(button);
  }
  
  function closeModal (modal) {
	 modal.classList.remove(activeClass);
	 document.body.style.overflow  = '';
  }
	  
  function modalEvent(button) {
    button.addEventListener("click", (e) => {//(e) - дефолт - чтобы при нажитие на модального окна, модалка не улетала вверх.
      e.preventDefault();

      const trigger = button.getAttribute("data-modal-trigger");
      const modal = document.querySelector(`[data-modal=${trigger}]`);
      const modalContent = modal.querySelector(".trigger-block");
      const close = modal.querySelector(".modal-close");
           
      /* --Cтили body при открытие модального окна-- */
      modal.classList.add('trigger-active');		 
      if (modal.classList.contains(activeClass)) {
        document.body.style.overflow  = 'hidden';
      }

      close.addEventListener("click", () =>  {
		 closeModal (modal); 
	  });
      modal.addEventListener("click", () => {
		 closeModal (modal); 
	  });
      modalContent.addEventListener("click", (e) => e.stopPropagation());
      
    });
  };
  
  
 
  // Активность кнопки - галка и Отправить(.form__button_filled:disabled)
  const formDis = document.querySelector(".form-disabled");
  if (formDis) {
    const e = formDis.querySelector(".checkbox-disabled");
    if (e) {
      const t = formDis.querySelector(".form__button_jsDis");
      e.addEventListener("change", () => {
        e.checked ? t.removeAttribute("disabled") : t.setAttribute("disabled", "")
      })
    }
  }

  
  // Шаблон микс modal СПАСИБО/forms
  const btnCloseBuy = document.querySelector('.modal__close_js');
  const modalBuy = document.querySelector('.modal_js');
  if (modalBuy) {
    btnCloseBuy.addEventListener('click', function () {
      document.querySelector('.modal_js').classList.toggle('modal_js_active');
    });
    modalBuy.addEventListener('click', function (event) {
      if (event._notClick) return;
      modalBuy.classList.remove('modal_js_active');
      document.querySelector('.modal__sps_js').classList.remove('modal__sps_js_active');
    });    
  }


  // inputmask - Телефон/forms
  const formJs = document.querySelector('.form_js');
  if (formJs) { // Обёртка if. Спасение Gulp-а от null в браузере
    const telSelector = formJs.querySelector('input[type="tel"]');
    const inputMask = new Inputmask('+7 999 999 99 99');
    inputMask.mask(telSelector);

    // const validateForms = function validateForms(form, selector, successModal, yaGoal) {
    new window.JustValidate('.form_js', {
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
          required: 'Пару инфы о заказе',
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
        document.querySelector('.modal_js').classList.toggle('modal_js_active');
        document.querySelector('.modal__sps_js').classList.toggle('modal__sps_js_active');
      }
    })
  }


  // Плавный скролл по якорям. В любое место можно кинуть.
  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
      e.preventDefault();
      const id = smoothLink.getAttribute('href');

      document.querySelector(id).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
    });
  };

  
  
 


});