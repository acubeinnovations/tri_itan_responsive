$(function(){

	var horizontal_slide = new Swiper('.swiper-container-horizontal',{
        calculateHeight: false,
        cssWidthAndHeight: false,
		pagination:'.pagination',
		centeredSlides: true,
		slidesPerView: 5,
		watchActiveIndex: true,
		keyboardControl: true,
		autoResize : false,	
		speed : 600,	
		paginationClickable: true,
		onSlideChangeEnd: function(swiper){
		  toggle_vertical_nav();
		}
		
	});



	var vertical1 = new Swiper('.swiper-container-vertical-1',{
		centeredSlides: true,
		slidesPerView: 3,
		watchActiveIndex: true,
		autoResize : false,
		speed : 600,	
		mode: 'vertical',
		noSwiping: true,
		onSlideChangeEnd: function(swiper){
		  toggle_vertical_nav();
		}
		});

	var vertical2 = new Swiper('.swiper-container-vertical-2',{
		centeredSlides: true,
		slidesPerView: 3,
		watchActiveIndex: true,
		autoResize : false,
		speed : 600,	
		mode: 'vertical',
		noSwiping: true,
		onSlideChangeEnd: function(swiper){
		  toggle_vertical_nav();
		}
		});

	var vertical3 = new Swiper('.swiper-container-vertical-3',{
		centeredSlides: true,
		slidesPerView: 3,
		watchActiveIndex: true,
		autoResize : false,
		speed : 600,	
		mode: 'vertical',
		noSwiping: true,
		onSlideChangeEnd: function(swiper){
		  toggle_vertical_nav();
		}
		});



	var vertical4 = new Swiper('.swiper-container-vertical-4',{
		centeredSlides: true,
		slidesPerView: 3,
		watchActiveIndex: true,
		autoResize : false,
		speed: 600,	
		mode: 'vertical',
		noSwiping: true,
		onSlideChangeEnd: function(swiper){
		  toggle_vertical_nav();
		}
		});


	var vertical5 = new Swiper('.swiper-container-vertical-5',{
		centeredSlides: true,
		slidesPerView: 3,
		watchActiveIndex: true,
		autoResize : false,
		speed: 600,	
		mode: 'vertical',
		noSwiping: true,
		onSlideChangeEnd: function(swiper){
		  toggle_vertical_nav();
		}
		});








		$(document).keydown(function(e) {
			var code = (e.keyCode ? e.keyCode : e.which);
			if (code == 37) {
				horizontal_slide.swipePrev();
				toggle_vertical_nav();
			} else if (code == 39) {
				horizontal_slide.swipeNext();
				toggle_vertical_nav();
			}else if (code == 40) {
				v_slide =horizontal_slide.activeIndex + 1;
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
				case 5:
				  vertical5.swipeNext();
				  break;
				}
				toggle_vertical_nav();
			} else if (code == 38) {
				v_slide =horizontal_slide.activeIndex + 1;
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
				case 5:
				  vertical5.swipePrev();
				  break;
				}
				toggle_vertical_nav();
			}


		});



		$('.nav_up').click(function(){
				v_slide =horizontal_slide.activeIndex + 1;
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
				case 5:
				  vertical5.swipePrev();
				  break;
				}
				toggle_vertical_nav();
		});

		$('.nav_down').click(function(){
				v_slide =horizontal_slide.activeIndex + 1;
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
				case 5:
				  vertical5.swipeNext();
				  break;
				}
				toggle_vertical_nav();
		});

		$('.swiper-pagination-switch').click(function(){
				toggle_vertical_nav();
		});

		

		function toggle_opacity(){

			v_slide =horizontal_slide.activeIndex + 1;
			$('.inner-vertical').removeAttr("style");
			switch(v_slide)
			{
			case 1:
				$('.swiper-container-vertical-1 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity","1");
				$('.swiper-container-vertical-2 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity",".8");
				$('.swiper-container-vertical-3 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity",".6");
				$('.swiper-container-vertical-4 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity",".4");
				$('.swiper-container-vertical-5 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity",".2");
			  break;
			case 2:
			  	$('.swiper-container-vertical-1 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity",".8");
				$('.swiper-container-vertical-2 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity","1");
				$('.swiper-container-vertical-3 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity",".8");
				$('.swiper-container-vertical-4 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity",".6");
				$('.swiper-container-vertical-5 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity",".4");
			  break;
			case 3:
			  	$('.swiper-container-vertical-1 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity",".6");
				$('.swiper-container-vertical-2 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity",".8");
				$('.swiper-container-vertical-3 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity","1");
				$('.swiper-container-vertical-4 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity",".8");
				$('.swiper-container-vertical-5 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity",".6");
			  break;
			case 4:
			  	$('.swiper-container-vertical-1 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity",".4");
				$('.swiper-container-vertical-2 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity",".6");
				$('.swiper-container-vertical-3 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity",".8");
				$('.swiper-container-vertical-4 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity","1");
				$('.swiper-container-vertical-5 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity",".8");
			  break;
			case 5:
			  	$('.swiper-container-vertical-1 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity",".2");
				$('.swiper-container-vertical-2 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity",".4");
				$('.swiper-container-vertical-3 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity",".6");
				$('.swiper-container-vertical-4 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity",".8");
				$('.swiper-container-vertical-5 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity","1");
			  break;
			}

		}



		function toggle_vertical_nav(){
			toggle_opacity();
			v_slide =horizontal_slide.activeIndex + 1;
			v_slide_acive = 1;
			switch(v_slide)
			{
			case 1:
			  v_slide_acive = vertical1.activeIndex + 1;
			  break;
			case 2:
			  v_slide_acive = vertical2.activeIndex + 1;
			  break;
			case 3:
			  v_slide_acive = vertical3.activeIndex + 1;
			  break;
			case 4:
			  v_slide_acive = vertical4.activeIndex + 1;
			  break;
			case 5:
			  v_slide_acive = vertical5.activeIndex + 1;
			  break;
			}

			if (v_slide_acive == 1){
				 $('.nav_up').fadeTo( "fast", 0.2 );
			}else{
				 $('.nav_up').fadeTo( "fast", 1 );
			}
			if (v_slide_acive == 3){
				 $('.nav_down').fadeTo( "fast", 0.2 );
			}else{
				 $('.nav_down').fadeTo( "fast", 1 );
			}




		}

		toggle_vertical_nav();

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
	oc_top = oc_offset.top;
	oc_left = oc_offset.left;
	oc_left += -150;
	container_width = $("#swiper-container-horizontal").width();

	var outer_pagination = $(".pagination");
	op_offset=outer_pagination.offset();

	var outer_pagination_vertical = $(".pagination-vertical");
	opv_offset=outer_pagination_vertical.offset();


	//alert(window_width);
	//alert(window_height);
	//alert(container_width);


//	if(window_width <= 1600){
//		oc_left = 0;
//	}
//	if(window_width <= 1366){
//		oc_left = -100;
//	}
//	if(window_width <= 1200){
//		oc_left = -300;
//	}
//	if(window_width <= 1024){
//		oc_left = -350;
//	}
// 
//	if(window_width <= 800){
//		oc_left = -400;
//	}
	
//	if(window_width <= 700){
//		oc_left = -430;
//	}
//	if(window_width <= 600){
//		oc_left = -450;
//	}
	
	if(window_width <= 768){
		oc_left += -95;
	}
	if(window_width <= 600){
		oc_left += -40;
	}
	
	if(window_width <= 480){
		oc_left += -40;
	}
	
	if(window_width <= 320){
		oc_left += -123;
	}
	


	//alert(oc_left);


//	if(window_height <= 700){
//		oc_top = -310;
//	}
//	if(window_height <= 640){
//		oc_top = -315;
//	}
// 
//	if(window_height <= 623){
//		oc_top = -325;
//	}
//	if(window_height <= 600){
//		oc_top = -390;
//	}

	oc_top_unchanged = oc_top;
	if(window_height >=1000){
		oc_top = oc_top_unchanged + -300;
	}
	if(window_height < 1000){
		oc_top = oc_top_unchanged + -250;
	}


	if(window_height <= 900){
		oc_top = oc_top_unchanged + -180;
	}
	if(window_height <= 800){
		oc_top = oc_top_unchanged + -80;
	}
	if(window_height <= 750){
		oc_top = oc_top_unchanged + -20;
	}

	if(window_height <= 700){
		oc_top = oc_top_unchanged + 50;
	}

	if(window_height <= 600){
		oc_top = oc_top_unchanged + 130;
	}
	if(window_height <= 550){
		oc_top = oc_top_unchanged + 200;
	}
	if(window_height <= 500){
		oc_top = oc_top_unchanged + 230;
	}
	if(window_height <= 450){
		oc_top = oc_top_unchanged + 300;
	}
	if(window_height <= 400){
		oc_top = oc_top_unchanged + 310;
	}

	if(window_height <= 320){
		oc_top =oc_top_unchanged + 340;
	}
	
	//alert(oc_left);
	//alert(oc_top);


	outer_container.offset({ top: oc_top, left: oc_left });
	var active_slide = $(".swiper-slide-active>.inner");
	as_offset = active_slide.offset();
	var keyboard_intro = $("#keyboard-intro-home");
	kb_intro_offset = keyboard_intro.offset();

	outer_pagination.offset({ top: oc_top+270, left: as_offset.left-151 });
	outer_pagination_vertical.offset({ top: oc_top+601, left: as_offset.left+300 });

	keyboard_intro.offset({ top: oc_top+271, left: as_offset.left-150 });

	}
	
	change_slide_positions();




	var zoom = $( window ).width();
	$(window).resize(function() {
		var zoomNew = $( window ).width();

		if (zoom != zoomNew) {
			//alert (zoom);
			//alert (zoomNew);
			//change_slide_positions();
		}
	});




	$('.swiper-container-vertical-1 > .swiper-wrapper > .swiper-slide-active').click(function(){
		$(".swiper-pagination-switch:nth-child(1)").trigger('click');
	});
	$('.swiper-container-vertical-2 > .swiper-wrapper > .swiper-slide-active').click(function(){
		$(".swiper-pagination-switch:nth-child(2)").trigger('click');
	});
	$('.swiper-container-vertical-3 > .swiper-wrapper > .swiper-slide-active').click(function(){
		$(".swiper-pagination-switch:nth-child(3)").trigger('click');
	});
	$('.swiper-container-vertical-4 > .swiper-wrapper > .swiper-slide-active').click(function(){
		$(".swiper-pagination-switch:nth-child(4)").trigger('click');
	});
	$('.swiper-container-vertical-5 > .swiper-wrapper > .swiper-slide-active').click(function(){
		$(".swiper-pagination-switch:nth-child(5)").trigger('click');
	});
















});




