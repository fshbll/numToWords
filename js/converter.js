// Function to convert a number to words
const convertToNumWords = () => {
    // Get raw input from the user
    const rawData = document.getElementById("readNum").value;
    
    // Validation checks for input
    if (rawData <= 0) {
        alert("Input cannot be null or an Exponent.");
        return '';
    } else if (rawData > 999999999999999) {
        alert("Exceeded number limit");
        return '';
    }

    // Split the input into integer and decimal parts
    const readNum = rawData.split('.');
    const intPart = readNum[0];
    const decPart = Math.round((readNum[1] || 0) * 100) / 100;

    // Function to convert integer part to words
    const intToWords = (num) => {
        let words = '';

        if (num >= 100) {
            // Convert hundreds place
            words += `${convertOnesToWords(Math.floor(num / 100))} hundred`;
            num %= 100;

            if (num > 0) {
                words += ' and ';
            }
        }

        if (num >= 20) {
            // Convert tens place
            words += convertTensToWords(Math.floor(num / 10));
            num %= 10;

            if (num > 0) {
                words += '-';
            }
        }

        if (num > 0) {
            // Convert ones place or teens
            words += (num < 10) ? convertOnesToWords(num) : convertTeensToWords(num);
        }

        return words;
    };

    // Suffixes for each part (trillion, billion, million, thousand, empty string)
    const streek = [' trillion', ' billion', ' million', ' thousand', ''];
    let words = '';

    // Function to convert the entire number
    const converter = (num) => {
        for (let i = 1000000000000, j = 0; i >= 1; i /= 1000, j++) {
            const partVal = Math.floor(num / i);

            if (partVal > 0) {
                // Convert each part and concatenate
                words += intToWords(partVal) + streek[j];
                num %= i;

                if (num > 0) {
                    words += ' ';
                }
            }
        }

        if (num > 0) {
            words += intToWords(num);
        } else {
            words += ' pesos'
        }
    };

    // Convert the integer part of the number
    converter(parseInt(intPart, 10));

    // Combine the integer and decimal parts for the final result
    let wordNum = words;

    if (decPart) {
        // Convert the first two digits of the decimal part
        const firstTwoDigits = Math.abs(decPart).toString().slice(0, 2);
        wordNum += ` and ${intToWords(parseInt(firstTwoDigits, 10))} cents`;
    }

    // Clear the input field
    document.getElementById("readNum").value = "";

    // Call a function to send data (assuming it's a custom function)
    send_data(rawData, wordNum);
};

// Functions to convert ones, tens, and teens to words
const convertOnesToWords = (ones) => {
    switch (ones) {
        case 1: return 'one';
        case 2: return 'two';
        case 3: return 'three';
        case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six';
        case 7: return 'seven';
        case 8: return 'eight';
        case 9: return 'nine';
        default: return '';
    }       
};

const convertTensToWords = (tens) => {
    switch (tens) {
        case 2: return 'twenty';
        case 3: return 'thirty';
        case 4: return 'forty';
        case 5: return 'fifty';
        case 6: return 'sixty';
        case 7: return 'seventy';
        case 8: return 'eighty';
        case 9: return 'ninety';
        default:  return '';
    }
};

const convertTeensToWords = (teens) => {
    switch (teens) {
        case 10: return 'ten';
        case 11: return 'eleven';
        case 12: return 'twelve';
        case 13: return 'thirteen';
        case 14: return 'fourteen';
        case 15: return 'fifteen';
        case 16: return 'sixteen';
        case 17: return 'seventeen';
        case 18: return 'eighteen';
        case 19: return 'nineteen';
        default: return '';
    }
};
