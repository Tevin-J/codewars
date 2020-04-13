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
