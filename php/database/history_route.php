<?php
include 'db_connection.php';

// Modify the session_id to auto-increment
$DB_ALTER_COLUMN = "ALTER TABLE num_to_words MODIFY COLUMN session_id INT AUTO_INCREMENT";
$stmtAlterColumn = $conn->prepare($DB_ALTER_COLUMN);

if ($stmtAlterColumn) {
    $stmtAlterColumn->execute();
    $stmtAlterColumn->close();
} else {
    echo "Error: " . $conn->error;
}

// Set auto-increment starting value for session_id
// $DB_ALTER_START_VALUE = "ALTER TABLE num_to_words AUTO_INCREMENT = 1000";
// $stmtAlterStartValue = $conn->prepare($DB_ALTER_START_VALUE);

// if ($stmtAlterStartValue) {
//     $stmtAlterStartValue->execute();
//     $stmtAlterStartValue->close();
// } else {
//     echo "Error: " . $conn->error;
// }

// // Check if the ALTER TABLE query was successful
// if (!$DB_ALTER_RESULT) {
//     echo "Error: " . $conn->error;
//     // Handle the error appropriately
// }

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Create a prepared statement for SELECT
    $querySelect = "SELECT session_id, fetched_num, fetched_num_words FROM num_to_words WHERE is_deleted = 0";
    $stmtSelect = mysqli_prepare($conn, $querySelect);

    // Check if the prepared statement was created successfully
    if ($stmtSelect) {
        // Execute the prepared statement
        mysqli_stmt_execute($stmtSelect);

        // Bind the result variables
        mysqli_stmt_bind_result($stmtSelect, $session_id, $fetched_num, $fetched_num_words);

        // Fetch the data
        $data = array();
        while (mysqli_stmt_fetch($stmtSelect)) {
            $data[] = array(
                'session_id' => $session_id,
                'fetched_num' => $fetched_num,
                'fetched_num_words' => $fetched_num_words
            );
        }

        // Return data as JSON
        header('Content-Type: application/json');
        echo json_encode($data);

        // Close the SELECT statement
        mysqli_stmt_close($stmtSelect);
    } else {
        // Handle the case where the SELECT prepared statement creation failed
        echo "Error: " . mysqli_error($conn);
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Assuming that 'read_num' and 'read_num_words' are user inputs received through POST
    $read_num = $_POST['read_num'];
    $read_num_words = $_POST['read_num_words'];

    // Create a prepared statement for INSERT
    $queryInsert = "INSERT INTO num_to_words (fetched_num, fetched_num_words) VALUES (?, ?)";
    $stmtInsert = mysqli_prepare($conn, $queryInsert);

    // Check if the INSERT prepared statement was created successfully
    if ($stmtInsert) {
        // Bind parameters to the prepared statement
        mysqli_stmt_bind_param($stmtInsert, "ss", $read_num, $read_num_words);

        // Execute the INSERT prepared statement
        mysqli_stmt_execute($stmtInsert);

        // Close the INSERT statement
        mysqli_stmt_close($stmtInsert);
    } else {
        // Handle the case where the INSERT prepared statement creation failed
        echo "Error: " . mysqli_error($conn);
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    parse_str(file_get_contents("php://input"), $putData);
    $is_deleted = $putData['is_deleted'];
    $is_deleted_default = 0;

    $queryUpdate = "UPDATE num_to_words SET is_deleted = ? WHERE is_deleted = ?";
    $stmtUpdate = mysqli_prepare($conn, $queryUpdate);

    if ($stmtUpdate) {
        // Bind parameters to the prepared statement
        mysqli_stmt_bind_param($stmtUpdate, "ii", $is_deleted, $is_deleted_default);

        // Execute the UPDATE prepared statement
        mysqli_stmt_execute($stmtUpdate);

        // Close the UPDATE statement
        mysqli_stmt_close($stmtUpdate);
    } else {
        // Handle the case where the UPDATE prepared statement creation failed
        echo "Error: " . mysqli_error($conn);
    }
}

// Close the database connection
mysqli_close($conn);
?>
