// Ensure the DOM is fully loaded before executing the script
$(document).ready(function() {
    
    // Attach a 'one-time' click event to the element with the id 'submitNum'
    $('#submitNum').one('click', function() {
        // Toggle the visibility of elements with the class 'history-container'
        $('.history-container').toggle();
    });

    // Attach a click event to the element with the id 'submitNum'
    $('#submitNum').click(function() {
        // Call the function convertToNumWords() when 'submitNum' is clicked
        convertToNumWords();
    });

    // Attach a click event to the element with the id 'delete-history'
    $('#delete-history').click(function() {
        // Call the function remove_data() when 'delete-history' is clicked
        remove_data();
    });
});

// Function to send data to the server using AJAX
function send_data(num, word) {
    $.ajax({
        method: 'post',
        url: '../php/database/history_route.php',
        data: {
            read_num: num,
            read_num_words: word
        },
        success: function(data) {
            // After successful data submission, fetch and update the history
            fetch_data();
        }
    });
    // Prevent the default form submission
    return false;
}

// Function to fetch data from the server using AJAX and update the history container
function fetch_data() {
    $.ajax({
        method: 'GET',
        url: '../php/database/fetch_history.php',
        success: function(data) {
            // Update the content of elements with the class 'history-container'
            $('.history-container').html(data);
            
            // Scroll to the bottom of the history container with animation
            $('.history-container').animate({ scrollTop: $('.history-container')[0].scrollHeight }, 500);
            
            // Attach a click event to elements with the class 'data' for copying text to clipboard
            $('.data').on('click', function() {
                var textToCopy = $(this).text();
                
                // Use the Clipboard API to copy text to the clipboard
                navigator.clipboard.writeText(textToCopy)
                  .then(function() {
                    // Display an alert on successful copying
                    alert("Copied to Clipboard");
                  })
                  .catch(function(error) {
                    // Log an error if copying to clipboard fails
                    console.error('Unable to copy to clipboard', error);
                  });
            });
        }
    });
    // Prevent the default form submission
    return false;
}

// Function to remove data from the server using AJAX and update the history
function remove_data() {
    $.ajax({
        method: 'post',
        url: '../php/database/history_truncate.php',
        success: function(data) {
            // After successful data removal, fetch and update the history
            fetch_data();
            // Display an alert indicating that the history has been cleared
            alert("History cleared");
        }
    });
    // Prevent the default form submission
    return false;
}
