$(document).ready(function() {
    $('#submitNum').one('click', function() {
        $('.history-container').toggle()
    })

    $('#submitNum').click(function() {
        convertToNumWords()
    })

    $('#delete-history').click(function() {
        remove_data()
    })

    
})

function send_data(num, word) {
    $.ajax({
        method: 'post',
        url:'../php/database/history_route.php',
        data: {

            read_num: num,
            read_num_words: word
        },
        success: function (data) {
            fetch_data()
        }
    })
    return false
}

function fetch_data() {
    $.ajax({
        method: 'GET',
        url:'../php/database/fetch_history.php',
        success: function(data) {
            $('.history-container').html(data)
            $('.history-container').animate({scrollTop: $('.history-container')[0].scrollHeight}, 500)
            $('.data').on('click', function() {
                var textToCopy = $(this).text();
                
                navigator.clipboard.writeText(textToCopy)
                  .then(function() {
                    alert("Copied to Clipboard");
                  })
                  .catch(function(error) {
                    console.error('Unable to copy to clipboard', error);
                  });
              });
            }
          });
          return false;
        }

function remove_data() {
    $.ajax({
        method: 'post',
        url:'../php/database/history_truncate.php',
        success: function (data) {
            fetch_data()
            alert("History cleared")
        }
    })
    return false
}
