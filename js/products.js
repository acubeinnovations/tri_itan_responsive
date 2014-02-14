$(document).ready(function(){
  $(".itan_product").click(function(){
   	$(".products-container-outer").show();
	var product_id = $(this).attr("product_id");
	var product_name = $(this).html();
	var product_desc = $(this).attr("product_desc");
	$(".product-head").html(product_name);
	$(".product-description").html(product_desc);
	var window_height = $(window).height();
	//alert(window_height);


	if(window_height >800){
		$('#image-08').css('background-image','url(images/loader.gif)');
		$('#image-07').css('background-image','url(images/loader.gif)');
		$('#image-06').css('background-image','url(images/loader.gif)');
	}
	$('#image-05').css('background-image','url(images/loader.gif)');
	$('#image-04').css('background-image','url(images/loader.gif)');
	$('#image-03').css('background-image','url(images/loader.gif)');
	$('#image-02').css('background-image','url(images/loader.gif)');
	$('#image-01').css('background-image','url(images/loader.gif)');
	function showimage8() {  
		if(window_height >800){
			$('#image-08').css('background-image','url(images/products/'+product_id+'/image_8.png)');
		}
	}

	function showimage7() {  
		if(window_height >800){
			$('#image-07').css('background-image','url(images/products/'+product_id+'/image_7.png)');
		}
	}
	function showimage6() {  
		if(window_height >800){
			$('#image-06').css('background-image','url(images/products/'+product_id+'/image_6.png)');
		}
	}


	function showimage5() {  
		$('#image-05').css('background-image','url(images/products/'+product_id+'/image_5.png)');
	}

	function showimage4() {  
		$('#image-04').css('background-image','url(images/products/'+product_id+'/image_4.png)');
	}

	function showimage3() {  
		$('#image-03').css('background-image','url(images/products/'+product_id+'/image_3.png)');
	}

	function showimage2() {  
		$('#image-02').css('background-image','url(images/products/'+product_id+'/image_2.png)');
	}

	function showimage1() {  
		$('#image-01').css('background-image','url(images/products/'+product_id+'/image_1.png)');
	}

	setTimeout(showimage8, 200);
	setTimeout(showimage7, 400);
	setTimeout(showimage6, 600);
	setTimeout(showimage5, 800);
	setTimeout(showimage4, 1000);
	setTimeout(showimage3, 1200);
	setTimeout(showimage2, 1400);
	setTimeout(showimage1, 1600);

  });



});
