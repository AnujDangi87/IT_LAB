<?php
$servername = "localhost:3306";
$username = "root";
$password = "ailab";
$dbname = "23mcce16_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['search'])) {
    $search = $conn->real_escape_string($_POST['search']);
    $sql = $search ?
        "SELECT `text` FROM `search` WHERE `text` LIKE '%$search%'" :
        "SELECT `text` FROM `search`";
    $result = $conn->query($sql);

    if($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo "<tr><td>" . $row['text'] . "</td></tr>";
        }
    } else {
        echo "<tr><td colspan='1'>No results found.</td></tr>";
    }
}

$conn->close();
?>
