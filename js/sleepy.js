
$(document).ready(function(){

    console.log(window.location);
    if(window.location.pathname === "/sleepystars/privacy/") {
      window.location = "http://www.tlayne.com/sleepystars/index.html?privacy_ref=true";
    }

  var loadHome = function() {
    setTimeout(function() {
      $('.show-1').removeClass('invisible');
      $('#hideAll').css('opacity', 0);

      setTimeout(function() {

        $('.show-2').removeClass('invisible');
        $('#hideAll').css('display', 'none');
        setTimeout(function() {
          $('.show-3').removeClass('invisible');
          setTimeout(function() {

            $('.show-4').removeClass('invisible');
            setTimeout(function() {

              $('.show-5').removeClass('invisible');

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
  var isPrivacy = getQueryVariable("privacy_ref");

  function slickIt() {
    $('.fader').slick({
      dots: false,
      infinite: true,
      speed: 1000,
      fade: true,
      cssEase: 'linear',
      arrows: false,
      autoplay: true,
      zIndex: 9,
      autoplaySpeed: 200,
      pauseOnFocus: false,
      pauseOnHover: false,
      responsive: true
    });
  }

  function unslickIt() {
    $('.fader').slick('unslick');
  }
  if(isApp === "true") {
    $('.bg-img').hide();
    $('.header-tohide').hide();
    // $('.fader').hide();
    $('.sound-cloud').hide();
  } else {
    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
      if ($(this).attr('class') !== 'dropdown-toggle active' && $(this).attr('class') !== 'dropdown-toggle') {
        $('.navbar-toggle:visible').click();
      }
    });

    $('.navbar-toggler .fa-times').css('display', 'none');

    // slickIt();

  }

  if(isPrivacy && isPrivacy === "true") {
    $('.privacy-link').click();
  }

  //
  // $(function() {
  //   $('a.page-scroll').bind('click', function(event) {
  //     var $anchor = $(this);
  //     $('html, body').animate({
  //         scrollTop: $($anchor.attr('href')).offset().top
  //     }, 1500, 'easeInOutExpo');
  //     event.preventDefault();
  //   });
  // });


  var nav = $("#myNav");
  nav.css('display', 'none');
  nav.css('opacity', 0);
  // var navContainer = $(nav).find('.container');
  var isNavOpen = false;

  function openNav() {
    if(isNavOpen) {
      // nav.style.width = "0%";

      nav.css('opacity', 0);
      $('.navbar-toggle').addClass('collapsed');
      isNavOpen = false;
      setTimeout(function() {
        nav.css('display', 'none');
      }, 500);
    } else {
      // nav.style.width = "100%";
      nav.css('display', 'block');
      nav.css('opacity', 1);
      $('.navbar-toggle').removeClass('collapsed');
      isNavOpen = true;
    }

  }
  $('.navbar-toggle').click(function() {
    openNav();
  });

  loadHome();

  // BOOTSTRAP 4.0 - Open YouTube Video Dynamicaly in Modal Window
  // Modal Window for dynamically opening videos
  $('a[href^="https://www.youtube.com"]').on('click', function(e){
    // Store the query string variables and values
  	// Uses "jQuery Query Parser" plugin, to allow for various URL formats (could have extra parameters)
  	var queryString = $(this).attr('href').slice( $(this).attr('href').indexOf('?') + 1);
  	var queryVars = $.parseQuery( queryString );

  	// if GET variable "v" exists. This is the Youtube Video ID
  	if ( 'v' in queryVars )
  	{
  		// Prevent opening of external page
  		e.preventDefault();

  		// Variables for iFrame code. Width and height from data attributes, else use default.
  		var vidWidth = 560; // default
  		var vidHeight = 315; // default
  		if ( $(this).attr('data-width') ) { vidWidth = parseInt($(this).attr('data-width')); }
  		if ( $(this).attr('data-height') ) { vidHeight =  parseInt($(this).attr('data-height')); }
  		var iFrameCode = '<iframe width="' + vidWidth + '" height="'+ vidHeight +'" scrolling="no" allowtransparency="true" allowfullscreen="true" src="https://www.youtube.com/embed/'+  queryVars['v'] +'?rel=0&wmode=transparent&showinfo=0&autoplay=1" frameborder="0"></iframe>';

  		// Replace Modal HTML with iFrame Embed
  		$('#mediaModal .modal-body').html(iFrameCode);
  		// Set new width of modal window, based on dynamic video content
  		$('#mediaModal').on('show.bs.modal', function () {
  			// Add video width to left and right padding, to get new width of modal window
  			var modalBody = $(this).find('.modal-body');
  			var modalDialog = $(this).find('.modal-dialog');
  			var newModalWidth = vidWidth + parseInt(modalBody.css("padding-left")) + parseInt(modalBody.css("padding-right"));
  			newModalWidth += parseInt(modalDialog.css("padding-left")) + parseInt(modalDialog.css("padding-right"));
  			newModalWidth += 'px';
  			// Set width of modal (Bootstrap 3.0)
  		    $(this).find('.modal-dialog').css('max-width', newModalWidth);
  		});

  		// Open Modal
  		$('#mediaModal').modal();
  	}
  });

  // Clear modal contents on close.
  // There was mention of videos that kept playing in the background.
  $('#mediaModal').on('hidden.bs.modal', function () {
  	$('#mediaModal .modal-body').html('');
  });

  // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 50
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


  $('#mediaModal').on('show.bs.modal', function (event) {
    unslickIt();
  }).on('hide.bs.modal', function (event) {
    slickIt();
  })
});

// REQUIRED: "jQuery Query Parser" plugin.
// https://github.com/mattsnider/jquery-plugin-query-parser
// Minified version here:
 (function($){var pl=/\+/g,searchStrict=/([^&=]+)=+([^&]*)/g,searchTolerant=/([^&=]+)=?([^&]*)/g,decode=function(s){return decodeURIComponent(s.replace(pl," "));};$.parseQuery=function(query,options){var match,o={},opts=options||{},search=opts.tolerant?searchTolerant:searchStrict;if('?'===query.substring(0,1)){query=query.substring(1);}while(match=search.exec(query)){o[decode(match[1])]=decode(match[2]);}return o;};$.getQuery=function(options){return $.parseQuery(window.location.search,options);};$.fn.parseQuery=function(options){return $.parseQuery($(this).serialize(),options);};}(jQuery));
