<?php

if (!$_POST) exit;

if (!defined("PHP_EOL")) define("PHP_EOL", "\r\n");

$name = $_POST['name'];
$phone = $_POST['phone'];
$type = $_POST['type'];
$price=$_POST['price'];
$comments = $_POST['comments'];


if (trim($name) == '') {
    echo '<div class="error_message">Пожалуйста, введите ваше имя!</div>';
    exit();
} else if (trim($phone) == '') {
    echo '<div class="error_message">Пожалуйста, введите ваш телефон!</div>';
    exit();
}else if (trim($type) == '') {
    echo '<div class="error_message">Пожалуйста, выберите объект!</div>';
    exit();
}else if (trim($price) == '') {
    echo '<div class="error_message">Пожалуйста, введите цену!</div>';
    exit();
} else if (trim($comments) == '') {
    echo '<div class="error_message">Пожалуйста, введите ваше сообщение.</div>';
    exit();
}

if (get_magic_quotes_gpc()) {
    $comments = stripslashes($comments);
}


// Configuration option.
// Enter the email address that you want to emails to be sent to.
// Example $address = "joe.doe@yourdomain.com";

$address = "sewr08@live.com";


// Configuration option.
// i.e. The standard subject will appear as, "You've been contacted by John Doe."

// Example, $e_subject = '$name . ' has contacted you via Your Website.';

$e_subject = $name . ' с сайта Служба Аренды хочет что-то сдать.';


// Configuration option.
// You can change this if you feel that you need to.
// Developers, you may wish to add more fields to the form, in which case you must be sure to add them here.

$e_body = "Имя: $name" . PHP_EOL . PHP_EOL;
$e_reply = "Телефон: $phone\r\n";
$e_content = "Объект: $type\r\nЦена: $price\r\nСообщение:$comments" . PHP_EOL . PHP_EOL;


$msg = wordwrap($e_body . $e_content . $e_reply, 70);

$headers = "From: $address" . PHP_EOL;
$headers .= "Reply-To: $address" . PHP_EOL;
$headers .= "MIME-Version: 1.0" . PHP_EOL;
$headers .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
$headers .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;

if (mail($address, $e_subject, $msg, $headers)) {

    // Email has sent successfully, echo a success page.

    echo "<fieldset>";
    echo "<div id='success_page'>";
    echo "<h1>Письмо успешно отправлено.</h1>";
    echo "<p>Спасибо ,<strong>$name</strong>, за ваше письмо.</p>";
    echo "</div>";
    echo "</fieldset>";

} else {

    echo 'ERROR!';

}