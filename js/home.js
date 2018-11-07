$(function(){
	$('.loading-logo').addClass('active');
	$('body').addClass('loaded');
	setTimeout(function(){
		$('.loading').fadeOut(300);
    	$('.sidebar').animate({'right':'0'},600);
    	page1();
		customerEffect();
		var mySwiper =null;
		var doc =null;
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
   })
});
$(function(){
	//滚屏插件配置
    $('#allPage').fullpage({
    	verticalCentered:false,
        scrollingSpeed:450,
        css3:false,
        navigation:true,
        navigationPosition:'left',
        anchors:["page1","page2","page3","page4","page5","page6","page7"],
        afterLoad:function(anchorLink ,index){
        	switch (index){
    			case 3:
        			page3();
    			break;
    			case 4:
        			page4Flash();
    			break;
        	}
        },
    });
    
});
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

function rand(s,e,el){
    var cha = e-s;
    var num = parseInt(Math.random()*cha) +parseInt(s);
    el.text(num)
};
function numScroll(s,e,el){
    var inter = setInterval(function() 
    { 
    	rand(s,e,el)
    }, 50);
    setTimeout(function(){
     	clearInterval(inter);
        el.text(e);
    },2000);
}
function page1(){
	  var el1 = $('.home-num span').eq(0);
	  var el2 = $('.home-num span').eq(1);
	  var doc = $('.service-number');
	  setTimeout(function(){
 		numberScroll(el1,120,1);
		numberScroll(el2,50,1);
 	  },1200); 	
	  numberScroll(doc,30,24);
	  $('.banner-li:first').addClass('active');
	  var js = 0;
	  var btnNum = 0;
	  $('.banner-ul').append($('.banner-li:first').clone());
	  var Num = $('.banner-li').length;
	  $('.banner-ul').width(Num*100+'%');
	  $('.banner-li').width(100/Num+'%');
	  function banner(){
	      if(!$(".banner-ul").is(":animated")){
	          js++;
	          btnNum++;
	          if(js == Num){
	            $('.banner-ul').css('left',0);
	            js = 1;
	          }
	          $('.banner-ul').animate({left: -js*100+'%'}, 600); 
	          if(btnNum==Num-1){
	              btnNum=0;
	          }
	          $('.banner_btn span').eq(btnNum).addClass('act').siblings('span').removeClass('act');
	          $('.banner-li').eq(js).addClass('active').siblings('.banner-li').removeClass('active');
	      }
	  }
	  var time = null;
	  time = setInterval(banner,6000)
	  for (var i = 0; i < Num-1; i++) {
	      var span = document.createElement('span');
	      $('.banner_btn').append(span);
	      span.className='span';
	      if(i==0){
	        span.className='span act';  
	      }
	  };
	  $('.banner_btn span').click(function(){
	  	if(!$(".banner-ul").is(":animated")){
	        btnNum = $(this).index();
	        js= $(this).index();
	        $('.banner_btn span').eq(btnNum).addClass('act').siblings('span').removeClass('act');
	        $('.banner-li').eq(btnNum).addClass('active').siblings('.banner-li').removeClass('active');
	        $('.banner-ul').animate({left: -js*100+'%'}, 600); 	
	  	}
	  });
	  
	var startPoint = null; 
	var doc = document.getElementById('banner');
	doc.addEventListener("touchstart",function(e){  
        var e = e||window.event;  
        startPoint = e.touches[0];  
	})  
	doc.addEventListener("touchend",function(e){  
        var e=e||window.event; 
        var endPoint = e.changedTouches[0];  
        //计算终点与起点的差值  
        var x = endPoint.clientX - startPoint.clientX;  
        var y = endPoint.clientY - startPoint.clientY; 
        var d = 50;
        if(Math.abs(x)>d){  
            if(x>0){  
            	js--;
	            btnNum--;
	            if(js <0){
	            	$('.banner-ul').css('left',-(Num-1)*100+'%');
	            	js = Num-2;
	            	btnNum = js;
	            }
	            $('.banner-ul').animate({left: -js*100+'%'}, 600); 
	            $('.banner_btn span').eq(btnNum).addClass('act').siblings('span').removeClass('act');
	        	$('.banner-li').eq(js).addClass('active').siblings('.banner-li').removeClass('active');  
            }else{  
            	js++;
	            btnNum++;
	            if(js == Num){
	            	$('.banner-ul').css('left',0)
	            	js = 1;
	            }
	            $('.banner-ul').animate({left: -js*100+'%'}, 600); 
	            if(btnNum==Num-1){
	                btnNum=0;
	            }
	            $('.banner_btn span').eq(btnNum).addClass('act').siblings('span').removeClass('act');
	            $('.banner-li').eq(js).addClass('active').siblings('.banner-li').removeClass('active');  
            }  
        }
	});
}
function page3(){
	if(window.addEventListener){ 
		mySwiper = new Swiper('.page3 .swiper-container', {
			loop : true,
			speed:1300,
			parallax : true,
			prevButton:'.case-btn-l',
			nextButton:'.case-btn-r'
		});
	}else{ 
		mySwiper = new Swiper('.page3 .swiper-container',{
		    loop:true,
		    grabCursor: true,
		    paginationClickable: true
		});
		$('.case-btn-l').on('click', function(e){
		   e.preventDefault()
	 	   mySwiper.swipePrev()
		})
		$('.case-btn-r').on('click', function(e){
		    e.preventDefault()
		    mySwiper.swipeNext()
		})
	}
}
function page4Flash(){
	doc = $('.customer-number-main span');
    numberScroll(doc,30,33);
};
function customerEffect(){
	var $li =$('.customer li');
	$li.hover(function (ev) {

		move.call(this , ev , true);

	},function (ev) {
		move.call(this , ev , false);
	});
	function move( ev , bool) {

		var top = $(this).offset().top;
		var bottom = top + $(this).height();
		var left = $(this).offset().left;
		var right = left + $(this).width();
		
		var x = ev.pageX,
			y = ev.pageY;

		var sT = Math.abs(y - top),
			sB = Math.abs(y - bottom),
			sL = Math.abs(x - left),
			sR = Math.abs(x - right);

		var a = Math.min( sT , sB , sL , sR );

		switch( a ){

			case sT:
				if (bool) {
					$(this).find('.cove').css({
						left:0,
						top:'-360px'
					}).animate({
						top:0
					},400);
				} else {
					$(this).find('.cove').stop(1,1).animate({
						top:'-360px'
					},400);
				}
			break;

			case sB:
				if ( bool ) {
					$(this).find('.cove').css({
						left:0,
						top:'360px'
					}).animate({
						top:0
					},400);							
				} else {
					$(this).find('.cove').stop(1,1).animate({
						top:'360px'
					},400);	
				}

			break;
			case sL:
				if ( bool ) {
					$(this).find('.cove').css({
						left:'-300px',
						top:0
					}).animate({
						left:0
					},400);							
				} else {
					$(this).find('.cove').stop(1,1).animate({
						left:'-300px'
					},400);	
				}

			break;
			case sR:
				if ( bool ) {
					$(this).find('.cove').css({
						left:'300px',
						top:0
					}).animate({
						left:0
					},400);							
				} else {
					$(this).find('.cove').stop(1,1).animate({
						left:'300px'
					},400);	
				}

			break;



		}

	};
};
function phone(){
	$('.phone-alert').fadeIn(500);
};

	


