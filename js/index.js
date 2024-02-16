const convertToNumWords = () => {
    const rawData = document.getElementById("readNum").value;
    
    if (rawData <= 0) {
        document.getElementById("worded-numbers").textContent = "Input cannot be null.";
        return;
    } else if (rawData > 999999999999) {
        document.getElementById("worded-numbers").textContent = "Exceeded number limit";
        return;
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

    const streek = ['billion', 'million', 'thousand', ''];
    let words = '';

    const converter = (num) => {
        for (let i = 1000000000, j = 0; i >= 1; i /= 1000, j++) {
            const partVal = Math.floor(num / i);

            if (partVal > 0) {
                words += intToWords(partVal) + ' ' + streek[j];
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

    document.getElementById("worded-numbers").textContent = wordNum;
    document.getElementById("copyNum").style.display = "block";
    send_value()

}

const copyData = () => {
    let copiedData = document.getElementById("worded-numbers")

    navigator.clipboard.writeText(copiedData.textContent)

    alert("Copied to Clipboard")
} 

function send_value() {
    $.ajax({
        type: 'post',
        url:'history.php',
        data: {
            readNum: "rawData",
            readNumWords: "numWords"
        },
        success: function (data) {
            console.log(data)
        }
    })
    return false
}
