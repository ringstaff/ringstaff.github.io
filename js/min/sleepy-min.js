$(document).ready(function(){function e(e){for(var t=window.location.search.substring(1),a=t.split("&"),i=0;i<a.length;i++){var s=a[i].split("=");if(s[0]==e)return s[1]}return!1}function t(){$(".fader").slick({dots:!1,infinite:!0,speed:800,fade:!0,cssEase:"linear",arrows:!1,autoplay:!0,zIndex:9,autoplaySpeed:200})}function a(){$(".fader").slick("unslick")}function i(){o?(n.css("opacity",0),$(".navbar-toggle").addClass("collapsed"),o=!1,setTimeout(function(){n.css("display","none")},500)):(n.css("display","block"),n.css("opacity",1),$(".navbar-toggle").removeClass("collapsed"),o=!0)}var s=function(){setTimeout(function(){$(".show-1").removeClass("invisible"),$("#hideAll").css("opacity",0),setTimeout(function(){$(".show-2").removeClass("invisible"),$("#hideAll").css("display","none"),setTimeout(function(){$(".show-3").removeClass("invisible"),setTimeout(function(){$(".show-4").removeClass("invisible"),setTimeout(function(){$(".show-5").removeClass("invisible")},500)},1500)},1e3)},1e3)},500)};"true"===e("app_ref")?($(".bg-img").hide(),$(".header-tohide").hide(),$(".fader").hide(),$(".sound-cloud").hide()):($(".navbar-collapse ul li a").click(function(){"dropdown-toggle active"!==$(this).attr("class")&&"dropdown-toggle"!==$(this).attr("class")&&$(".navbar-toggle:visible").click()}),$(".navbar-toggler .fa-times").css("display","none"),t());var n=$("#myNav");n.css("display","none"),n.css("opacity",0);var o=!1;$(".navbar-toggle").click(function(){i()}),s(),$('a[href^="https://www.youtube.com"]').on("click",function(e){var t=$(this).attr("href").slice($(this).attr("href").indexOf("?")+1),a=$.parseQuery(t);if("v"in a){e.preventDefault();var i=560,s=315;$(this).attr("data-width")&&(i=parseInt($(this).attr("data-width"))),$(this).attr("data-height")&&(s=parseInt($(this).attr("data-height")));var n='<iframe width="'+i+'" height="'+s+'" scrolling="no" allowtransparency="true" allowfullscreen="true" src="https://www.youtube.com/embed/'+a.v+'?rel=0&wmode=transparent&showinfo=0&autoplay=1" frameborder="0"></iframe>';$("#mediaModal .modal-body").html(n),$("#mediaModal").on("show.bs.modal",function(){var e=$(this).find(".modal-body"),t=$(this).find(".modal-dialog"),a=i+parseInt(e.css("padding-left"))+parseInt(e.css("padding-right"));a+=parseInt(t.css("padding-left"))+parseInt(t.css("padding-right")),a+="px",$(this).find(".modal-dialog").css("max-width",a)}),$("#mediaModal").modal()}}),$("#mediaModal").on("hidden.bs.modal",function(){$("#mediaModal .modal-body").html("")}),$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(e){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length&&(e.preventDefault(),$("html, body").animate({scrollTop:t.offset().top-50},1e3,function(){var e=$(t);if(e.focus(),e.is(":focus"))return!1;e.attr("tabindex","-1"),e.focus()}))}}),$("#mediaModal").on("show.bs.modal",function(e){a()}).on("hide.bs.modal",function(e){t()})}),function($){var e=/\+/g,t=/([^&=]+)=+([^&]*)/g,a=/([^&=]+)=?([^&]*)/g,i=function(t){return decodeURIComponent(t.replace(e," "))};$.parseQuery=function(e,s){var n,o={},r=s||{},l=r.tolerant?a:t;for("?"===e.substring(0,1)&&(e=e.substring(1));n=l.exec(e);)o[i(n[1])]=i(n[2]);return o},$.getQuery=function(e){return $.parseQuery(window.location.search,e)},$.fn.parseQuery=function(e){return $.parseQuery($(this).serialize(),e)}}(jQuery);