$(function(){

		
change_slide();

				$('.nav_up').fadeTo( "fast", 0 );
				$('.nav_down').fadeTo( "fast", 0 );

	
		var horizontal_slide = new Swiper('.swiper-container-horizontal',{
		    calculateHeight: false,
		    cssWidthAndHeight: true,
			simulateTouch: false,
			centeredSlides: true,
			slidesPerView: 2,
			watchActiveIndex: true,
			keyboardControl: true,
			autoResize : false,	
			speed : 600,
			paginationClickable: true,
			onSlideChangeStart: function(swiper){
			  h_slide =horizontal_slide.activeIndex;
				if(h_slide==1){
				toggle_vertical_nav();
				}else{
				$('.nav_up').fadeTo( "fast", 0 );
				$('.nav_down').fadeTo( "fast", 0 );
				}
			},
			onSlideChangeEnd: function(swiper){

				reinit_v_slide();
			 	change_arrow_pos();
				
			},
			onSlideClick: function(swiper){
				if(swiper.clickedSlideIndex == 0){
			  		swiper.swipeTo(swiper.clickedSlideIndex);
				}
				if(vertical2.clickedSlideIndex == vertical2.activeIndex && swiper.clickedSlideIndex == 1){
			  		swiper.swipeTo(swiper.clickedSlideIndex);
				}


			}		
		});



		var vertical1 = new Swiper('.swiper-container-vertical-1',{
			cssWidthAndHeight: true,
			simulateTouch: false,
			centeredSlides: false,
			slidesPerView: 0,
			watchActiveIndex: true,
			autoResize : false,
			speed : 600,	
			mode: 'vertical',
			onSlideClick: function(swiper){
			  if(horizontal_slide.activeIndex == 0){
			  	swiper.swipeTo(swiper.clickedSlideIndex);
			  }
			}
			});

		var vertical2 = new Swiper('.swiper-container-vertical-2',{
			cssWidthAndHeight: true,
			simulateTouch: false,
			centeredSlides: true,
			slidesPerView: 3,
			watchActiveIndex: true,
			autoResize : false,
			speed : 600,	
			mode: 'vertical',
			onSlideChangeStart: function(swiper){
			  h_slide =horizontal_slide.activeIndex;
				if(h_slide==1){
					toggle_vertical_nav();
				}else{
					toggle_vertical_nav();
				}
			},
			onSlideClick: function(swiper){
			  if(horizontal_slide.activeIndex == 1){
			  	swiper.swipeTo(swiper.clickedSlideIndex);
			  }
			}
			});
		




		$('#next').click(function(){
			horizontal_slide.swipeNext();
			$('#next').fadeTo('fast',0.2);
			$('#prev').fadeTo('fast',1);
		});
		$('#prev').click(function(){
			horizontal_slide.swipePrev();
			$('#next').fadeTo('fast',1);
			$('#prev').fadeTo('fast',0.2);
		});
	
		
		$(document).keydown(function(e) {
			var code = (e.keyCode ? e.keyCode : e.which);
			if (code == 37) {
				horizontal_slide.swipePrev();
				$('#next').fadeTo('fast',1);
				$('#prev').fadeTo('fast',0.2);
			} else if (code == 39) {
				horizontal_slide.swipeNext();
				$('#next').fadeTo('fast',0.2);
				$('#prev').fadeTo('fast',1);
			}else if (code == 40) {
				v_slide =horizontal_slide.activeIndex + 1;
				switch(v_slide)
				{
				case 1:break;
				  
				case 2:
					toggle_vertical_nav();
				  vertical2.swipeNext();
				  break;
				
				}
			} else if (code == 38) {
				v_slide =horizontal_slide.activeIndex + 1;
				switch(v_slide)
				{
				case 1:break;
					
				case 2:
					toggle_vertical_nav();
				 	vertical2.swipePrev();
					break;
				
				}
			}


		});



		$('.nav_up').click(function(){
				v_slide =horizontal_slide.activeIndex + 1;
				switch(v_slide)
				{
				case 1:break;
				  
				case 2:
					toggle_vertical_nav();
				  	vertical2.swipePrev();
				  break;
				
				}

		});

		$('.nav_down').click(function(){
				v_slide =horizontal_slide.activeIndex + 1;
				switch(v_slide)
				{
				case 1:break;
				  
				case 2:
					toggle_vertical_nav();
					vertical2.swipeNext();
				  break;
				
				}
		});



		function toggle_vertical_nav(){
			v_slide =horizontal_slide.activeIndex + 1;
			v_slide_acive = 1;
			switch(v_slide)
			{
			case 1:
			  	$('.nav_up').fadeTo( "fast", 0.2 );
				$('.nav_down').fadeTo( "fast", 0.2 );
			  break;
			case 2:
			  v_slide_acive = vertical2.activeIndex + 1;
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

		
		function change_arrow_pos(){
			var swiper_nav = $("#swiper_nav");
			var swiper_nav_left = $(".swiper-container-vertical-2").offset().left + $(".swiper-container-vertical-2").width()+1;
			var swiper_nav_top = $(".vertical-single-slide").offset().top;
			swiper_nav.offset({ top: swiper_nav_top, left: swiper_nav_left });
		}
		change_arrow_pos();
	
	
	var zoom = $( window ).width();
	
	$(window).resize(function() {
		var zoomNew = $( window ).width();

		if (zoom != zoomNew) {
			change_slide();	
							
			change_arrow_pos();
			
		}
	});



	function change_slide(){

	var slide_width = 572;
	var slide_height = $(window).height()-152;
		if(slide_height > 724){
			//$(".swiper-container-horizontal").css("bottom","-420px");
			slide_height = 572;
			container_top = (-1*(slide_height))+($(window).height()-slide_height) -151;
		}else{
			container_top = -1*(slide_height-1);
		}

		var horizontal_container_width =  slide_width * 2;
		var horizontal_container_height =  slide_height * 3;
		var inner_height =  slide_height * 3;

		$(".swiper-container-horizontal").css("min-width",horizontal_container_width+"px");
		$(".swiper-container-horizontal").css("height",horizontal_container_height+"px");

		$(".swiper-slide-horizontal").css("min-width",slide_width+"px");
		$(".swiper-slide-horizontal").css("height",horizontal_container_height+"px");

		$(".swiper-slide-vertical").css("min-width",slide_width+"px");
		$(".swiper-slide-vertical").css("height",slide_height+"px");

		$(".inner").css("height",inner_height+"px");
		$(".inner").css("width",slide_width+"px");

		$(".horizontal-single-slide").css("padding-top",(slide_height)+"px");

		$(".inner-vertical").css("width",slide_width+"px");
		$(".inner-vertical").css("height",(slide_height-1)+"px");
		$(".vertical-single-slide").css("height",(slide_height-1)+"px");

		$(".swiper-container-horizontal").offset({top:container_top});
		}
	
	function reinit_v_slide(){
			v_slide =horizontal_slide.activeIndex + 1;

			v2_slide_acive = vertical2.activeIndex;

			switch(v_slide)
			{

			case 2:
					
			   v2(true,v2_slide_acive);
					
			  break;
			default:
				v2(false,v2_slide_acive);
			  break;
			}
		}

	function v2(simulateTouch,ini_slide){

		vertical2.destroy(true) ;
		$('.swiper-container-vertical-2').find('*').removeAttr("style");
		change_slide();
		vertical2 = new Swiper('.swiper-container-vertical-2',{
			centeredSlides: true,
			slidesPerView: 3,
			watchActiveIndex: true,
			simulateTouch: simulateTouch,
			initialSlide: ini_slide,
			autoResize : true,
			speed : 600,	
			mode: 'vertical',
			noSwiping: true,
			onSlideChangeEnd: function(swiper){
			  toggle_vertical_nav();
			},
			onSlideClick: function(swiper){
			  if(horizontal_slide.activeIndex == 0){
			  	swiper.swipeTo(swiper.clickedSlideIndex);
			  }
			}
			});
	}


		

});




