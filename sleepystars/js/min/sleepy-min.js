$(document).ready(function(){function e(e){for(var i=window.location.search.substring(1),s=i.split("&"),o=0;o<s.length;o++){var t=s[o].split("=");if(t[0]==e)return t[1]}return!1}function i(){a?(t.css("opacity",0),$(".navbar-toggle").addClass("collapsed"),a=!1):(t.css("opacity",1),$(".navbar-toggle").removeClass("collapsed"),a=!0)}var s=function(){setTimeout(function(){$(".show-1").removeClass("invisible"),$("#hideAll").css("opacity",0),setTimeout(function(){$(".show-2").removeClass("invisible"),setTimeout(function(){$(".show-3").removeClass("invisible"),setTimeout(function(){$(".show-4").removeClass("invisible"),setTimeout(function(){$(".show-5").removeClass("invisible"),$("#hideAll").css("display","none")},500)},1500)},1e3)},1e3)},500)},o=e("app_ref");"true"===o?($(".bg-img").hide(),$(".header-tohide").hide(),$(".fader").hide(),$(".sound-cloud").hide()):($(".navbar-collapse ul li a").click(function(){"dropdown-toggle active"!==$(this).attr("class")&&"dropdown-toggle"!==$(this).attr("class")&&$(".navbar-toggle:visible").click()}),$(".navbar-toggler .fa-times").css("display","none"),$(".fader").slick({dots:!1,infinite:!0,speed:500,fade:!0,cssEase:"linear",arrows:!1,autoplay:!0,zIndex:9,autoplaySpeed:200})),$(function(){$("a.page-scroll").bind("click",function(e){var i=$(this);$("html, body").stop().animate({scrollTop:$(i.attr("href")).offset().top},1500,"easeInOutExpo"),e.preventDefault()})});var t=$("#myNav"),a=!1;$(".navbar-toggle").click(function(){i()}),s()});