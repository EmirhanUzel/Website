<?php
$conn = new mysqli("localhost", "root", "", "contact_form");

if ($conn->connect_error) {
    die("Bağlantı başarısız: " . $conn->connect_error);
}

$name = $_POST['name'] ?? '';
$surname = $_POST['surname'] ?? '';
$mail = $_POST['mail'] ?? '';
$nick = $_POST['nick'] ?? '';
$city = $_POST['city'] ?? '';
$gender = $_POST['gender'] ?? '';

$sql = "INSERT INTO submissions (name, surname, mail, nick, city, gender) VALUES (?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssssss", $name, $surname, $mail, $nick, $city, $gender);

if ($stmt->execute()) {
    echo "Veri başarıyla kaydedildi.";
} else {
    echo "Hata: " . $stmt->error;
}
$stmt->close();
$conn->close();
?>
