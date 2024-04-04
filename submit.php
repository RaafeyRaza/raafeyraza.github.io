<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Get user's IP address
    $user_ip = $_SERVER['REMOTE_ADDR'];

    // Set up email headers
    $to = 'raafeyraza1@gmail.com'; // Replace with your email address
    $subject = '⚡ [IMPORTANT] - New contact message';
    $headers = "From: $name <$email>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    
    // Compose the email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message:\n$message\n\n";
    $email_message .= "IP Address: $user_ip\n";
    
    // Send the email
    if (mail($to, $subject, $email_message, $headers)) {
        echo json_encode(array('status' => 'success', 'message' => 'Message sent successfully.'));
    } else {
        echo json_encode(array('status' => 'error', 'message' => 'Failed to send message.'));
    }
} else {
    echo json_encode(array('status' => 'error', 'message' => 'Invalid request.'));
}
