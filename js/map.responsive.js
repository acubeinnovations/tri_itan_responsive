$(function(){ 
	function change_map_pos(){	
	window_width=$(window).width();
	window_height=$(window).height();
	map_width=window_width/2;
	map_height=window_height-150;
	$('#map').css('width',map_width);
	$('#map1').css('width',map_width);
	$('#map').css('height',map_height);
	$('#map1').css('height',map_height);
	$('#address-container').css('top',map_height);
	if(window_width>=768){
	$('#address-container').css('padding-left',150);
	$('#address-table').css('width',window_width-160);
	$('#address-dubai').css('width',map_width-150);
	$('#address-mumbai').css('width',map_width-10);
	}else{
	$('#address-container').css('padding-left',0);
	$('#address-table').css('width',window_width);
	$('#address-dubai').css('width',map_width);
	$('#address-mumbai').css('width',map_width);
	}
	}
	change_map_pos();

	var zoom = $( window ).width();
	$(window).resize(function() {
		var zoomNew = $( window ).width();

		if (zoom != zoomNew) {
			
			change_map_pos();
		}
	});
		
	});
