const convertToNumWords = () => { 
    if (document.getElementById("readNum").value < 0 || document.getElementById("readNum").value > 999999999999){
        console.log("Input cannot be null.")
        return
    }
    let numbers = document.getElementById("readNum").value.split('.')
    let intPart = numbers[0]
    let decPart = numbers[1] || ''

    const intToWords = (num) => {
        console.log(num)
        let words = ''

        if(num >= 100) {
            words+= `${convertOnesToWords(Math.floor(num/100))} hundred`
            num%=100

            if(num > 0) {
                words += ` and `
            }
        }
        
        if(num >= 20) {
            console.log(num)
            words += convertTensToWords(Math.floor(num/10))
            num%=10
            console.log(num)

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
                console.log(j)
                console.log(i)
                console.log(partVal)
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
    // if (decPart) {
    //     wordNum += `and ${convertToNumWords(parseInt(decPart, 10))} cents`;
    // }
    document.getElementById("worded-numbers").textContent = wordNum
}

const clearThis = () => {
    console.log(document.getElementById("readNum").value)
    document.getElementById("readNum").value = ''
}
