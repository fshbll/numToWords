<?php 
    include 'db_connection.php';

    $DB_SELECT = "SELECT fetched_num, fetched_num_words FROM num_to_words";
    $DB_SELECT_RESULT = $conn->query($DB_SELECT);

    if ($DB_SELECT_RESULT->num_rows > 0) {
            // output data of each row
        while($row = $DB_SELECT_RESULT->fetch_assoc()) {
            $fetchedNum = $row['fetched_num'];
            $fetchedNumWords = $row['fetched_num_words'];
            
            echo '<div class="history-post">' . 
                        '<p>' . 'Number: '. '<b>' . '<span class="data">' . $fetchedNum . '<span>' . '</b>' . '</p>' .
                        '<p>' . 'Number Word: '. '<b>' . '<span class="data">' . $fetchedNumWords . '<span>' . '</b>' . '</p>' . 
                '</div>';
        }
    } else {
            echo "0 results";
    }
    $conn->close();
?>