$(document).ready(function(){function e(e){for(var t=window.location.search.substring(1),a=t.split("&"),i=0;i<a.length;i++){var o=a[i].split("=");if(o[0]==e)return o[1]}return!1}function t(){$(".fader").slick({dots:!1,infinite:!0,speed:800,fade:!0,cssEase:"linear",arrows:!1,autoplay:!0,zIndex:9,autoplaySpeed:200})}function a(){$(".fader").slick("unslick")}function i(){l?(r.css("opacity",0),$(".navbar-toggle").addClass("collapsed"),l=!1,setTimeout(function(){r.css("display","none")},500)):(r.css("display","block"),r.css("opacity",1),$(".navbar-toggle").removeClass("collapsed"),l=!0)}console.log(window.location),"http://www.tlayne.com/sleepystars/privacy"===window.location&&(window.location="http://www.tlayne.com/sleepystars/index.html?privacy_ref=true");var o=function(){setTimeout(function(){$(".show-1").removeClass("invisible"),$("#hideAll").css("opacity",0),setTimeout(function(){$(".show-2").removeClass("invisible"),$("#hideAll").css("display","none"),setTimeout(function(){$(".show-3").removeClass("invisible"),setTimeout(function(){$(".show-4").removeClass("invisible"),setTimeout(function(){$(".show-5").removeClass("invisible")},500)},1500)},1e3)},1e3)},500)},n=e("app_ref"),s=e("privacy_ref");"true"===n?($(".bg-img").hide(),$(".header-tohide").hide(),$(".fader").hide(),$(".sound-cloud").hide()):($(".navbar-collapse ul li a").click(function(){"dropdown-toggle active"!==$(this).attr("class")&&"dropdown-toggle"!==$(this).attr("class")&&$(".navbar-toggle:visible").click()}),$(".navbar-toggler .fa-times").css("display","none"),t()),s&&"true"===s&&$(".privacy-link").click();var r=$("#myNav");r.css("display","none"),r.css("opacity",0);var l=!1;$(".navbar-toggle").click(function(){i()}),o(),$('a[href^="https://www.youtube.com"]').on("click",function(e){var t=$(this).attr("href").slice($(this).attr("href").indexOf("?")+1),a=$.parseQuery(t);if("v"in a){e.preventDefault();var i=560,o=315;$(this).attr("data-width")&&(i=parseInt($(this).attr("data-width"))),$(this).attr("data-height")&&(o=parseInt($(this).attr("data-height")));var n='<iframe width="'+i+'" height="'+o+'" scrolling="no" allowtransparency="true" allowfullscreen="true" src="https://www.youtube.com/embed/'+a.v+'?rel=0&wmode=transparent&showinfo=0&autoplay=1" frameborder="0"></iframe>';$("#mediaModal .modal-body").html(n),$("#mediaModal").on("show.bs.modal",function(){var e=$(this).find(".modal-body"),t=$(this).find(".modal-dialog"),a=i+parseInt(e.css("padding-left"))+parseInt(e.css("padding-right"));a+=parseInt(t.css("padding-left"))+parseInt(t.css("padding-right")),a+="px",$(this).find(".modal-dialog").css("max-width",a)}),$("#mediaModal").modal()}}),$("#mediaModal").on("hidden.bs.modal",function(){$("#mediaModal .modal-body").html("")}),$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(e){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length&&(e.preventDefault(),$("html, body").animate({scrollTop:t.offset().top-50},1e3,function(){var e=$(t);return e.focus(),e.is(":focus")?!1:(e.attr("tabindex","-1"),void e.focus())}))}}),$("#mediaModal").on("show.bs.modal",function(e){a()}).on("hide.bs.modal",function(e){t()})}),function($){var e=/\+/g,t=/([^&=]+)=+([^&]*)/g,a=/([^&=]+)=?([^&]*)/g,i=function(t){return decodeURIComponent(t.replace(e," "))};$.parseQuery=function(e,o){var n,s={},r=o||{},l=r.tolerant?a:t;for("?"===e.substring(0,1)&&(e=e.substring(1));n=l.exec(e);)s[i(n[1])]=i(n[2]);return s},$.getQuery=function(e){return $.parseQuery(window.location.search,e)},$.fn.parseQuery=function(e){return $.parseQuery($(this).serialize(),e)}}(jQuery);