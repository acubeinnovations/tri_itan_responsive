$(function(){
		$('#prev').fadeTo( "fast", 0.2 );
		 $('.nav_up').fadeTo( "fast", 0.2 );
		$('.nav_down').fadeTo( "fast", 0.2 );
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
		  h_slide =horizontal_slide.activeIndex;
			if(h_slide==1){
			//$('#next').hide();
			//$('#prev').show();
			toggle_vertical_nav();
			$('#next').fadeTo('fast',0.2);
			$('#prev').fadeTo('fast',1);
			}else{
			//$('#next').show();
			//$('#prev').hide();
			 $('.nav_up').fadeTo( "fast", 0.2 );
			$('.nav_down').fadeTo( "fast", 0.2 );
			$('#next').fadeTo('fast',1);
			$('#prev').fadeTo('fast',0.2);
			}
		}
		
	});



	var vertical1 = new Swiper('.swiper-container-vertical-1',{
		centeredSlides: false,
		slidesPerView: 0,
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
		mode: 'vertical',
		onSlideChangeStart: function(swiper){
		  h_slide =horizontal_slide.activeIndex;
			if(h_slide==1){
			//$('#next').hide();
			//$('#prev').show();
			toggle_vertical_nav();
			
			}else{
			//$('#next').show();
			//$('#prev').hide();
			toggle_vertical_nav();
			
			}
		}
		});

		$('#next').click(function(){
		
		horizontal_slide.swipeNext();
		//$('#next').hide();
		//$('#prev').show();

		$('#next').fadeTo('fast',0.2);
		$('#prev').fadeTo('fast',1);

		});
		$('#prev').click(function(){
		
		horizontal_slide.swipePrev();
		//$('#next').show();
		//$('#prev').hide();
	
		$('#next').fadeTo('fast',1);
		$('#prev').fadeTo('fast',0.2);
		});
	
		
		$(document).keydown(function(e) {
			var code = (e.keyCode ? e.keyCode : e.which);
			if (code == 37) {
				horizontal_slide.swipePrev();
				//$('#next').show();
				//$('#prev').hide();
				
				$('#next').fadeTo('fast',1);
				$('#prev').fadeTo('fast',0.2);
			} else if (code == 39) {
				horizontal_slide.swipeNext();
				//$('#next').hide();
				//$('#prev').show();

				$('#next').fadeTo('fast',0.2);
				$('#prev').fadeTo('fast',1);
			}else if (code == 40) {
				v_slide =horizontal_slide.activeIndex + 1;
				switch(v_slide)
				{
				case 1:
				  
				case 2:
					toggle_vertical_nav();
				  vertical2.swipeNext();
				  break;
				
				}
			} else if (code == 38) {
				v_slide =horizontal_slide.activeIndex + 1;
				switch(v_slide)
				{
				case 1:
					
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
				case 1:
				  
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
				case 1:
				  
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
		function change_arrow_pos(){
		var window_height=$( window ).height();
		var hor_oc_top=window_height-642;
		$("#arrow_bg").css('top',hor_oc_top);
		var ver_oc_top=window_height-150;
		var ver_oc_left=708;
		$(".pagination-vertical").css('padding-top',ver_oc_top);
		$(".pagination-vertical").css('margin-left',ver_oc_left);
		
			
		}
		change_arrow_pos();
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
			change_arrow_pos();
		}
	});





















});




