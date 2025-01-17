<?php
$conn = new mysqli("localhost", "root", "", "contact_form");

if ($conn->connect_error) {
    die("Bağlantı başarısız: " . $conn->connect_error);
}

$sql = "SELECT * FROM submissions";
$result = $conn->query($sql);

echo "<table border='1' style='width:80%; margin: 20px auto; text-align: center;'>
        <tr>
            <th>ID</th>
            <th>Ad</th>
            <th>Soyad</th>
            <th>Mail</th>
            <th>Telefon</th>
            <th>Şehir</th>
            <th>Cinsiyet</th>
        </tr>";

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>{$row['id']}</td>
                <td>{$row['name']}</td>
                <td>{$row['surname']}</td>
                <td>{$row['mail']}</td>
                <td>{$row['nick']}</td>
                <td>{$row['city']}</td>
                <td>{$row['gender']}</td>
              </tr>";
    }
} else {
    echo "<tr><td colspan='7'>Henüz kayıt yok</td></tr>";
}

echo "</table>";

$conn->close();
?>
