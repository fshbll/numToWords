<?php

    $readNum = $_POST['rawData'];
    $readNumWords = $_POST['numWords'];

    $DB_INSERT = "INSERT INTO fetcheddata (fetchedNum, fetchedNumWord) VALUES ($readNum, $readNumWords)";
    $DB_SELECT = "SELECT fetchedDataID, fetchedNum, fetchedNumWord FROM fetcheddata";
    $DB_SELECT_RESULT = $conn->query($DB_INSERT);

    echo "<script> console.log('Debug Objects: " . $readNum . "'); </script>";

    if ($DB_SELECT_RESULT->num_rows > 0) {
        // output data of each row
        while($row = $DB_SELECT_RESULT->fetch_assoc()) {
          echo "Number: " . $row["fetchedNum"] . "<br>" . "Number Word: " . $row["fetchedNumWord"] . "<br>";
        }
    } else {
        echo "0 results";
      }
      $conn->close();
?>