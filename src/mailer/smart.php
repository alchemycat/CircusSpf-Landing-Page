<?php 

$name = $_POST['name'];
$phone = $_POST['phone'];
// $email = $_POST['email'];
// $target = $_POST['admin_email'];
$target = "vlad.tiw27@gmail.com";

// $type = $_POST['type'];

if(isset($_POST['order-details'])) {
    $title = $_POST['order-title'];
    $details = $_POST['order-details'];
} else if(isset($_POST['question'])) {
    $question = $_POST['question'];
}


require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 2;                               // Enable verbose debug output
// $mail->SMTPDebug = SMTP::DEBUG_SERVER;

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'colacat1927@gmail.com';                 // Наш логин
$mail->Password = 'rkzpbhyvtclnugxl';                           // Наш пароль от ящика

$mail->SMTPSecure = "ssl";
$mail->Port = 465;                                // TCP port to connect to
 
$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);


$mail->setFrom('colacat1927@gmail.com', $type);   // От кого письмо 
$mail->addAddress($target);     // Add a recipient
    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

    $mail->Subject = 'Новый заказ [Test]';
    $mail->Body    = ' 
    	Имя: ' . $name . ' <br>
    	Номер телефона: ' . $phone . '<br>';

// if(isset($_POST['order-details'])) {
//     $mail->Subject = 'Новый заказ [Perfocom]';
//     $mail->Body    = ' 
//     	Имя: ' . $name . ' <br>
//     	Номер телефона: ' . $phone . '<br>';
//     	// E-mail: ' . $email . '<br>
//     	// Название: ' . $title . '<br>
//     	// Детали: ' . $details . '';
	
// } else if(isset($_POST['question'])) {
    
//     $mail->Subject = 'Новый вопрос [Perfocom]';
//     $mail->Body    = ' 
//     	Имя: ' . $name . ' <br>
//     	Номер телефона: ' . $phone . '<br>
//     	E-mail: ' . $email . '<br>
//     	Вопрос: ' . $question . '';
// } else if(isset($_POST['call_order'])) {
//         $mail->Subject = 'Заказ на звонок [Perfocom]';
//     $mail->Body    = ' 
//     	Имя: ' . $name . ' <br>
//     	Номер телефона: ' . $phone . '<br>
//     	E-mail: ' . $email . '';
// }


if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>