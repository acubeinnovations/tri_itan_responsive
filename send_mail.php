<?php
if(isset($_POST['submit']) && $_POST['submit']=="SEND MESSAGE" ){
	$headers="";
    $strMailbody="";
    $strTo="admin@itan.com";
    $strSubject="Please Contact";		
	
	$name=$_POST['name'];	
	$company=$_POST['company'];
    $strFrom=$_POST['email'];
	$message=$_POST['message'];
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    'X-Mailer: PHP/' . phpversion(). "\r\n";
    $headers .= "From: ".$name." <".$strFrom.">"."\r\n";

    
    $strMailbody.= "Name : ".$name.",<br /><br />";
	$strMailbody.= "Company : ".$company.",<br /><br />";
    $strMailbody .=$message.".<br/>";
   
    $strMailbody .="<br /><br /><br /><br /><br />Thanks,<br />".$name."<br/>";
    //Send the mail to admin
    mail($strTo,$strSubject,$strMailbody,$headers);
	print 1;
}

?>
