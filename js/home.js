$(function(){

	var v_slide = 1;

	var horizontal_slide = new Swiper('.swiper-container-horizontal',{
        calculateHeight: false,
        cssWidthAndHeight: false,
		pagination:'.pagination',
		centeredSlides: true,
		slidesPerView: 4,
		watchActiveIndex: true,
		keyboardControl: true,
		autoResize : false,	
		speed : 600,	
		paginationClickable: true
		
	});



	var vertical1 = new Swiper('.swiper-container-vertical-1',{
		centeredSlides: true,
		slidesPerView: 3,
		watchActiveIndex: true,
		autoResize : false,
		speed : 600,	
		mode: 'vertical'
		});

	var vertical2 = new Swiper('.swiper-container-vertical-2',{
		centeredSlides: true,
		slidesPerView: 3,
		watchActiveIndex: true,
		autoResize : false,
		speed : 600,	
		mode: 'vertical'
		});

	var vertical3 = new Swiper('.swiper-container-vertical-3',{
		centeredSlides: true,
		slidesPerView: 3,
		watchActiveIndex: true,
		autoResize : false,
		speed : 600,	
		mode: 'vertical'
		});



	var vertical4 = new Swiper('.swiper-container-vertical-4',{
		centeredSlides: true,
		slidesPerView: 3,
		watchActiveIndex: true,
		autoResize : false,
		speed: 600,	
		mode: 'vertical'
		});








		$(document).keydown(function(e) {
			var code = (e.keyCode ? e.keyCode : e.which);
			if (code == 37) {
				horizontal_slide.swipePrev();
				v_slide =horizontal_slide.activeIndex + 1;
				
				
			} else if (code == 39) {
				horizontal_slide.swipeNext();
				v_slide =horizontal_slide.activeIndex + 1;
			}else if (code == 40) {
				switch(v_slide)
				{
				case 1:
				  vertical1.swipeNext();
				  break;
				case 2:
				  vertical2.swipeNext();
				  break;
				case 3:
				  vertical3.swipeNext();
				  break;
				case 4:
				  vertical4.swipeNext();
				  break;
				}
			} else if (code == 38) {
				switch(v_slide)
				{
				case 1:
				  vertical1.swipePrev();
				  break;
				case 2:
				  vertical2.swipePrev();
				  break;
				case 3:
				  vertical3.swipePrev();
				  break;
				case 4:
				  vertical4.swipePrev();
				  break;
				}
			}


		});



		$('.nav_up').click(function(){
				switch(v_slide)
				{
				case 1:
				  vertical1.swipePrev();
				  break;
				case 2:
				  vertical2.swipePrev();
				  break;
				case 3:
				  vertical3.swipePrev();
				  break;
				case 4:
				  vertical4.swipePrev();
				  break;
				}

		});

		$('.nav_down').click(function(){
				switch(v_slide)
				{
				case 1:
				  vertical1.swipeNext();
				  break;
				case 2:
				  vertical2.swipeNext();
				  break;
				case 3:
				  vertical3.swipeNext();
				  break;
				case 4:
				  vertical4.swipeNext();
				  break;
				}
		});



		$('.swiper-pagination-switch').click(function(){
			v_slide = $( ".swiper-active-switch" ).index()+1 ;
		});
		$('.swiper-active-switch').change(function(){
			v_slide = $( ".swiper-active-switch" ).index()+1 ;
		});


        if (document.cookie.indexOf("visited") >= 0) {
            //Don't open any pop up here... You can do something here
            //alert("Demo already shown");
            $("#keyboard-intro-home").hide();

        }
        else {
            // set a new cookie..
            var cookieExpiry = new Date();
            cookieExpiry.setTime(cookieExpiry.getTime() + (8 * 3600 * 1000)); // 8 hours
            document.cookie = "visited=yes; expires=" + cookieExpiry.toGMTString();
            //alert("Show demo here");//Do here something...
            $("#keyboard-intro-home").show();
			$("#keyboard-intro-home").fadeIn('slow').delay(6000).hide(100);

        }



	function change_slide_positions(){
	//$(".swiper-slide-horizontal").removeAttr("style");
	var outer_container = $("#swiper-container-horizontal");
	oc_offset=outer_container.offset();

	window_width = $( window ).width();
	window_height = $( window ).height();
	oc_top = 0;
	oc_left = 0;
	container_width = $("#swiper-container-horizontal").width();

	var outer_pagination = $(".pagination");
	op_offset=outer_pagination.offset();

	var outer_pagination_vertical = $(".pagination-vertical");
	opv_offset=outer_pagination_vertical.offset();


	//alert(window_width);
	//alert(window_height);
	//alert(container_width);


	if(window_width <= 1600){
		oc_left = 0;
	}
	if(window_width <= 1366){
		oc_left = -100;
	}
	if(window_width <= 1200){
		oc_left = -300;
	}
	if(window_width <= 1024){
		oc_left = -350;
	}

	if(window_width <= 800){
		oc_left = -400;
	}
	
	if(window_width <= 700){
		oc_left = -430;
	}
	if(window_width <= 600){
		oc_left = -450;
	}
	

	if(window_height <= 2000){
		oc_top = -250;
	}



	if(window_height <= 700){
		oc_top = -310;
	}
	if(window_height <= 640){
		oc_top = -315;
	}

	if(window_height <= 623){
		oc_top = -325;
	}
	if(window_height <= 600){
		oc_top = -390;
	}
	
	if(window_height <= 550){
		oc_top = -400;
	}
	
	//alert(oc_left);
	//alert(oc_top);


	outer_container.offset({ top: oc_top, left: oc_left });

	var active_slide = $(".swiper-slide-active>.inner");
	as_offset = active_slide.offset();
	var keyboard_intro = $("#keyboard-intro-home");
	kb_intro_offset = keyboard_intro.offset();

	outer_pagination.offset({ top: oc_top+360, left: as_offset.left-163 });
	outer_pagination_vertical.offset({ top: oc_top+800, left: as_offset.left+400 });

	keyboard_intro.offset({ top: oc_top+400, left: as_offset.left-163 });

	}
	
	change_slide_positions();




	var zoom = $( window ).width();
	$(window).resize(function() {
		var zoomNew = $( window ).width();

		if (zoom != zoomNew) {
			//alert (zoom);
			//alert (zoomNew);
			change_slide_positions();
		}
	});





















});




