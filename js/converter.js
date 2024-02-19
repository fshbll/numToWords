// function to convert number to words
const convertToNumWords = () => {
    // get raw input
    const rawData = document.getElementById("readNum").value;
    
    // validation checks
    if(/[a-zA-Z]/.test(rawData)) {
        alert("Invalid Input");
        return '';
    } else if (rawData <= 0) {
        alert("Input cannot be null");
        return '';
    } else if (rawData > 999999999999999.99) {
        alert("Exceeded number limit");
        return '';
    }

    // split the input into integer and decimal parts
    const readNum = rawData.split('.');
    const intPart = readNum[0];
    const decPart = Math.round((readNum[1] || 0) * 100) / 100;
    // function to convert integer part to words
    const intToWords = (num) => {
        let words = '';

        if (num >= 100) {
            // convert hundreds
            words += `${convertOnesToWords(Math.floor(num / 100))} Hundred`;
            num %= 100;

            if (num > 0) {
                words += ' and ';
            }
        }

        if (num >= 20) {
            // convert tens
            words += convertTensToWords(Math.floor(num / 10));
            num %= 10;

            if (num > 0) {
                words += '-';
            }
        }

        if (num > 0) {
            // convert ones or teens
            words += (num < 10) ? convertOnesToWords(num) : convertTeensToWords(num);
        }

        return words;
    };

    // suffixes for each part (trillion, billion, million, thousand)
    const streek = [' Trillion', ' Billion', ' Million', ' Thousand', ''];
    let words = '';

    // function to convert the entire number
    const converter = (num) => {
        for (let i = 1000000000000, j = 0; i >= 1; i /= 1000, j++) {
            const partVal = Math.floor(num / i);

            if (partVal > 0) {
                // convert each part and append 
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
        else {
            words += ' Pesos'
        }
    };

    // convert the integer part of the number
    converter(parseInt(intPart, 10));

    // combine the integer and decimal parts for the final result
    let wordNum = words;

    if (decPart) {
        // Convert the first two digits of the decimal part
        const firstTwoDigits = Math.abs(decPart).toString().slice(0, 2);
        wordNum += ` and ${intToWords(parseInt(firstTwoDigits, 10))} Cents`;
    }

    // Call a function to send data (assuming it's a custom function)
    send_data(rawData, wordNum);
};

// Functions to convert ones, tens, and teens to words
const convertOnesToWords = (ones) => {
    switch (ones) {
        case 1: return 'One';
        case 2: return 'Two';
        case 3: return 'Three';
        case 4: return 'Four';
        case 5: return 'Five';
        case 6: return 'Six';
        case 7: return 'Seven';
        case 8: return 'Eight';
        case 9: return 'Nine';
        default: return '';
    }       
};

const convertTensToWords = (tens) => {
    switch (tens) {
        case 2: return 'Twenty';
        case 3: return 'Thirty';
        case 4: return 'Forty';
        case 5: return 'Fifty';
        case 6: return 'Sixty';
        case 7: return 'Seventy';
        case 8: return 'Eighty';
        case 9: return 'Ninety';
        default:  return '';
    }
};

const convertTeensToWords = (teens) => {
    switch (teens) {
        case 10: return 'Ten';
        case 11: return 'Eleven';
        case 12: return 'Twelve';
        case 13: return 'Thirteen';
        case 14: return 'Fourteen';
        case 15: return 'Fifteen';
        case 16: return 'Sixteen';
        case 17: return 'Seventeen';
        case 18: return 'Eighteen';
        case 19: return 'Nineteen';
        default: return '';
    }
};
