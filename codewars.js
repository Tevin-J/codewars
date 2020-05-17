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

/*7 kyu Unique string characters
https://www.codewars.com/kata/5a262cfb8f27f217f700000b/solutions/javascript*/
/*function solve(a,b){
    return [...a, ...b].reduce((acc, sym) => (
        acc += a.includes(sym) && b.includes(sym) ? '' : sym
    ), '')
};
console.log(solve("xyab", "xzca"))*/

/*7 kyu Search for letters
https://www.codewars.com/kata/52dbae61ca039685460001ae/solutions/javascript*/
/*function change(string){
    let str = string.toLowerCase()
    return 'abcdefghijklmnopqrstuvwxyz'.split('').map((sym) => {
        return str.indexOf(sym) !== -1 ? 1 : 0
    }).join('')
}
console.log(change("ac **&  bZ"));*/

/*String.prototype.toJadenCase = function () {
    return this.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
};
let str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());*/

/*7 kyu Credit Card Mask
https://www.codewars.com/kata/5412509bd436bd33920011bc/solutions/javascript*/
/*function maskify(cc) {
    let arr = cc.split('')
    for (let i=0; i<arr.length-4; i++) {
        arr[i] = '#'
    }
    return arr.join('')
}
console.log(maskify('4556364607935616'));*/

/*function removeChar(str){
    let arr = str.split('')
    let arr2 = []
    for (let i = 1; i < arr.length - 1; i ++) {
        arr2.push(str[i])
    }
    return arr2.join('')
};
console.log(removeChar('eloquent'));*/

/*/!*7 kyu Sum of two lowest positive integers
https://www.codewars.com/kata/558fc85d8fd1938afb000014/solutions/javascript*!/
function sumTwoSmallestNumbers(numbers) {
    numbers.sort((a, b) => a - b)
    return numbers[0] + numbers[1]
}
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));*/

/*7 kyu Sum of the first nth term of Series
https://www.codewars.com/kata/555eded1ad94b00403000071/solutions/javascript*/
/*function SeriesSum(n){
    let res = 0
    let a = 1
    for (let i=0; i<n; i++) {
        if (i===0) {
            res = 1
        } else {
            a += 3
            res += 1/a
        }
    }
    return res.toFixed(2)
}
console.log(SeriesSum(2));*/

/*7 kyu Remove the minimum
https://www.codewars.com/kata/563cf89eb4747c5fb100001b/solutions/javascript*/
/*function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers))
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)]
}
console.log(removeSmallest([1, 2, 3, 4, 5]));*/

/*const binaryArrayToNumber = (arr) => parseInt(arr.join(''), 2)
console.log(binaryArrayToNumber([0, 1, 1, 0]));*/

/*8 kyu Convert number to reversed array of digits
https://www.codewars.com/kata/5583090cbe83f4fd8c000051/solutions/javascript*/
/*function digitize(n) {
    let arr2 = []
    let arr = n.toString().split('')
    for (let i=0; i<arr.length; i++) {
        arr2.push(Number(arr[i]))
    }
    return arr2.reverse()
}
console.log(digitize(35231));*/

/*6 kyu Arrays Similar
https://www.codewars.com/kata/51e704f2d8dbace389000279/solutions/javascript
function arraysSimilar(arr1, arr2) {
    return JSON.stringify(arr1.sort())===JSON.stringify(arr2.sort())
}
console.log(arraysSimilar([1, 2, 2, 3, 4], [2, 1, 2, 4, 3]));*/

/*7 kyu Sum ALL the arrays!
https://www.codewars.com/kata/5594463eaf1701909c0000d4/solutions/javascript*/
/*function arraySum(arr) {
    const b = arr.toString().split(',')
    let sum = 0
    for (let i = 0; i < b.length; i++) {
        sum += Number.isNaN(Number(b[i])) ? 0 : Number(b[i])
    }
    return sum
}
console.log(arraySum([1, 2, [1, 2]]));*/

/*8 kyu Remove duplicates from list
https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/solutions/javascript*/
/*function distinct(a) {
    const items = {}
    const res = []
    for (let i = 0; i < a.length; i++) {
        if (!items[a[i]]){
            res.push(a[i])
            items[a[i]] = true
        }
    }
    return res
}
function distinct(a) {
  return [...new Set(a)];
}
console.log(distinct([1, 1, 2]));*/

/*7 kyu Write shortest function to calculate Average number of Array
https://www.codewars.com/kata/56c22cdbe0c0f7cae2001789/train/javascript*/
/*const avg = a => a.reduce((acc, cur) => acc + cur) / a.length
console.log(avg([0, 1, 2, 3, 4]));*/

/*5 kyu Valid Parentheses
https://www.codewars.com/kata/52774a314c2333f0a7000688/solutions/javascript*/
/*function validParentheses(parens){
    const stack = []
    const open = ['(', '{', '[']
    const close = [')', '}', ']']

    for (let i = 0; i < parens.length; i++) {
        if (open.includes(parens[i])) {
            stack.push(parens[i])
        } else {
            if (close.indexOf(parens[i]) === open.indexOf(stack[stack.length - 1])) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return stack.length === 0
}
console.log(validParentheses("(())((()())())"));*/
