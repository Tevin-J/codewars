/*/!*7 kyu Sum of Minimums
https://www.codewars.com/kata/5d5ee4c35162d9001af7d699*!/
function sumOfMinimums(arr) {
    let result = 0
    for (let i=0; i<arr.length; i++) {
        let min = Math.min.apply(null, arr[i])
        result+=min
    }
    console.log(result)
}
sumOfMinimums([[1,2,3,4,5], [3,5,8,2], [6,4,9,7]])*/

/*/!*7 kyu Mumbling
https://www.codewars.com/kata/mumbling*!/
function accum(s) {
console.log(
    s.split('')
        .map((char, index) => {
            let repeatedChar = char.repeat(index + 1)
            return repeatedChar.charAt(0).toUpperCase() + repeatedChar.slice(1).toLowerCase()
        })
        .join('-')
)
}
accum('dfgdfg')*/

/*/!*7 kyu vowel count
https://www.codewars.com/kata/vowel-count*!/
function getCount(str) {
    /!*g - глобальное сопоставление
    i-игнорирование регистра при сопоставлении*!/
    let n = str.match(/[aeiou]/gi)
    console.log(n ? n.length : 0)
}
getCount('sEgdenfdbi')*/

/*/!*7 kyu highest and lowest
https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript*!/
function highAndLow(numbers){
       let arr =  numbers.split(' ').sort((a, b) => {
        return b - a
    })
   return `${arr[0]} ${arr[arr.length -1]}`
}
highAndLow('12 4 122')*/

/*/!*7 kyu Get the Middle Character
https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript*!/
function getMiddle(s) {
    let arr = s.split('')
    let res
    for (let i=0; i < arr.length; i++) {
        if (arr.length%2 !== 0) {
           res = arr[(arr.length-1)/2]
        } else {
            res = arr.slice((arr.length/2)-1, (arr.length/2)+1).join('')
        }
    }
    console.log(res)
}
getMiddle("midtf")*/

/*/!*6 kyu Persistent Bugger.
https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/solutions/javascript*!/
function persistense(num) {
    debugger
    const str = num.toString()
    if (str.length === 1) {
        return 0
    }
    const nextNum = str.split('').reduce((a, b) => a * b, 1)
    return 1 + persistense(nextNum)
}
console.log(persistense(39))*/

/*/!*5 kyu Moving Zeros To The End
https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript*!/
const moveZeros = (arr) => {
    console.log(arr.filter((el) => {
        return el !== 0
    }).concat(arr.filter((el) => {
        return el === 0
    })))
}
moveZeros([1,2,0,1,0,1,0,3,0,1])*/

/*/!*7 kyu Shortest Word
https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/solutions/javascript*!/
let findShort = (s) => {
    return s.split(' ').sort((a, b) => a.length - b.length)[0].length
}
console.log(findShort('sdfg fgdfgdfg ertyer fg dfg'))*/

/*/!*7 kyu Basic Calculator
https://www.codewars.com/kata/5296455e4fe0cdf2e000059f/solutions/javascript*!/
function calculate(num1, operation, num2) {
    if (operation === '/' && num2 === 0) {
        return null
    }
    switch (operation) {
        case '+':
            return num1 + num2
            break
        case '-':
            return num1 - num2
            break
        case '*':
            return num1 * num2
            break
        case '/':
            return num1 / num2
            break
        default:
            return null
    }
}
console.log(calculate(3.2,"/",0))*/

/*/!*6 kyu Counting Duplicates
https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/solutions/javascript*!/
function duplicateCount(text) {
    const lowerText = text.toLowerCase()
    const obj = {}
    let count = 0
    for (let i = 0; i < lowerText.length; i++) {
        if (!obj[lowerText[i]]) {
            obj[lowerText[i]] = 1
        } else if (obj[lowerText[i]] < 2) {
            obj[lowerText[i]] += 1
            count += 1
        }
    }
    return count
}
console.log(duplicateCount("aAdfsfbnwasds11"))*/

/*/!*6 kyu Find the odd int
https://www.codewars.com/kata/54da5a58ea159efa38000836/solutions/javascript*!/
function findOdd(numbers) {
    let count = 0
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i] === numbers[j]) {
                count += 1
            }
        }
        if (count % 2 !== 0) {
            return numbers[i]
        }
    }
}
console.log(findOdd([20,20,7]))*/

/*/!*7 kyu Descending Order
https://www.codewars.com/kata/5467e4d82edf8bbf40000155/solutions/javascript*!/
function descendingOrder(num) {
    return Number(num.toString().split('').sort((a, b) => b - a).join(''))
}
console.log(descendingOrder(3672))*/

