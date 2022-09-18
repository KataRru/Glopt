$(document).ready(function(){
  $('.slider__item').slick({
    speed: 900,
    slidesToShow: 1,
    adaptiveHeight: true,
    centerMode: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="../img/icons/slider/leftarrow.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../img/icons/slider/rightarrow.svg"></button>'
  });
});

const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close')

  hamburger.addEventListener('click', () => {
          menu.classList.add('active');
  });

  closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
  });