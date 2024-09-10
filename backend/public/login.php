<?php
header("Content-Type: application/json");

include '../config/database.php';

$conn = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_DATABASE);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$email = $_POST['email'];
$password = $_POST['password'];

$stmt = $conn->prepare("SELECT id, user_type FROM users WHERE email = ? AND password = ?");
$stmt->bind_param("ss", $email, $password);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    $stmt->bind_result($id, $user_type);
    $stmt->fetch();
    echo json_encode(["success" => true, "user_type" => $user_type]);
} else {
    echo json_encode(["success" => false, "message" => "Invalid credentials"]);
}

$stmt->close();
$conn->close();
?>
