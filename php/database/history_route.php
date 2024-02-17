<?php
    include 'db_connection.php';

    $read_num = $_POST['read_num'];
    $read_num_words = $_POST['read_num_words'];

    $DB_ALTER = "ALTER TABLE num_to_words MODIFY COLUMN session_id INT AUTO_INCREMENT;";
    $DB_ALTER_RESULT = $conn->query($DB_ALTER);

    $DB_INSERT = "INSERT INTO num_to_words (fetched_num, fetched_num_words) VALUES ('$read_num', '$read_num_words' )";
    $DB_INSERT = $conn->query($DB_INSERT);
    
    $DB_SELECT = "SELECT fetched_num, fetched_num_words FROM num_to_words";
    $DB_SELECT_RESULT = $conn->query($DB_SELECT);
  
    if ($DB_SELECT_RESULT->num_rows > 0) {
        // output data of each row
        while($row = $DB_SELECT_RESULT->fetch_assoc()) {
          echo "\n" . "\n" . "Number: " . $row["fetched_num"] . "\n" . "Number Word: " . $row["fetched_num_words"];
        }
    } else {
        echo "0 results";
      }
      $conn->close();
?>