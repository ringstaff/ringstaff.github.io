
$(document).ready(function(){

  // var loadHome = function() {
  //   setTimeout(function() {
  //     $('.show-1').removeClass('invisible');
  //     document.getElementById("hideAll").style.display = "none";
  //
  //     setTimeout(function() {
  //
  //       $('.show-2').removeClass('invisible');
  //       setTimeout(function() {
  //
  //         $('.show-3').removeClass('invisible');
  //         setTimeout(function() {
  //
  //           $('.show-4').removeClass('invisible');
  //           setTimeout(function() {
  //
  //             $('.show-5').removeClass('invisible');
  //
  //           }, 500);
  //         }, 1500);
  //       }, 1000);
  //     }, 1000);
  //   }, 500);
  // };

  $(function() {
    $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    });
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function() {
    if ($(this).attr('class') !== 'dropdown-toggle active' && $(this).attr('class') !== 'dropdown-toggle') {
      $('.navbar-toggle:visible').click();
    }
  });

  $('.navbar-toggler .fa-times').css('display', 'none');


  $('.fader').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    autoplay: true,
    zIndex: 9,
    autoplaySpeed: 200,
  });

});
