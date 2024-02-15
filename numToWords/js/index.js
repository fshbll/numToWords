const convertToNumWords = () => { 
    let rawData = document.getElementById("readNum").value
    if (rawData < 0){
        console.log(document.getElementById("readNum").length())
        console.log("Input cannot be null.")
        return
    }
    let readNum = document.getElementById("readNum").value.split('.')
    let intPart = readNum[0]
    let decPart = Math.round(readNum[1] * 100) / 100 || ''

    const intToWords = (num) => {
        let words = ''

        if(num >= 100) {
            words+= `${convertOnesToWords(Math.floor(num/100))} hundred`
            num%=100

            if(num > 0) {
                words += ` and `
            }
        }
        
        if(num >= 20) {
            words += convertTensToWords(Math.floor(num/10))
            num%=10

            if(num > 0){
                words += `-`
            }
        }

        if(num > 0) {
            if (num < 10) {
                words += convertOnesToWords(num) 
            } else {
                words += convertTeensToWords(num)
            }
        } 

        return words
    }

    const streek = ['billion', 'million','thousand',''];

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
    }

    converter(parseInt(intPart, 10));
    let wordNum = words
    if (decPart) {
        wordNum += `and ${converter(parseInt(decPart))} cents`;
    }

    document.getElementById("worded-numbers").textContent = wordNum
}

const clearThis = () => {
    document.getElementById("readNum").value = ''
    document.getElementById("worded-numbers").textContent = ''
}
