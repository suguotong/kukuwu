$(function(){
	$('.loading-logo').addClass('active');
	$('body').addClass('loaded');
    setTimeout(function(){
    	$('.loading').fadeOut(300);
    	$('.service-page1-banner').addClass('act');
    	var doc = $('.service-number');
		numberScroll(doc,20,24);
    	$('.sidebar').animate({'right':'0'},600);
    },1200);
	$(".mobile-header-icon").click(function () {
        $(this).toggleClass("mobile-header-icon-click mobile-header-icon-out");
        $(".mobile-nav").slideToggle(250);
    });
    $(".mobile-nav a").each(function (index) {
        $(this).css({'animation-delay': (index / 10) + 's'});
    });
	$(".mobile-nav a").click(function () {
		$(".mobile-header-icon").toggleClass("mobile-header-icon-click mobile-header-icon-out");
        $(".mobile-nav").slideToggle(250);
    });
    $('.phone-close').click(function(){
   	    $('.phone-alert').fadeOut(500);
    });
    $('.return-top').click(function(){
   	    $("html,body").animate({scrollTop:0}, 500);
    });
    var st = 0;
    $(window).scroll(function(){
    	st = $(window).scrollTop();
    	if(st>110){
    		$('.header').addClass('active');
    		$('.return-top').fadeIn(300);
    	}else{
    		$('.header').removeClass('active');
    		$('.return-top').fadeOut(300);
    	}
    });
    
});
function phone(){
	$('.phone-alert').fadeIn(500);
};
$(function(){
	var service7 = 0;
	var serviceTop = 0;
    $(window).scroll(function(){
    	serviceTop = $(window).scrollTop();
    	service7 = $('.service-page7').offset().top;
    	if(serviceTop>service7-240){
			$('.service-page7').addClass('act');
    	}else if(serviceTop<service7-760){
    		$('.service-page7').removeClass('act');
    	}
    });
    var winWid = $(window).width();
    if(winWid>800){
    	skrollr.init({
	        forceHeight: false,
	        smoothScrolling:true,
	        smoothScrollingDuration:500,
	        easing: {
	            vibrate: function(p) {
	                return Math.sin(p * 10 * Math.PI);
	            }
	        }
	    });
    };
	if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
		var wow = new WOW({
		    boxClass: 'wow',
		    animateClass: 'animated',
		    offset: 0,
		    mobile: true,
		    live: true
		});
		wow.init();
	};
})
function numberScroll(el,sp,n){
	var str = parseInt(el.attr("data-str"));
	var end = parseInt(el.attr("data-end"));
    var inter = null;
    inter = setInterval(function(){
    	if(str < end){
        	str=str+n;
        }else{
        	clearInterval(inter);
        	str = end;
        };
    	el.text(str);
    },sp);
};