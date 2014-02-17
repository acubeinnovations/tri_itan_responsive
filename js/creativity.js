
			$(document).ready(function(){
				
				//flip
				$("#box-1").css('background-image','url(images/creativity/products/image_small_1.png)');
				$("#box-2").css('background-image','url(images/creativity/products/image_small_2.png)');
				$("#box-3").css('background-image','url(images/creativity/products/image_small_3.png)');
				$("#box-4").css('background-image','url(images/creativity/products/image_small_4.png)');
				$("#box-5").css('background-image','url(images/creativity/products/image_small_5.png)');
				$("#box-6").css('background-image','url(images/creativity/products/image_small_6.png)');
				$("#box-7").css('background-image','url(images/creativity/products/image_small_7.png)');
				$("#box-8").css('background-image','url(images/creativity/products/image_small_8.png)');
				$("#box-9").css('background-image','url(images/creativity/products/image_small_9.png)');
				$("#box-10").css('background-image','url(images/creativity/products/image_small_10.png)');
				$("#box-11").css('background-image','url(images/creativity/products/image_small_11.png)');
				$("#box-12").css('background-image','url(images/creativity/products/image_small_12.png)');
				$("#box-13").css('background-image','url(images/creativity/products/image_small_13.png)');
				$("#box-14").css('background-image','url(images/creativity/products/image_small_14.png)');
				$("#box-15").css('background-image','url(images/creativity/products/image_small_15.png)');
				$("#box-16").css('background-image','url(images/creativity/products/image_small_16.png)');

				function flip_image(current_element){
					$("#box-1").flip({
						direction:'tb',
						color: '#2a2a2a',
						bgColor:'#000000',
						onEnd: function(){
							show_large(current_element);
						}
					})

					$("#box-2").flip({
						direction:'rl',
						color: '#2a2a2a',
						bgColor:'#000000',
						onEnd: function(){
							show_large(current_element);
						}
					})
					$("#box-3").flip({
						direction:'tb',
						color: '#2a2a2a',
						bgColor:'#000000',
						onEnd: function(){
							show_large(current_element);
						}
					})
					$("#box-4").flip({
						direction:'rl',
						color: '#2a2a2a',
						bgColor:'#000000',
						onEnd: function(){
							show_large(current_element);
						}
					})
					$("#box-5").flip({
						direction:'lr',
						color: '#2a2a2a',
						bgColor:'#000000',
						onEnd: function(){
							show_large(current_element);
						}
					})
					$("#box-6").flip({
						direction:'tb',
						color: '#2a2a2a',
						bgColor:'#000000',
						onEnd: function(){
							show_large(current_element);
						}
					})
					$("#box-7").flip({
						direction:'rl',
						color: '#2a2a2a',
						bgColor:'#000000',
						onEnd: function(){
							show_large(current_element);
						}
					})
					$("#box-8").flip({
						direction:'bt',
						color: '#2a2a2a',
						bgColor:'#000000',
						onEnd: function(){
							show_large(current_element);
						}
					})
					$("#box-9").flip({
						direction:'bt',
						color: '#2a2a2a',
						bgColor:'#000000',
						onEnd: function(){
							show_large(current_element);
						}
					})
					$("#box-10").flip({
						direction:'rl',
						color: '#2a2a2a',
						bgColor:'#000000',
						onEnd: function(){
							show_large(current_element);
						}
					})
					$("#box-11").flip({
						direction:'tb',
						color: '#2a2a2a',
						bgColor:'#000000',
						onEnd: function(){
							show_large(current_element);
						}
					})
					$("#box-12").flip({
						direction:'rl',
						color: '#2a2a2a',
						bgColor:'#000000',
						onEnd: function(){
							show_large(current_element);
						}
					})
					$("#box-13").flip({
						direction:'lr',
						color: '#2a2a2a',
						bgColor:'#000000',
						onEnd: function(){
							show_large(current_element);
						}
					})
					$("#box-14").flip({
						direction:'bt',
						color: '#2a2a2a',
						bgColor:'#000000',
						onEnd: function(){
							show_large(current_element);
						}
					})
					$("#box-15").flip({
						direction:'rl',
						color: '#2a2a2a',
						bgColor:'#000000',
						onEnd: function(){
							show_large(current_element);
						}
					})
					$("#box-16").flip({
						direction:'tb',
						color: '#2a2a2a',
						bgColor:'#000000',
						onEnd: function(){
							show_large(current_element);
							$('.product-image').hide();
							
						}
					})

				}

				$('.product-image').click(function(){
					$('.products-container').css('background-image','');
					flip_image($(this));

				});

				
				function show_large(current_element){
					$('.products-container').css('background-image','url(images/creativity/products/'+current_element.attr('large')+'.png)');
					$('.products-container').css('background-repeat','no-repeat');
					$('.products-container').css('background-position','center');
					$('.products-container').css('background-size','1260px 860px');
				}

			$('.container-outer').click(function(){
				$('.product-image').show();
			});
	
			});
