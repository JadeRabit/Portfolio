<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: index.html#contact', true, 302);
    exit;
}

if (isset($_POST['submit'])) {
    $name = isset($_POST['name']) ? trim((string)$_POST['name']) : '';
    $email = isset($_POST['email']) ? trim((string)$_POST['email']) : '';
    $message = isset($_POST['message']) ? trim((string)$_POST['message']) : '';

    $safeEmail = filter_var($email, FILTER_VALIDATE_EMAIL);
    $safeName = $name !== '' ? mb_substr($name, 0, 100) : '';
    $safeMessage = $message !== '' ? mb_substr($message, 0, 5000) : '';

    $to = "kenjievillamar.pro@gmail.com";
    $subject = "New Message from Website";
    $replyTo = $safeEmail ? preg_replace("/[\r\n]+/", "", $safeEmail) : "";
    $body = "Name: {$safeName}\nEmail: {$replyTo}\n\nMessage:\n{$safeMessage}\n";
    $headers = "From: {$to}\r\nReply-To: {$replyTo}\r\nContent-Type: text/plain; charset=UTF-8";

    $mail_sent = false;
    if ($safeName !== '' && $replyTo !== '' && $safeMessage !== '') {
        $mail_sent = mail($to, $subject, $body, $headers);
    }

    $status = $mail_sent ? 'sent' : 'failed';
    header("Location: index.html?contact={$status}#contact", true, 302);
    exit;
}

header('Location: index.html?contact=failed#contact', true, 302);
exit;
