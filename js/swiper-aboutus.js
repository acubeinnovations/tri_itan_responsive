$(function(){
		$('#prev').hide();
	var horizontal_slide = new Swiper('.swiper-container-horizontal',{
        calculateHeight: false,
        cssWidthAndHeight: false,
		pagination:'.pagination',
		centeredSlides: true,
		slidesPerView: 2,
		watchActiveIndex: true,
		keyboardControl: true,
		autoResize : false,	
		speed : 600,	
		paginationClickable: true,
		onSlideChangeStart: function(swiper){
		  v_slide =horizontal_slide.activeIndex;
			if(v_slide==1){
			$('#next').hide();
			$('#prev').show();
			}else{
			$('#next').show();
			$('#prev').hide();
			}
		}
		
	});



	var vertical1 = new Swiper('.swiper-container-vertical-1',{
		centeredSlides: false,
		slidesPerView: 1,
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

		$('#next').click(function(){
		
		horizontal_slide.swipeNext();
		$('#next').hide();
		$('#prev').show();

		});
		$('#prev').click(function(){
		
		horizontal_slide.swipePrev();
		$('#next').show();
		$('#prev').hide();
		});
	
		
		$(document).keydown(function(e) {
			var code = (e.keyCode ? e.keyCode : e.which);
			if (code == 37) {
				horizontal_slide.swipePrev();
				$('#next').show();
				$('#prev').hide();
			} else if (code == 39) {
				horizontal_slide.swipeNext();
				$('#next').hide();
				$('#prev').show();
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
				
				}
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
				
				}
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
				}

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
				}
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
		window_width=$( window ).width();
		window_height=$( window ).height();
		inner_vertical_slide_height=window_height-190;
		inner_vertical_slide_width=window_width+100;
		$(".inner-vertical").css('width',inner_vertical_slide_width/2);
		$(".inner-vertical").css('height',inner_vertical_slide_height);
		$(".swiper-slide").css('height',inner_vertical_slide_height);
		$('.swiper-container-horizontal').css('width',inner_vertical_slide_width);
		
		$('.swiper-slide-active').css('width',inner_vertical_slide_width/2);
		$('.inner').css('width',inner_vertical_slide_width/2);
		$('.swiper-container-vertical-1').css('width',inner_vertical_slide_width/2);
		$(".swiper-wrapper").removeAttr('width');
		
		$(".swiper-wrapper").removeAttr('padding-left');
		$(".swiper-wrapper").removeAttr('padding-rigth');
		$(".swiper-slide").removeAttr('width');
		$(".swiper-slide").css('width',inner_vertical_slide_width/2);
	}

	//change_slide_positions();
	var zoom = $( window ).width();
	$(window).resize(function() {
		var zoomNew = $( window ).width();

		if (zoom != zoomNew) {
			//alert (zoom);
			//alert (zoomNew);
			//change_slide_positions();
		}
	});





















});




