$(function(){
var zoom = $( window ).width();
function change_copyright_pos(){
window_width=$( window ).width();

if(window_width<890){
$('.copy').html("");
}else if(window_width>890 && window_width<1095){
$('.copy').html("&copy Copyright 2014");
}else if(window_width>1095 && window_width<1152){
$('.copy').html("&copy Copyright 2014 &nbsp;Itan Jewels DMCC.");	
}
else{
$('.copy').html("&copy Copyright 2014 Itan Jewels DMCC. All rights reserved.");
}

}
change_copyright_pos();


	$(window).resize(function() {
		var zoomNew = $( window ).width();

		if (zoom != zoomNew) {
			//alert (zoom);
			//alert (zoomNew);
			change_copyright_pos();
		}
	});
		



});


