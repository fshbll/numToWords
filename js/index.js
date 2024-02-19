// ensures the DOM is fully loaded before executing the script
$(document).ready(function() {
    fetch_data()

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
        if(confirm("Confirm Deletion?") ==true){
            remove_data();
        } else {
            return;
        }
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
            dataCount++;
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
        dataType: 'json',
        success: function(data) {
            let prevData = []
            // Iterate through each entry in the JSON response
            for (var i = 0; i < data.length; i++) {
                var fetchedNum = data[i].fetched_num;
                var fetchedNumWords = data[i].fetched_num_words;

                prevData.push("<div class='history-post'> <p> Number: <span class='data'>" + fetchedNum + "</span> </p>" +
                    '<p>Number Word: <b><span class="data">' + fetchedNumWords + '</span></b></p></div>');
                dataCount = prevData.length
                
            }
            $('.history-container').html(prevData)
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

            if(prevData.length>0){
                $('.history-container').css('display','block')
            }
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
        success: function() {
            dataCount = 0;
            fetch_data();
            // display an alert indicating that the history has been cleared
            alert("History cleared");
            // toggle the visibility of 'history-container'
            $('.history-container').children('.history-post').remove()
            // attach a 'one-time' click event to 'submitNum' sinve we toggled it again 
        }
    });
    // prevent the submission
    return false;
}
