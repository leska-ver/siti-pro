document.addEventListener('DOMContentLoaded', function() {
  // console.log(); находит в js-ce ошибку. Deftools

  //Яндекс карта map//
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', { //1 метка
        center: [55.669006, 37.409657],
        zoom: 13,
        controls: [] //Убрали увеличитель и др..
      }, {
        searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myGeoObject = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'СИТИ ПРО',
        balloonContent: '9:00-20:00'
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
            iconImageHref: 'img/icone-contacts/map.png',
            // iconImageHref: 'https://raw.githubusercontent.com/leska-ver/elka-Max/main/img/favicon.png',
            // Размеры метки.
        iconImageSize: [20, 25],
        // Смещение левого верхнего угла иконки относительно её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
      })

    myMap.geoObjects.add(myGeoObject);
  });


    
});