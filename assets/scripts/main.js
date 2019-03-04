$(document).ready(function() {
  var element = $('.index img'),
    length = element.length,
    current = 0,
    timeout = 5000;

  function changeSlide() {
    element.removeClass('active');

    element.eq(current++).addClass('active');
    if(current === length){
        current = 0;
    }

    setTimeout(changeSlide, timeout);
  }

  changeSlide();
});
