$(function(){
var zoom = $( window ).width();
function change_copyright_pos(){
window_width=$( window ).width();
if(window_width<1095){
$('.copy').html("&copy Copyright 2013");
}else{
$('.copy').html("&copy Copyright 2013 Itan Jewels DMCC. All rights reserved.");
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


