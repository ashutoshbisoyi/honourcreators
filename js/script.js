$(window).on('load',function(){$('#overlayer').fadeOut('slow')});$(document).ready(function(){$(window).scroll(function(){if($(window).scrollTop()>50){$('.backToTop').css('bottom','3%')}else{$('.backToTop').css('bottom','-15%')}})});$('.work-sample .card').hover(function(){swiper.autoplay.stop()},function(){swiper.autoplay.start()});$(document).ready(function(){$(window).on('resize',function(e){checkScreenSize()});checkScreenSize();function checkScreenSize(){var newWindowWidth=$(window).width();if(newWindowWidth<600){$('.feature').removeClass('animate__animated');$('.backToTop').css('display','none');$('.whyUs .col-md-3').attr('data-aos','fade-in')}}})
