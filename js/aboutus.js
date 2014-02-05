$(document).ready(function(){

		var isiPad = /ipad/i.test(navigator.userAgent.toLowerCase());
		var window_width_ipad=$(window).width();
		var window_height_ipad=$(window).height();
		if (window_width_ipad<='1024' && window_height_ipad<='768')
		{
		var slide_width=window_width_ipad;
		var window_height=$(window).height();
		var logo_height=$('#logo').height();
		var arrow_height=$('#arrow_bg').height();
		var slide_hieght=window_height-(190)+9;
		var h=slide_hieght;
		
		$('#dates li a').css("height",slide_hieght);h=h+30;
		$('#dates').css("height",h);
		$('#dates li a').css("width",slide_width);
		$('#dates').css("width",slide_width);
		$('#timeline').css("margin-left",194);
		var slide_img_width=(slide_width*20)/100;
		var slide_content_width=(slide_width*60)/100;
		var slide_content_margin_left=slide_content_width-(slide_content_width*52)/100;
		$('.slide-content-div').css("margin-left",slide_content_margin_left);
		$('.slide-img-div').css("width",slide_img_width);
		$('.slide-img-div').css("padding-left",'15');
		$('.slide-content-div').css("width",slide_content_width);
		$('.slide-img-div').css("height",slide_hieght);
		$('.slide-content-div').css("height",slide_hieght);
		var slide_img_reponsive_width=slide_img_width+10;
		var slide_img_reponsive_hieght=slide_hieght-80;
		var slide_content_reponsive_width=slide_content_width;
		var slide_content_reponsive_hieght=slide_hieght-80;
		$('.slide-img').css("width",slide_img_reponsive_width);
		$('.slide-img').css("height",slide_img_reponsive_hieght);
		$('.slide-content').css("width",slide_content_reponsive_width);
		$('.slide-content').css("height",slide_content_reponsive_hieght);
		var preferredWidth = 1024;
		var slide_content_font_size=$('.slide-content').css("font-size");
		var displayWidth = window.innerWidth;
		var percentage = displayWidth / preferredWidth;
		var slide_title_font_size = 25;
		var slide_title_responsive_font_size = Math.floor(slide_title_font_size * percentage);
		var slide_content_responsive_font_size = Math.floor(slide_content_font_size * percentage);
		$('.slide-content').css("font-size",slide_content_responsive_font_size);
		$('.slide-title').css("font-size",slide_title_responsive_font_size);
		  
		}else{

		var logo_width=$('#logo').width();
		var logo_height=$('#logo').height();
		var arrow_width=$('#arrow_bg').width();
		var arrow_height=$('#arrow_bg').height();
		var window_height=$(document).height();
		var window_width=$("#timeline").width();
		var slide_width=window_width-(305);
		var slide_hieght=window_height-(190)+9;
		var h=slide_hieght;
		$('#dates li a').css("height",slide_hieght);h=h+30;
		$('#dates').css("height",h);
		$('#dates li a').css("width",slide_width);
		$('#dates').css("width",slide_width);
		var slide_img_width=(slide_width*20)/100;
		var slide_content_width=(slide_width*60)/100;
		$('.slide-img-div').css("width",slide_img_width);
		$('.slide-content-div').css("width",slide_content_width);
		var slide_content_margin_left=slide_content_width-(slide_content_width*40)/100;
		$('.slide-content-div').css("margin-left",slide_content_margin_left);
		$('.slide-img-div').css("height",slide_hieght);
		$('.slide-content-div').css("height",slide_hieght);
		var slide_img_reponsive_width=slide_img_width+50;
		var slide_img_reponsive_hieght=slide_hieght-80;
		var slide_content_reponsive_width=slide_content_width;
		var slide_content_reponsive_hieght=slide_hieght-80;
		$('.slide-img').css("width",slide_img_reponsive_width);
		$('.slide-img').css("height",slide_img_reponsive_hieght);
		$('.slide-content').css("width",slide_content_reponsive_width);
		$('.slide-content').css("height",slide_content_reponsive_hieght);
		var preferredWidth = 1024;
		var slide_content_font_size=$('.slide-content').css("font-size");
		var displayWidth = window.innerWidth;
		var percentage = displayWidth / preferredWidth;
		var slide_title_font_size = 25;
		var slide_title_responsive_font_size = Math.floor(slide_title_font_size * percentage);
		var slide_content_responsive_font_size = Math.floor(slide_content_font_size * percentage);
		$('.slide-content').css("font-size",slide_content_responsive_font_size);
		$('.slide-title').css("font-size",slide_title_responsive_font_size);
		}
		
		
			



		$(window).resize(function(){
		var isiPad = /ipad/i.test(navigator.userAgent.toLowerCase());
		var window_width_ipad=$(window).width();
		var window_height_ipad=$(window).height();
		if (window_width_ipad<='1024' && window_height_ipad<='768')
		{
		var slide_width=window_width_ipad;
		var window_height=$(window).height();
		var logo_height=$('#logo').height();
		var arrow_height=$('#arrow_bg').height();
		var slide_hieght=window_height-(190)+9;
		var h=slide_hieght;
		
		$('#dates li a').css("height",slide_hieght);h=h+30;
		$('#dates').css("height",h);
		$('#dates li a').css("width",slide_width);
		$('#dates').css("width",slide_width);
		$('#timeline').css("margin-left",194);
		var slide_img_width=(slide_width*20)/100;
		var slide_content_width=(slide_width*60)/100;
		var slide_content_margin_left=slide_content_width-(slide_content_width*52)/100;
		$('.slide-content-div').css("margin-left",slide_content_margin_left);
		$('.slide-img-div').css("width",slide_img_width);
		$('.slide-img-div').css("padding-left",'15');
		$('.slide-content-div').css("width",slide_content_width);
		$('.slide-img-div').css("height",slide_hieght);
		$('.slide-content-div').css("height",slide_hieght);
		var slide_img_reponsive_width=slide_img_width+10;
		var slide_img_reponsive_hieght=slide_hieght-80;
		var slide_content_reponsive_width=slide_content_width;
		var slide_content_reponsive_hieght=slide_hieght-80;
		$('.slide-img').css("width",slide_img_reponsive_width);
		$('.slide-img').css("height",slide_img_reponsive_hieght);
		$('.slide-content').css("width",slide_content_reponsive_width);
		$('.slide-content').css("height",slide_content_reponsive_hieght);
		var preferredWidth = 1024;
		var slide_content_font_size=$('.slide-content').css("font-size");
		var displayWidth = window.innerWidth;
		var percentage = displayWidth / preferredWidth;
		var slide_title_font_size = 25;
		var slide_title_responsive_font_size = Math.floor(slide_title_font_size * percentage);
		var slide_content_responsive_font_size = Math.floor(slide_content_font_size * percentage);
		$('.slide-content').css("font-size",slide_content_responsive_font_size);
		$('.slide-title').css("font-size",slide_title_responsive_font_size);
		  
		}else{

		var logo_width=$('#logo').width();
		var logo_height=$('#logo').height();
		var arrow_width=$('#arrow_bg').width();
		var arrow_height=$('#arrow_bg').height();
		var window_height=$(document).height();
		var window_width=$("#timeline").width();
		var slide_width=window_width-(305);
		var slide_hieght=window_height-(190)+9;
		var h=slide_hieght;
		$('#dates li a').css("height",slide_hieght);h=h+30;
		$('#dates').css("height",h);
		$('#dates li a').css("width",slide_width);
		$('#dates').css("width",slide_width);
		var slide_img_width=(slide_width*20)/100;
		var slide_content_width=(slide_width*60)/100;
		$('.slide-img-div').css("width",slide_img_width);
		$('.slide-content-div').css("width",slide_content_width);
		var slide_content_margin_left=slide_content_width-(slide_content_width*40)/100;
		$('.slide-content-div').css("margin-left",slide_content_margin_left);
		$('.slide-img-div').css("height",slide_hieght);
		$('.slide-content-div').css("height",slide_hieght);
		var slide_img_reponsive_width=slide_img_width+50;
		var slide_img_reponsive_hieght=slide_hieght-80;
		var slide_content_reponsive_width=slide_content_width;
		var slide_content_reponsive_hieght=slide_hieght-80;
		$('.slide-img').css("width",slide_img_reponsive_width);
		$('.slide-img').css("height",slide_img_reponsive_hieght);
		$('.slide-content').css("width",slide_content_reponsive_width);
		$('.slide-content').css("height",slide_content_reponsive_hieght);
		var preferredWidth = 1024;
		var slide_content_font_size=$('.slide-content').css("font-size");
		var displayWidth = window.innerWidth;
		var percentage = displayWidth / preferredWidth;
		var slide_title_font_size = 25;
		var slide_title_responsive_font_size = Math.floor(slide_title_font_size * percentage);
		var slide_content_responsive_font_size = Math.floor(slide_content_font_size * percentage);
		$('.slide-content').css("font-size",slide_content_responsive_font_size);
		$('.slide-title').css("font-size",slide_title_responsive_font_size);
		}
		});


		$('html').bind('mousewheel', function (event, delta) {
               window.parent.scrollBy(-120 * delta, 0);
               return false;
           });
         
           $(window).bind('mousewheel DOMMouseScroll', function (event) {
             
               if (event.ctrlKey == true) {
                   event.preventDefault();
               }
           });
           $(document).keydown(function (event) {
                                       
              if (event.ctrlKey == true || event.which == '17'){
                               
                                                                               
                        event.preventDefault();

            }                        
             
          });
               
		});
