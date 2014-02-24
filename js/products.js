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

	function showloader() {  
			$('.product-image').css('background','');
			$(".flip-box").css('background','url(images/loader.gif)');
	}

	
	function showimage8() {  
		$('#image-08').css('background','url(images/products/'+product_id+'/image_8.png)');
		$("#box-8").css('background','transparent');
	}

	function showimage7() {  
		$('#image-07').css('background','url(images/products/'+product_id+'/image_7.png)');
		$("#box-7").css('background','transparent');
	}
	function showimage6() {  
		$('#image-06').css('background','url(images/products/'+product_id+'/image_6.png)');
		$("#box-6").css('background','transparent');
	}


	function showimage5() {  
		$('#image-05').css('background','url(images/products/'+product_id+'/image_5.png)');
		$("#box-5").css('background','transparent');
	}

	function showimage4() {  
		$('#image-04').css('background','url(images/products/'+product_id+'/image_4.png)');
		$("#box-4").css('background','transparent');
	}

	function showimage3() {  
		$('#image-03').css('background','url(images/products/'+product_id+'/image_3.png)');
		$("#box-3").css('background','transparent');
	}

	function showimage2() {  
		$('#image-02').css('background','url(images/products/'+product_id+'/image_2.png)');
		$("#box-2").css('background','transparent');
	}

	function showimage1() {  
		$('#image-01').css('background','url(images/products/'+product_id+'/image_1.png)');
		$("#box-1").css('background','transparent');
	}

	if(window_height <= 690){
		$("#box-6").hide();
		$("#box-7").hide();
		$("#box-8").hide();
	}else{
		$("#box-6").show();
		$("#box-7").show();
		$("#box-8").show();
	}
	showloader();
	if(window_height > 690){
		setTimeout(showimage6, 200);
		setTimeout(showimage7, 400);
		setTimeout(showimage8, 600);
	}else{

	}
	setTimeout(showimage3, 800);
	setTimeout(showimage4, 1000);
	setTimeout(showimage5, 1200);
	setTimeout(showimage1, 1400);
	setTimeout(showimage2, 1600);

  });



});
