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
        $("#readNum").val('');
        });

    // attach a click event to 'delete-history'
    $('#delete-history').click(function() {
        $('.notifier_blur').toggle()
        .css({
            'display' : 'flex',
            'backdrop-filter' : 'blur(15px)',
            'position' : 'fixed',
            'height' : '100%',
            'width' : '100%',
            'justify-content' : 'center',
            'align-items' : 'center'
        })

        $('.delete_notifier').css({
            'display' : 'flex',
            'flex-wrap' : 'wrap',
            'justify-content' : 'space-evenly',
            'align-items' : 'center',
            'background-image' : 'linear-gradient(to bottom right, #ECE3CE, #ECE3CE)',
            'border-radius' : '2.5em',
            'padding-top' : '0.5em',   
            'padding-bottom' : '1em',
            'box-shadow' : '0 0 3px #3A4D39'
                     
        })
        .html(
        `<p id="confirmation">Delete all queries?</p>
        <button id="cancel">Cancel</button>
        <button id="confirm">Confirm</button>`
        );

        $('#confirm').click(function() {
            remove_data()
            $('.notifier_blur').toggle()
            $("#readNum").val('');

        })

        $('#cancel').click(function() {
            remove_data()
            $('.notifier_blur').toggle()
        })
    })
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
        dataType: 'json',
        success: function(data) {
            let prevData = []
            // Iterate through each entry in the JSON response
            for (var i = 0; i < data.length; i++) {
                var fetchedNum = data[i].fetched_num;
                var fetchedNumWords = data[i].fetched_num_words;

                prevData.push("<div class='history-post'> <p> Number: <b><span class='data'>" + fetchedNum + "</span> </b></p>" +
                    '<p>Number word: <b><span class="data">' + fetchedNumWords + '</span></b></p></div>');

            }
            $('.history-container').html(prevData).animate({ scrollTop: $('.history-container')[0].scrollHeight }, 500);
            // scroll to the bottom of the history container with animation
            // $('.history-container')
            
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
            fetch_data();
            // display an alert indicating that the history has been cleared
            // toggle the visibility of 'history-container'
            $('.history-container').children('.history-post').remove()
            // attach a 'one-time' click event to 'submitNum' sinve we toggled it again 
        }
    });
    // prevent the submission
    return false;
}
