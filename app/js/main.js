$(document).ready(function(){
  $('.slider__item').slick({
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
    centerMode: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="../img/icons/slider/leftarrow.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../img/icons/slider/rightarrow.svg"></button>'
  });
});