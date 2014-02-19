
			$(document).ready(function(){
				
				//flip
				

			function showloader() {  
				for(i=1; i< 17; i++){
					$("#product-image-"+i).css('background','url(images/loader.gif)');
				}
			}	

			function showimage(id) {  
				$("#product-image-"+id).css('background','url(images/creativity/products/image_small_'+id+'.png)');
			}
	
			showloader();
			setTimeout(function() { showimage(1); }, 200);
			setTimeout(function() { showimage(2); }, 400);
			setTimeout(function() { showimage(3); }, 600);
			setTimeout(function() { showimage(4); }, 800);
			setTimeout(function() { showimage(5); }, 1000);
			setTimeout(function() { showimage(6); }, 1200);
			setTimeout(function() { showimage(7); }, 1400);
			setTimeout(function() { showimage(8); }, 1800);
			setTimeout(function() { showimage(9); }, 2000);
			setTimeout(function() { showimage(10); }, 2200);
			setTimeout(function() { showimage(11); }, 2400);
			setTimeout(function() { showimage(12); }, 2600);
			setTimeout(function() { showimage(13); }, 2800);
			setTimeout(function() { showimage(14); }, 3000);
			setTimeout(function() { showimage(15); }, 3200);
			setTimeout(function() { showimage(16); }, 3400);



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
					$('.products-container').css('background','url(images/creativity/products/'+current_element.attr('large')+'.png)');
					$('.products-container').css('background-repeat','no-repeat');
					$('.products-container').css('background-position','center');
					
				}

			$('.container-outer').click(function(){
				$('.product-image').show();
				$('.flip-box').css('background','transparent');
			});
	



			});
