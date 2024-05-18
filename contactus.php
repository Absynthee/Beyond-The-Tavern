if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Honeypot field is empty
    if(empty($_POST['honeypot'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        $to = 'austin.spillman@gmail.com';
        $subject = 'New message on your contact form from $name';
        $headers = "From: $email" . "\r\n" .
                   "Reply-To: $email" . "\r\n" .
                   'X-Mailer: PHP/' . phpversion();

        mail($to, $subject, $message, $headers);
    }
}
