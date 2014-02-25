$(function(){
var v1_slide_acive = 0;
var v2_slide_acive = 0;
var v3_slide_acive = 0;
var v4_slide_acive = 0;
var v5_slide_acive = 0;

	var horizontal_slide = new Swiper('.swiper-container-horizontal',{
        calculateHeight: false,
        cssWidthAndHeight: false,
		pagination:'.pagination',
		simulateTouch: false,
		centeredSlides: true,
		slidesPerView: 5,
		watchActiveIndex: true,
		keyboardControl: true,
		autoResize : false,	
		speed : 600,	
		paginationClickable: true,
		onSlideChangeEnd: function(swiper){
		  toggle_vertical_nav();
		  reinit_v_slide();
		},
		onSlideClick: function(swiper){
			if(vertical1.clickedSlideIndex == vertical1.activeIndex && swiper.clickedSlideIndex == 0){
		  		swiper.swipeTo(swiper.clickedSlideIndex);
			}
			if(vertical2.clickedSlideIndex == vertical2.activeIndex && swiper.clickedSlideIndex == 1){
		  		swiper.swipeTo(swiper.clickedSlideIndex);
			}
			if(vertical3.clickedSlideIndex == vertical3.activeIndex && swiper.clickedSlideIndex == 2){
		  		swiper.swipeTo(swiper.clickedSlideIndex);
			}
			if(vertical4.clickedSlideIndex == vertical4.activeIndex && swiper.clickedSlideIndex == 3){
		  		swiper.swipeTo(swiper.clickedSlideIndex);
			}
			if(vertical5.clickedSlideIndex == vertical5.activeIndex && swiper.clickedSlideIndex == 4){
		  		swiper.swipeTo(swiper.clickedSlideIndex);
			}

		}
		
	});



	var vertical1 = new Swiper('.swiper-container-vertical-1',{
		centeredSlides: true,
		slidesPerView: 3,
		watchActiveIndex: true,
		simulateTouch: false,
		autoResize : false,
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

	var vertical2 = new Swiper('.swiper-container-vertical-2',{
		centeredSlides: true,
		slidesPerView: 3,
		watchActiveIndex: true,
		simulateTouch: false,
		autoResize : false,
		speed : 600,	
		mode: 'vertical',
		noSwiping: true,
		onSlideChangeEnd: function(swiper){
		  toggle_vertical_nav();
		},
		onSlideClick: function(swiper){
		  if(horizontal_slide.activeIndex == 1){
		  	swiper.swipeTo(swiper.clickedSlideIndex);
		  }
		}
		});

	var vertical3 = new Swiper('.swiper-container-vertical-3',{
		centeredSlides: true,
		slidesPerView: 3,
		watchActiveIndex: true,
		simulateTouch: false,
		autoResize : false,
		speed : 600,	
		mode: 'vertical',
		noSwiping: true,
		onSlideChangeEnd: function(swiper){
		  toggle_vertical_nav();
		},
		onSlideClick: function(swiper){
		  if(horizontal_slide.activeIndex == 2){
		  	swiper.swipeTo(swiper.clickedSlideIndex);
		  }
		}
		});



	var vertical4 = new Swiper('.swiper-container-vertical-4',{
		centeredSlides: true,
		slidesPerView: 3,
		watchActiveIndex: true,
		simulateTouch: false,
		autoResize : false,
		speed: 600,	
		mode: 'vertical',
		noSwiping: true,
		onSlideChangeEnd: function(swiper){
		  toggle_vertical_nav();
		},
		onSlideClick: function(swiper){
		  if(horizontal_slide.activeIndex == 3){
		  	swiper.swipeTo(swiper.clickedSlideIndex);
		  }
		}
		});


	var vertical5 = new Swiper('.swiper-container-vertical-5',{
		centeredSlides: true,
		slidesPerView: 3,
		watchActiveIndex: true,
		simulateTouch: false,
		autoResize : false,
		speed: 600,	
		mode: 'vertical',
		noSwiping: true,
		onSlideChangeEnd: function(swiper){
		  toggle_vertical_nav();
		},
		onSlideClick: function(swiper){
		  if(horizontal_slide.activeIndex == 4){
		  	swiper.swipeTo(swiper.clickedSlideIndex);
		  }
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
				vs_active = vertical1.activeIndex+1;
				switch(vs_active)
				{
				case 1:
					$('.swiper-container-vertical-1 > .swiper-wrapper > .swiper-slide:nth-child(1)').css("opacity","1");
					$('.swiper-container-vertical-1 > .swiper-wrapper > .swiper-slide:nth-child(2)').css("opacity",".8");
					$('.swiper-container-vertical-1 > .swiper-wrapper > .swiper-slide:nth-child(3)').css("opacity",".6");
					break;
				case 2:
					$('.swiper-container-vertical-1 > .swiper-wrapper > .swiper-slide:nth-child(1)').css("opacity",".8");
					$('.swiper-container-vertical-1 > .swiper-wrapper > .swiper-slide:nth-child(2)').css("opacity","1");
					$('.swiper-container-vertical-1 > .swiper-wrapper > .swiper-slide:nth-child(3)').css("opacity",".8");
					break;
				case 3:
					$('.swiper-container-vertical-1 > .swiper-wrapper > .swiper-slide:nth-child(1)').css("opacity",".6");
					$('.swiper-container-vertical-1 > .swiper-wrapper > .swiper-slide:nth-child(2)').css("opacity",".8");
					$('.swiper-container-vertical-1 > .swiper-wrapper > .swiper-slide:nth-child(3)').css("opacity","1");
					break;
				}

			  break;
			case 2:
			  	$('.swiper-container-vertical-1 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity",".8");
				$('.swiper-container-vertical-2 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity","1");
				$('.swiper-container-vertical-3 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity",".8");
				$('.swiper-container-vertical-4 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity",".6");
				$('.swiper-container-vertical-5 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity",".4");

				vs_active = vertical2.activeIndex+1;
				switch(vs_active)
				{
				case 1:
					$('.swiper-container-vertical-2 > .swiper-wrapper > .swiper-slide:nth-child(1)').css("opacity","1");
					$('.swiper-container-vertical-2 > .swiper-wrapper > .swiper-slide:nth-child(2)').css("opacity",".8");
					$('.swiper-container-vertical-2 > .swiper-wrapper > .swiper-slide:nth-child(3)').css("opacity",".6");
					break;
				case 2:
					$('.swiper-container-vertical-2 > .swiper-wrapper > .swiper-slide:nth-child(1)').css("opacity",".8");
					$('.swiper-container-vertical-2 > .swiper-wrapper > .swiper-slide:nth-child(2)').css("opacity","1");
					$('.swiper-container-vertical-2 > .swiper-wrapper > .swiper-slide:nth-child(3)').css("opacity",".8");
					break;
				case 3:
					$('.swiper-container-vertical-2 > .swiper-wrapper > .swiper-slide:nth-child(1)').css("opacity",".6");
					$('.swiper-container-vertical-2 > .swiper-wrapper > .swiper-slide:nth-child(2)').css("opacity",".8");
					$('.swiper-container-vertical-2 > .swiper-wrapper > .swiper-slide:nth-child(3)').css("opacity","1");
					break;
				}
			  break;
			case 3:
			  	$('.swiper-container-vertical-1 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity",".6");
				$('.swiper-container-vertical-2 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity",".8");
				$('.swiper-container-vertical-3 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity","1");
				$('.swiper-container-vertical-4 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity",".8");
				$('.swiper-container-vertical-5 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity",".6");
				vs_active = vertical3.activeIndex+1;
				switch(vs_active)
				{
				case 1:
					$('.swiper-container-vertical-3 > .swiper-wrapper > .swiper-slide:nth-child(1)').css("opacity","1");
					$('.swiper-container-vertical-3 > .swiper-wrapper > .swiper-slide:nth-child(2)').css("opacity",".8");
					$('.swiper-container-vertical-3 > .swiper-wrapper > .swiper-slide:nth-child(3)').css("opacity",".6");
					break;
				case 2:
					$('.swiper-container-vertical-3 > .swiper-wrapper > .swiper-slide:nth-child(1)').css("opacity",".8");
					$('.swiper-container-vertical-3 > .swiper-wrapper > .swiper-slide:nth-child(2)').css("opacity","1");
					$('.swiper-container-vertical-3 > .swiper-wrapper > .swiper-slide:nth-child(3)').css("opacity",".8");
					break;
				case 3:
					$('.swiper-container-vertical-3 > .swiper-wrapper > .swiper-slide:nth-child(1)').css("opacity",".6");
					$('.swiper-container-vertical-3 > .swiper-wrapper > .swiper-slide:nth-child(2)').css("opacity",".8");
					$('.swiper-container-vertical-3 > .swiper-wrapper > .swiper-slide:nth-child(3)').css("opacity","1");
					break;
				}
			  break;
			case 4:
			  	$('.swiper-container-vertical-1 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity",".4");
				$('.swiper-container-vertical-2 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity",".6");
				$('.swiper-container-vertical-3 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity",".8");
				$('.swiper-container-vertical-4 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity","1");
				$('.swiper-container-vertical-5 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity",".8");
				vs_active = vertical4.activeIndex+1;
				switch(vs_active)
				{
				case 1:
					$('.swiper-container-vertical-4 > .swiper-wrapper > .swiper-slide:nth-child(1)').css("opacity","1");
					$('.swiper-container-vertical-4 > .swiper-wrapper > .swiper-slide:nth-child(2)').css("opacity",".8");
					$('.swiper-container-vertical-4 > .swiper-wrapper > .swiper-slide:nth-child(3)').css("opacity",".6");
					break;
				case 2:
					$('.swiper-container-vertical-4 > .swiper-wrapper > .swiper-slide:nth-child(1)').css("opacity",".8");
					$('.swiper-container-vertical-4 > .swiper-wrapper > .swiper-slide:nth-child(2)').css("opacity","1");
					$('.swiper-container-vertical-4 > .swiper-wrapper > .swiper-slide:nth-child(3)').css("opacity",".8");
					break;
				case 3:
					$('.swiper-container-vertical-4 > .swiper-wrapper > .swiper-slide:nth-child(1)').css("opacity",".6");
					$('.swiper-container-vertical-4 > .swiper-wrapper > .swiper-slide:nth-child(2)').css("opacity",".8");
					$('.swiper-container-vertical-4 > .swiper-wrapper > .swiper-slide:nth-child(3)').css("opacity","1");
					break;
				}
			  break;
			case 5:
			  	$('.swiper-container-vertical-1 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity",".2");
				$('.swiper-container-vertical-2 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity",".4");
				$('.swiper-container-vertical-3 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity",".6");
				$('.swiper-container-vertical-4 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity",".8");
				$('.swiper-container-vertical-5 > .swiper-wrapper > .swiper-slide-active >.inner-vertical').css("opacity","1");
				vs_active = vertical5.activeIndex+1;
				switch(vs_active)
				{
				case 1:
					$('.swiper-container-vertical-5 > .swiper-wrapper > .swiper-slide:nth-child(1)').css("opacity","1");
					$('.swiper-container-vertical-5 > .swiper-wrapper > .swiper-slide:nth-child(2)').css("opacity",".8");
					$('.swiper-container-vertical-5 > .swiper-wrapper > .swiper-slide:nth-child(3)').css("opacity",".6");
					break;
				case 2:
					$('.swiper-container-vertical-5 > .swiper-wrapper > .swiper-slide:nth-child(1)').css("opacity",".8");
					$('.swiper-container-vertical-5 > .swiper-wrapper > .swiper-slide:nth-child(2)').css("opacity","1");
					$('.swiper-container-vertical-5 > .swiper-wrapper > .swiper-slide:nth-child(3)').css("opacity",".8");
					break;
				case 3:
					$('.swiper-container-vertical-5 > .swiper-wrapper > .swiper-slide:nth-child(1)').css("opacity",".6");
					$('.swiper-container-vertical-5 > .swiper-wrapper > .swiper-slide:nth-child(2)').css("opacity",".8");
					$('.swiper-container-vertical-5 > .swiper-wrapper > .swiper-slide:nth-child(3)').css("opacity","1");
					break;
				}
			  break;
			}

		}



	function reinit_v_slide(){

			switch(v_slide)
			{
			case 1:
			  v1_slide_acive = vertical1.activeIndex;
					v1(true,v1_slide_acive);
					v2(false,v2_slide_acive);
					v3(false,v3_slide_acive);
					v4(false,v4_slide_acive);
					v5(false,v5_slide_acive);
			  break;
			case 2:
			  v2_slide_acive = vertical2.activeIndex;
					v1(false,v1_slide_acive);
					v2(true,v2_slide_acive);
					v3(false,v3_slide_acive);
					v4(false,v4_slide_acive);
					v5(false,v5_slide_acive);
			  break;
			case 3:
			  v3_slide_acive = vertical3.activeIndex;
					v1(false,v1_slide_acive);
					v2(false,v2_slide_acive);
					v3(true,v3_slide_acive);
					v4(false,v4_slide_acive);
					v5(false,v5_slide_acive);
			  break;
			case 4:
			  v4_slide_acive = vertical4.activeIndex;
					v1(false,v1_slide_acive);
					v2(false,v2_slide_acive);
					v3(false,v3_slide_acive);
					v4(true,v4_slide_acive);
					v5(false,v5_slide_acive);
			  break;
			case 5:
			  v5_slide_acive = vertical5.activeIndex;
					v1(false,v1_slide_acive);
					v2(false,v2_slide_acive);
					v3(false,v3_slide_acive);
					v4(false,v4_slide_acive);
					v5(true,v5_slide_acive);
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
	//alert(oc_left);
	//alert(oc_top);

	oc_top = ((window_height-50)/2)-450;
	outer_container.offset({ top: oc_top, left: oc_left });
	var active_slide = $(".swiper-slide-active>.inner");
	as_offset = active_slide.offset();
	var keyboard_intro = $("#keyboard-intro-home");
	kb_intro_offset = keyboard_intro.offset();

	outer_pagination.offset({ top: oc_top+272, left: as_offset.left-151 });
	outer_pagination_vertical.offset({ top: oc_top+605, left: as_offset.left+302 });
	keyboard_intro.offset({ top: oc_top+272, left: as_offset.left-151 });


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




function v1(simulateTouch,ini_slide){

	vertical1.destroy(true) ;
	$('.swiper-container-vertical-1').find('*').removeAttr("style");
	vertical1 = new Swiper('.swiper-container-vertical-1',{
		centeredSlides: true,
		slidesPerView: 3,
		watchActiveIndex: true,
		simulateTouch: simulateTouch,
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
	vertical1.swipeTo(ini_slide);	
}

function v2(simulateTouch,ini_slide){

	vertical2.destroy(true) ;
	$('.swiper-container-vertical-2').find('*').removeAttr("style");
	vertical2 = new Swiper('.swiper-container-vertical-2',{
		centeredSlides: true,
		slidesPerView: 3,
		watchActiveIndex: true,
		simulateTouch: simulateTouch,
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
	vertical2.swipeTo(ini_slide);
}



function v3(simulateTouch,ini_slide){

	vertical3.destroy(true) ;
	$('.swiper-container-vertical-3').find('*').removeAttr("style");
	vertical3 = new Swiper('.swiper-container-vertical-3',{
		centeredSlides: true,
		slidesPerView: 3,
		watchActiveIndex: true,
		simulateTouch: simulateTouch,
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
	vertical3.swipeTo(ini_slide);
}


function v4(simulateTouch,ini_slide){

	vertical4.destroy(true) ;
	$('.swiper-container-vertical-4').find('*').removeAttr("style");
	vertical4 = new Swiper('.swiper-container-vertical-4',{
		centeredSlides: true,
		slidesPerView: 3,
		watchActiveIndex: true,
		simulateTouch: simulateTouch,
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
		vertical4.swipeTo(ini_slide);
}


function v5(simulateTouch,ini_slide){

	vertical5.destroy(true) ;
	$('.swiper-container-vertical-5').find('*').removeAttr("style");
	vertical5 = new Swiper('.swiper-container-vertical-5',{
		centeredSlides: true,
		slidesPerView: 3,
		watchActiveIndex: true,
		simulateTouch: simulateTouch,
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
		vertical5.swipeTo(ini_slide);

}




});




