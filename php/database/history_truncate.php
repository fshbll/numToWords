<?php
    include 'db_connection.php';

    $DB_TRUNCATE = "TRUNCATE TABLE num_to_words";
    $DB_TRUNCATE_RESULT = $conn->query($DB_TRUNCATE);
?>