/*
/!*7 kyu Sum of Minimums
https://www.codewars.com/kata/5d5ee4c35162d9001af7d699*!/
function sumOfMinimums(arr) {
    let result = 0
    for (let i=0; i<arr.length; i++) {
        let min = Math.min.apply(null, arr[i])
        result+=min
    }
    console.log(result)
}
sumOfMinimums([[1,2,3,4,5], [3,5,8,2], [6,4,9,7]])
*/

/*
/!*7 kyu Mumbling
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
accum('dfgdfg')
*/
