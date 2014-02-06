

var main = {
	init: function() {
		$.fn.hoverscroll.params = $.extend($.fn.hoverscroll.params, {
			debug: true
		});
		
		var window_width = $(window).width();
		var window_height = $(window).height();
		
		$('#my-horizontal-list, #my-list').hoverscroll({
			width: window_width+80,
			height: 780,
            fixedArrows: true
		});
		$('#my-vertical-list').hoverscroll({
			vertical: true,
			width: 1600,
			height: window_height+90,
            fixedArrows: true
		});
//        $("#my-horizontal-list")[0].startMoving(1, 5);
		
		$('#maintabs').tabs();
		
		$('.tablink').click(function() {
			var tab = $(this).attr('rel');
			if (tab != null && tab != "") {
				$('#maintabs').tabs('select', tab);
			}
			return false;
		});
		
		$('#viewExampleSource').click(
			function() {$('#example-source').slideToggle('slow');return false;}
		);
		
		$('#example-source').hide();
	}
};

$(document).ready(function() {
	main.init();
});
