$(document).ready(function(){function a(){$(".navbar").offset().top>50?$(".navbar-fixed-top").addClass("top-nav-collapse"):$(".navbar-fixed-top").removeClass("top-nav-collapse")}$(window).scroll(a),$(document).ready(a),$(function(){$("a.page-scroll").bind("click",function(a){var o=$(this);$("html, body").stop().animate({scrollTop:$(o.attr("href")).offset().top},1500,"easeInOutExpo"),a.preventDefault()})}),$(".navbar-collapse ul li a").click(function(){"dropdown-toggle active"!==$(this).attr("class")&&"dropdown-toggle"!==$(this).attr("class")&&$(".navbar-toggle:visible").click()})});