$(function(){ 
	function change_map_pos(){	
	window_width=$(window).width();
	window_height=$(window).height();
	map_width=window_width/2;
	
	if(window_height==692){
		map_height=window_height-171;
		$('#address-container').css('top',map_height);
		$('#address-container').css('width',window_width-150);
		$('#map').css('width',map_width);
		$('#map1').css('width',map_width);
		$('#map').css('height',map_height-2);
		$('#map1').css('height',map_height-2);
	}else{
		map_height=window_height-152;
		$('#map').css('width',map_width);
		$('#map1').css('width',map_width);
		$('#map').css('height',map_height);
		$('#map1').css('height',map_height);
		$('#address-container').css('top',map_height);
	}//alert(window_width);
	if(window_width>=768){
	$('#address-container').css('width',window_width-150);
	$('#address-container').css('padding-left',150);
	$('#address-table').css('width',window_width-152);
	$('#address-dubai').css('width',map_width-152);
	$('#address-mumbai').css('width',map_width);
	}else{
	$('#address-container').css('padding-left',0);
	$('#address-container').css('width',window_width-150);
	$('#address-table').css('width',window_width);
	$('#address-dubai').css('width',map_width);
	$('#address-mumbai').css('width',map_width);
	}
	
	}
	change_map_pos();
	var border_color=$('body').css("background-color");
	$('.td-class').css('border-left','1px solid '+border_color);
	var zoom = $( window ).width();
	$(window).resize(function() {
		var zoomNew = $( window ).width();

		if (zoom != zoomNew) {
			
			change_map_pos();
		}
	});
		
	});
