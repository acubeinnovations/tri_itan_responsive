$("document").ready(function() {
	
	$(document).keydown(function(e) {
		// Current index
		var cur_idx = $(".box").index($(".selected"));
		var max_idx = $(".box").length - 1;
		var row_length = 6;
		
		switch (e.keyCode) {
			case 37:
				// Get index of current item, if 1 then nothing, else move one back
				if (cur_idx == 0) {
					var next_idx = 0;
				} else {
					var next_idx = cur_idx - 1;
				}
				break;
			case 38:
				if ((cur_idx - row_length) <= 0) {
					var next_idx = 0;
				} else {
					var next_idx = (cur_idx - row_length);
				}
				break;
			case 39:
				// Get index of current item, if max then nothing, else move one forward
				if (cur_idx == max_idx) {
					var next_idx = cur_idx;
				} else {
					var next_idx = cur_idx + 1;
				}
				break;	
			case 40:
				if ((cur_idx + row_length) >= max_idx) {
					var next_idx = max_idx;
				} else {
					var next_idx = (cur_idx + row_length);
				}
				break;			
		}
		
		if (typeof next_idx != 'undefined') {
			$(".box.selected").removeClass("selected");
			$(".box").eq(next_idx).addClass("selected");
		}
	});	
	
});

