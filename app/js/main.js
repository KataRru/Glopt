$(document).ready(function(){
  $('.slider').slick({
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




  function validateForms(form){
    $(form).validate({
      rules:{
        name:{
          required: true,
          minlength: 2,
          maxlength: 16,
        },
        phone: "required",
        email:{
          required: true,
          email: true
        },
      },
      messages:{
        name:{
          required: "Пожалуйста, введите свое имя!",
          minlength: jQuery.validator.format('Введите {0} символа!')
        },
        phone: "Пожалуйста, введите свой номер телефона!",
        email:{
          required: "Пожалуйста, введите свою почту!",
          email: "Неправельно введен адрес почты!"
        }
      }
    });
  };

  validateForms('#loginForm');
  validateForms('#orderForm');


  $('input[name=phone]').mask("+7 (999) 999-99-99");

      $('form').submit(function(e) {
          e.preventDefault();
          $.ajax({
              type: "",
              url: "mailer/smart.php",
              data: $(this).serialize()
          }).done(function() {
              $(this).find("input").val("");
              $('#consultation, #order').fadeOut();
              $('.overlay, #thanks').fadeIn('slow');

              $('form').trigger('reset');
          });
          return false;
      });