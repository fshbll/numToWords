<?php
    $DB_HOST = "localhost";
    $DB_NAME = "database";
    $DB_USER = "root";
    $DB_PASS = "";
    $conn = new mysqli($DB_HOST,$DB_USER,$DB_PASS,$DB_NAME);

    if (!$conn) {
        die("Failed to connect: " . mysqli_connect_error());
    }

    echo "connected"
?>
