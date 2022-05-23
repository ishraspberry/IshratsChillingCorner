<?php 
if(isset($_POST['submit'])){
    $to = "ishratnaba2002@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $fname = $_POST['fname'];
    $subject = "Form submission";
    $message = $fname . " wrote the following:" . "\n\n" . $_POST['message'];
    $headers = "From:" . $from;
    mail($to,$subject,$message,$headers);
    header('Location: /contact.html');
    }
?>