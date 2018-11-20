$(function(){
	$('.loading-logo').addClass('active');
	$('body').addClass('loaded');
    setTimeout(function(){
    	$('.loading').fadeOut(300);
    	$('.service-banner').addClass('act');
    	$('.sidebar').animate({'right':'0'},600);
    	$('http://www.kukuwu.com/js/.case-banner .text').addClass('act');
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
    })
});
function phone(){
	$('.phone-alert').fadeIn(500);
};
function service(){
	var service5 = 0;
	var serviceTop = 0;
    $(window).scroll(function(){
    	serviceTop = $(window).scrollTop();
    	service5 = $('.service-page5').offset().top;
    	if(serviceTop>service5-240){
			$('.service-page5').addClass('act');
    	}else if(serviceTop<service5-760){
    		$('.service-page5').removeClass('act');
    	}
    })
	var winW = $(window).width();
	if(winW>1200){
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
	}else{
		if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
			var wow = new WOW({
			    boxClass: 'wow',
			    animateClass: 'animated',
			    offset: 0,
			    mobile: true,
			    live: true
			});
			wow.init();
		}
	}
}
function cases(){
	numberScroll($('.service-number'),55,33);
	if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
		var wow = new WOW({
		    boxClass: 'wow',
		    animateClass: 'animated',
		    offset: 0,
		    mobile: true,
		    live: true
		});
		wow.init();
	}
	caseCanvas();
}
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
function about(){
	if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
		var wow = new WOW({
		    boxClass: 'wow',
		    animateClass: 'animated',
		    offset: 0,
		    mobile: true,
		    live: true
		});
		wow.init();
	}
	var flag = true;
	$(window).scroll(function(){
		if(flag){
			var numT = $('.about-banner').innerHeight();
			var sT = $(window).scrollTop();
			var winT = $(window).height();
			if(sT+winT > numT +120 ){
				setTimeout(function(){
					numberScroll($('.about-number1'),70,1);
					numberScroll($('.about-number2'),80,3);
					numberScroll($('.about-number3'),80,2);
					numberScroll($('.about-number4'),80,39);
				},100);
				flag=false;
			};
		}
	});
	var wid = $("#allList").width();
	var hei = wid/10*2.5;
	$('.about-list li').height(hei);
}
function contact(){
	if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
		var wow = new WOW({
		    boxClass: 'wow',
		    animateClass: 'animated',
		    offset: 0,
		    mobile: true,
		    live: true
		});
		wow.init();
	}
}
function caseCanvas(){
	var SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 50;
	var container,canvasBox;
	var camera, scene, renderer;
	var particles, particle, count = 0;

	var mouseX = 0, mouseY = 0;

	var windowHalfX = window.innerWidth / 2;
	var windowHalfY = window.innerHeight / 2;

	init();
	animate();

	function init() {
		container = document.createElement( 'div' );
		canvasBox = document.getElementById('caseCanvas');
		canvasBox.appendChild( container );
		camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
		camera.position.z = 1000;

		scene = new THREE.Scene();

		particles = new Array();

		var PI2 = Math.PI * 2;
		var material = new THREE.ParticleCanvasMaterial( {

			color: 0xffffff,
			program: function ( context ) {

				context.beginPath();
				context.arc( 0, 0, 1, 0, PI2, true );
				context.fill();

			}

		} );

		var i = 0;

		for ( var ix = 0; ix < AMOUNTX; ix ++ ) {

			for ( var iy = 0; iy < AMOUNTY; iy ++ ) {

				particle = particles[ i ++ ] = new THREE.Particle( material );
				particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
				particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 );
				scene.add( particle );

			}

		}

		renderer = new THREE.CanvasRenderer();
		renderer.setSize( window.innerWidth, window.innerHeight/1.1 );
		container.appendChild( renderer.domElement );

		document.addEventListener( 'mousemove', onDocumentMouseMove, false );
		document.addEventListener( 'touchstart', onDocumentTouchStart, false );
		document.addEventListener( 'touchmove', onDocumentTouchMove, false );

		//

		window.addEventListener( 'resize', onWindowResize, false );

	}

	function onWindowResize() {

		windowHalfX = window.innerWidth / 2;
		windowHalfY = window.innerHeight / 2;

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( window.innerWidth, window.innerHeight );

	}

	//

	function onDocumentMouseMove( event ) {

		mouseX = event.clientX - windowHalfX;
		mouseY = event.clientY - windowHalfY;

	}

	function onDocumentTouchStart( event ) {

		if ( event.touches.length === 1 ) {

			event.preventDefault();

			mouseX = event.touches[ 0 ].pageX - windowHalfX;
			mouseY = event.touches[ 0 ].pageY - windowHalfY;

		}

	}

	function onDocumentTouchMove( event ) {

		if ( event.touches.length === 1 ) {

			event.preventDefault();

			mouseX = event.touches[ 0 ].pageX - windowHalfX;
			mouseY = event.touches[ 0 ].pageY - windowHalfY;

		}

	}

	//

	function animate() {

		requestAnimationFrame( animate );

		render();


	}

	function render() {

		camera.position.x += ( mouseX - camera.position.x ) * .05;
		camera.position.y += ( - mouseY - camera.position.y ) * .05;
		camera.lookAt( scene.position );

		var i = 0;

		for ( var ix = 0; ix < AMOUNTX; ix ++ ) {

			for ( var iy = 0; iy < AMOUNTY; iy ++ ) {

				particle = particles[ i++ ];
				particle.position.y = ( Math.sin( ( ix + count ) * 0.3 ) * 50 ) + ( Math.sin( ( iy + count ) * 0.5 ) * 50 );
				particle.scale.x = particle.scale.y = ( Math.sin( ( ix + count ) * 0.3 ) + 1 ) * 2 + ( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 2;

			}

		}

		renderer.render( scene, camera );

		count += 0.1;

	}
}
