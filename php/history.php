<?php
    $sql = "SELECT fetchedDataID, fetchedNum, fetchedNumWord FROM fetcheddata";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
          echo "Number: " . $row["fetchedNum"] . "<br>" . "Number Word: " . $row["fetchedNumWord"] . "<br>";
        }
    } else {
        echo "0 results";
      }
      $conn->close();
?>