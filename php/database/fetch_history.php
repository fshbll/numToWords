
<?php
// Your database connection code here
include 'db_connection.php';
// Fetch data from the database
$query = "SELECT session_id, fetched_num, fetched_num_words FROM num_to_words";
$result = mysqli_query($conn, $query);

// Check if the query was successful
if ($result) {
    // Fetch the data as an associative array
    while($row = mysqli_fetch_assoc($result)){
        $data[] = $row;
    }
    // Return data as JSON
    header('Content-Type: application/json');
    echo json_encode($data);
} else {
    // Handle the case where the query failed
    echo "Error: " . mysqli_error($conn);
}

// Close the database connection
mysqli_close($conn);
?>
