var mySwiper = new Swiper('.swiper-container',{
keyboardControl: false,
centeredSlides: true,
slidesPerView: 3,
watchActiveIndex: true,
speed:600,
mode: 'vertical'
});

$('.nav_up').click(function(){
	mySwiper.swipePrev();
});

$('.nav_down').click(function(){
	mySwiper.swipeNext();
});


$(document).keydown(function(e) {
	var code = (e.keyCode ? e.keyCode : e.which);
	if (code == 40) {
		mySwiper.swipeNext();
	} else if (code == 38) {
		mySwiper.swipePrev();
	}
});
