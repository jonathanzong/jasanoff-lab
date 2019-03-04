$(document).ready(function() {
  var element = $('.index img'),
    length = element.length,
    current = 0,
    timeout = 5000;

  if (element) {
    function changeSlide() {
      element.removeClass('active');

      element.eq(current++).addClass('active');
      if(current === length){
          current = 0;
      }

      setTimeout(changeSlide, timeout);
    }

    changeSlide();
  }

  $('.nav .button').click(function() {
    var menuIsOpening = $('.nav .burger').hasClass('active');
    if (menuIsOpening) {
      $('.nav .burger').removeClass('active');
      $('.nav .close').addClass('active');

      $('.nav .nav-menu').addClass('active');
    }
    else {
      $('.nav .close').removeClass('active');
      $('.nav .burger').addClass('active');

      $('.nav .nav-menu').removeClass('active');
    }
  });

  $('.nav a.active').click(function() {return false});
});
