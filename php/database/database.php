<?php
    $DB_HOST = "localhost";
    $DB_NAME = "root";
    $DB_USER = "";
    $DB_PASS = "number_to_words";

    $conn = new mysqli($DB_HOST,$DB_USER,$DB_PASS,$DB_NAME);

    if (!$conn) {
        die("Failed to connect: " . mysqli_connect_error());
    }
?>
