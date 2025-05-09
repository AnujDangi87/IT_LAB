<?php
    $server = "localhost";
    $username = "root";
    $pass = "";
    $dbname = "test";

    $conn = new mysqli($server, $username, $pass, $dbname);

    if(!$conn)
    {
        die("Error connecting to database");
    }
?>