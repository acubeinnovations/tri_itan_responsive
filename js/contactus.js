$(function(){


	$('#submit').click(function () {

		function Trim(strInput) {
			while (true) {
				if (strInput.substring(0, 1) != " ")
				    break;
				strInput = strInput.substring(1, strInput.length);
			}
			while (true) {
				if (strInput.substring(strInput.length - 1, strInput.length) != " ")
				    break;
				strInput = strInput.substring(0, strInput.length - 1);
			}
		   return strInput;
		}

		var error = "";
		var email = $('#email').val();
		if(Trim(email)==""){
		    error += "Empty email.\n";
		}else{

			pattern = /^[a-zA-Z0-9]\w+(\.)?\w+@\w+\.\w{2,5}(\.\w{2,5})?$/;
			result = pattern.test(email);
			if( result == false) {
			   error += "Invalid Emailid.\n";
			}
		}

		var name = $('#name').val();

		if(Trim(name)==""){
		    error += "Empty Name.\n";
		}

		var company = $('#company').val();
		/* if(Trim(company)==""){
		    error += "Empty Company Name.\n";
		}
		*/
		var message = $('#message').val();
		if(Trim(message)==""){
		    error += "Empty Message.\n";
		}
		if(error!=''){
			alert(error);
			return false;
		}else{
		var submit="SEND MESSAGE";
		var success_post = $.post('send_mail.php',
			{	submit:submit,
				name:name,
				email:email,
				company:company,
				message:message,

			});
		success_post.done(function(data){
			if(data=='1'){
				$("#contact_send").hide();
				$("#contact_success").show();
				}
			});
			}
		});









});




