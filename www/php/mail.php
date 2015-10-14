<?php


if (!defined("PHP_EOL")) define("PHP_EOL", "\r\n");

$phone   = $_POST['phone'];



if(trim($phone) == '') {
    echo '<div class="error_message">Пожалуйста, введите ваш телефон!</div>';
    exit();
}

// Configuration option.
// Enter the email address that you want to emails to be sent to.
// Example $address = "joe.doe@yourdomain.com";

$address = "sewr08@live.com";


// Configuration option.
// i.e. The standard subject will appear as, "You've been contacted by John Doe."

// Example, $e_subject = '$name . ' has contacted you via Your Website.';

$e_subject = 'Кто то с сайта Служба Аренды оставил телефон.';


// Configuration option.
// You can change this if you feel that you need to.
// Developers, you may wish to add more fields to the form, in which case you must be sure to add them here.

$e_reply = "Телефон: $phone";


$msg = wordwrap( $e_body . $e_content . $e_reply, 70 );

$headers = "From: $address" . PHP_EOL;
$headers .= "Reply-To: $address" . PHP_EOL;
$headers .= "MIME-Version: 1.0" . PHP_EOL;
$headers .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
$headers .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;

if(mail($address, $e_subject, $msg, $headers)) {

    // Email has sent successfully, echo a success page.

    echo "<fieldset>";
    echo "<div id='success_page'>";
    echo "<h1>Спасибо, письмо успешно отправлено.</h1>";
    echo "</div>";
    echo "</fieldset>";

} else {

    echo 'ERROR!';

}