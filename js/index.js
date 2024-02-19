// ensures the DOM is fully loaded before executing the script
$(document).ready(function() {
    
    // attach a 'one-time' click event to 'submitNum'
    $('#submitNum').one('click', function() {
        // toggle the visibility of 'history-container'
        $('.history-container').toggle();
    });

    // attach a click event to 'submitNum'
    $('#submitNum').click(function() {
        // calls the function convertToNumWords()
        convertToNumWords();
        });

    // attach a click event to 'delete-history'
    $('#delete-history').click(function() {
        // call the function remove_data()
        remove_data();
    });
});

// function to send data to the server using AJAX
function send_data(num, word) {
    $.ajax({
        method: 'post',
        url: '../php/database/history_route.php',
        data: {
            read_num: num,
            read_num_words: word
        },
        success: function(data) {
            // after successful data submission, fetch and update the history
            fetch_data();
        }
    });
    // prevent the submission
    return false;
}

// function to fetch data from the server using AJAX and update the history container
function fetch_data() {
    $.ajax({
        method: 'GET',
        url: '../php/database/fetch_history.php',
        success: function(data) {
            // update the content of elements with the class 'history-container'
            $('.history-container').html(data);
            
            // scroll to the bottom of the history container with animation
            $('.history-container').animate({ scrollTop: $('.history-container')[0].scrollHeight }, 500);
            
            // attach a click event to elements with the class 'data' for copying text to clipboard
            $('.data').on('click', function() {
                var textToCopy = $(this).text();
                
                // use the Clipboard API to copy text to the clipboard
                navigator.clipboard.writeText(textToCopy)
                  .then(function() {
                    // display an alert on successful copying
                    alert("Copied to Clipboard");
                  })
                  .catch(function(error) {
                    // log an error if copying to clipboard fails
                    console.error('Unable to copy to clipboard', error);
                  });
            });
        }
    });
    // prevent the submission
    return false;
}

// function to remove data from the server using AJAX and update the history
function remove_data() {
    $.ajax({
        method: 'post',
        url: '../php/database/history_truncate.php',
        success: function(data) {
            // after successful data removal, fetch and update the history
            fetch_data();
            // display an alert indicating that the history has been cleared
            alert("History cleared");
            $('.history-container').toggle();
            // attach a 'one-time' click event to 'submitNum' sinve we toggled it again 
            $('#submitNum').one('click', function() {
                // toggle the visibility of 'history-container'
                $('.history-container').toggle();
            });
        }
    });
    // prevent the submission
    return false;
}