/*/!*6 kyu Find The Parity Outlier
https://www.codewars.com/kata/5526fc09a1bbd946250002dc/solutions/javascript*!/
function findOutlier(integers) {
    let even = integers.filter(el => el % 2 === 0)
    let odd = integers.filter(el => el % 2 !== 0)
    return even.length === 1 ? even[0] : odd[0]
}
console.log(findOutlier([2,6,8,10,3]))*/

/*/!*6 kyu Stop gninnipS My sdroW!
https://www.codewars.com/kata/5264d2b162488dc400000001/solutions/javascript*!/
function spinWords(s){
    let res = []
    let arr = s.split(' ')
    arr.forEach(word => {
        if (word.length > 4) {
            res.push(word.split('').reverse().join(''))
        } else {
            res.push(word)
        }
    })
    return res.join(' ')
}
console.log(spinWords("Hey fellow warriors"))*/

/*/!*6 kyu Duplicate Encoder
https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/solutions/javascript*!/
function duplicateEncode(word){
    let res = []
    let count = 0
    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < word.length; j++) {
            if (word[i].toLowerCase() === word[j].toLowerCase())  {
                count += 1
            }
        }
        if (count < 2) {
            res.push('(')
        }
        if (count > 1) {
            res.push(')')
        }
        count = 0
    }
    return res.join('')
}
console.log(duplicateEncode("recede"))*/

/*/!*6 kyu Who likes it?
https://www.codewars.com/kata/5266876b8f4bf2da9b000362/solutions/javascript*!/
function likes(names) {
    switch (names.length) {
        case 0:
            return 'no one likes this'
            break
        case 1:
            return `${names[0]} likes this`
            break
        case 2:
            return `${names[0]} and ${names[1]} like this`
            break
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`
            break
        default:
            return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
            break
    }
}
console.log(likes ([])) // must be "no one likes this"
console.log(likes (["Peter"])) // must be "Peter likes this"
console.log(likes (["Jacob", "Alex"])) // must be "Jacob and Alex like this"
console.log(likes (["Max", "John", "Mark"])) // must be "Max, John and Mark like this"
console.log(likes (["Alex", "Jacob", "Mark", "Max"])) // must be "Alex, Jacob and 2 others like this"*/

/*/!*7 kyu You're a square!
https://www.codewars.com/kata/54c27a33fb7da0db0100040e/solutions/javascript*!/
let isSquare = function(n){
    return Math.sqrt(n) % 1 === 0
}
console.log(isSquare(0))
console.log(isSquare(3))*/

/*/!*7 kyu Disemvowel Trolls
https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript*!/
function disemvowel(str) {
    return str.replace(/[aieou]/gi,'')

}
console.log(disemvowel("This website is for losers LOL!"))*/

/*/!*7 kyu Square Every Digit
https://www.codewars.com/kata/546e2562b03326a88e000020/solutions/javascript*!/
function squareDigits(num){
    return Number(num.toString().split('').map(el =>el*el).join(''))
}
console.log(squareDigits(9119))*/

/*/!*6 kyu Sum of Digits / Digital Root
https://www.codewars.com/kata/541c8630095125aba6000c00/solutions/javascript*!/
function digital_root(n) {
    if (String(n).length === 1) return n
    const arrOfNums = [...String(n)]
    const total = arrOfNums.reduce((accum, current) => {
        return (
            accum + Number(current)
        )
    }, 0)
    return digital_root(total)
}
console.log(digital_root(16))
console.log(digital_root(942))*/

/*/!*7 kyu Exes and Ohs
https://www.codewars.com/kata/55908aad6620c066bc00002a/solutions/javascript*!/
function xo(str) {
    let x = str.match(/x/gi)
    let o = str.match(/o/gi)
    return (x && x.length) === (o && o.length)
}
console.log(xo('xooxsogx'))*/

/*/!*7 kyu Complementary DNA
https://www.codewars.com/kata/554e4a2f232cdd87d9000038/solutions/javascript*!/
const DNAStrand = (dna) => {
    return dna
        .replace(/T/g, 'a')
        .replace(/C/g, 'g')
        .replace(/G/g, 'c')
        .replace(/A/g, 't')
        .toUpperCase()
};
console.log(DNAStrand("GTATC"))*/

/*/!*6 kyu Array.diff
https://www.codewars.com/kata/523f5d21c841566fde000009/solutions/javascript*!/
function arrayDiff(a, b) {
    return a.filter(el => !b.includes(el))
}
console.log(arrayDiff([3,4], [3]))*/
