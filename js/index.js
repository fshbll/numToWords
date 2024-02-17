const convertToNumWords = () => {
    const rawData = document.getElementById("readNum").value;
    
    if (rawData <= 0) {
        alert("Input cannot be null.");
        return '';
    } else if (rawData > 999999999999999) {
        alert("Exceeded number limit");
        return '';
    }

    const readNum = rawData.split('.');
    const intPart = readNum[0];
    const decPart = Math.round((readNum[1] || 0) * 100) / 100;

    const intToWords = (num) => {
        let words = '';

        if (num >= 100) {
            words += `${convertOnesToWords(Math.floor(num / 100))} hundred`;
            num %= 100;

            if (num > 0) {
                words += ' and ';
            }
        }

        if (num >= 20) {
            words += convertTensToWords(Math.floor(num / 10));
            num %= 10;

            if (num > 0) {
                words += '-';
            }
        }

        if (num > 0) {
            words += (num < 10) ? convertOnesToWords(num) : convertTeensToWords(num);
        }

        return words;
    };

    const streek = [' trillion', ' billion', ' million', ' thousand', ''];
    let words = '';

    const converter = (num) => {
        for (let i = 1000000000000, j = 0; i >= 1; i /= 1000, j++) {
            const partVal = Math.floor(num / i);

            if (partVal > 0) {
                words += intToWords(partVal) + streek[j];
                num %= i;

                if (num > 0) {
                    words += ' ';
                }
            }
        }

        if (num > 0) {
            words += intToWords(num);
        }
    };

    converter(parseInt(intPart, 10));

    let wordNum = words;

    if (decPart) {
        const firstTwoDigits = Math.abs(decPart).toString().slice(0, 2);
        wordNum += ` and ${intToWords(parseInt(firstTwoDigits, 10))} cents`;
    }

    document.getElementById("readNum").value =""
    // document.getElementById("worded-numbers").textContent = wordNum;
    // document.getElementById("copyNum").style.display = "block";

    send_data(rawData, wordNum)
}

const copyData = () => {
    let copiedData = document.getElementById("worded-numbers")

    navigator.clipboard.writeText(copiedData.textContent)

    alert("Copied to Clipboard")
}



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
            // $('.history-div').css({'display': 'block'})
            $('.history-container').animate({scrollTop: $('.history-container')[0].scrollHeight}, 500);
            const clickableElements = document.getElementsByClassName('data')
    
            Array.from(clickableElements).forEach(function(element) {
                element.addEventListener('click', function() {
                navigator.clipboard.writeText(element.textContent)

                alert("Copied to Clipboard");
            });
        });
        }
    })
    return false
}

function remove_data() {
    $.ajax({
        method: 'post',
        url:'../php/database/history_truncate.php',
        success: function (data) {
            $('.history-container').children().remove()
            $('.history-div').css({'display': 'none'})
            alert("History cleared")
        }
    })
    return false
}
