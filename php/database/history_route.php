<?php
    include 'db_connection.php';

    $read_num = $_POST['read_num'];
    $read_num_words = $_POST['read_num_words'];

    $DB_ALTER = "ALTER TABLE num_to_words MODIFY COLUMN session_id INT AUTO_INCREMENT;";
    $DB_ALTER_RESULT = $conn->query($DB_ALTER);

    $DB_INSERT = "INSERT INTO num_to_words (fetched_num, fetched_num_words) VALUES ('$read_num', '$read_num_words' )";
    $DB_INSERT = $conn->query($DB_INSERT);
?>
    
   