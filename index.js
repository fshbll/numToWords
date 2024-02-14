
const convertToNumWords = () => { 
    if (!document.getElementById("readNum").value || document.getElementById("readNum").value === 0){
        console.log("Input cannot be null.")
        return
    }
    let numbers = document.getElementById("readNum").value.split('.')
    let wordNum;
    let intPart = numbers[0]
    let decPart = numbers[1]

    

    const intToWords = (num) => {
        let words = ''

        const intOnes = num % 10
        const intTens = (num % 100) - intOnes
        const intHundreds =  (num % 1000) - intTens - intOnes
        const intThousands = (num % 10000) - intHundreds - intTens - intOnes

        const convertOnesToWords = (ones) => { 
            switch (ones) {
                case 1: return 'one '
                case 2: return 'two '
                case 3: return 'three '
                case 4: return 'four '
                case 5: return 'five '
                case 6: return 'six '
                case 7: return 'seven '
                case 8: return 'eight '
                case 9: return 'nine '
                default: return ''
            }       

        }

        const convertTensToWords = (tens) => {
            switch (tens) {
                case 2: return 'twenty '
                case 3: return 'thirty '
                case 4: return 'forty '
                case 5: return 'fifty '
                case 6: return 'sixty '
                case 7: return 'seventy '
                case 8: return 'eighty '
                case 9: return 'ninety '
                default:  return ''
            }
        }

        const convertTeensToWords = (teens) => {
            switch (teens) {
                case 0: return 'ten '
                case 1: return 'eleven '
                case 2: return 'twelve '
                case 3: return 'thirteen '
                case 4: return 'fourteen '
                case 5: return 'fifteen '
                case 6: return 'sixteen '
                case 7: return 'seventeen '
                case 8: return 'eighteen '
                case 9: return 'nineteen '
                default: return ''
            }
        }

        //make a statement that handles thousands, millions, billions, trillions, quadrillions

        //handles thousands
        if(intThousands > 0) {
            words += `${convertOnesToWords(intThousands / 1000)}thousand `
        }

        //handles hundreds
        if(intHundreds > 0) {
            words += `${convertOnesToWords(intHundreds / 100)}hundred `
        }

        //handles tens to teens
        if(intTens >= 20) {
            words += convertTensToWords(intTens/10)  
        } else if (intTens >= 10) {
            words += convertTeensToWords(intOnes)
            return words
        }

        //handles ones
        if(intOnes > 0) {
            words += convertOnesToWords(intOnes)
        } 
        // console.log(intTenThousands)
        // console.log(intHundreds)
        // console.log(intTens)
        // console.log(intOnes)
        // console.log(num)

        return words
    }

    wordNum = `${intToWords(intPart)}pesos `
    if(decPart) {
        wordNum += `and ${intToWords(decPart)}cents`
    }
    document.getElementById("worded-numbers").textContent = wordNum
}