$(document).ready(function(){
  $(".scroll-content-item").click(function(){
   	$(".products-container-outer").show();
	var product_id = $(this).attr("product_id");
	var product_name = $(this).html();
	var product_desc = $(this).attr("product_desc");
	$(".product-head").html(product_name);
	$(".product-description").html(product_desc);

	$('#image-08').css('background-image','url(images/products/'+product_id+'/image_8.png)');
	$('#image-07').css('background-image','url(images/products/'+product_id+'/image_7.png)');
	$('#image-06').css('background-image','url(images/products/'+product_id+'/image_6.png)');
	$('#image-05').css('background-image','url(images/products/'+product_id+'/image_5.png)');
	$('#image-04').css('background-image','url(images/products/'+product_id+'/image_4.png)');
	$('#image-03').css('background-image','url(images/products/'+product_id+'/image_3.png)');
	$('#image-02').css('background-image','url(images/products/'+product_id+'/image_2.png)');
	$('#image-01').css('background-image','url(images/products/'+product_id+'/image_1.png)');

  });
});
