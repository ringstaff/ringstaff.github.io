
$(document).ready(function(){

  var loadHome = function() {
    setTimeout(function() {
      $('.show-1').removeClass('invisible');
      $('#hideAll').css('opacity', 0);

      setTimeout(function() {

        $('.show-2').removeClass('invisible');
        setTimeout(function() {

          $('.show-3').removeClass('invisible');
          setTimeout(function() {

            $('.show-4').removeClass('invisible');
            setTimeout(function() {

              $('.show-5').removeClass('invisible');
              $('#hideAll').css('display', 'none');
            }, 500);
          }, 1500);
        }, 1000);
      }, 1000);
    }, 500);
  };


  function getQueryVariable(variable)
  {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
           var pair = vars[i].split("=");
           if(pair[0] == variable){return pair[1];}
    }
   return(false);
  }

  var isApp = getQueryVariable("app_ref");

  if(isApp === "true") {
    $('.bg-img').hide();
    $('.header-tohide').hide();
    $('.fader').hide();
    $('.sound-cloud').hide();
  } else {
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
  }

  $(function() {
    $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    });
  });


  var nav = $("#myNav");
  // var navContainer = $(nav).find('.container');
  var isNavOpen = false;

  function openNav() {
    if(isNavOpen) {
      // nav.style.width = "0%";
      nav.css('opacity', 0);
      $('.navbar-toggle').addClass('collapsed');
      isNavOpen = false;
    } else {
      // nav.style.width = "100%";
      nav.css('opacity', 1);
      $('.navbar-toggle').removeClass('collapsed');
      isNavOpen = true;
    }

  }
  $('.navbar-toggle').click(function() {
    openNav();
  });

  loadHome();





});
