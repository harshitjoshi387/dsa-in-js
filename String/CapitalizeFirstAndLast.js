let prompt = require('prompt-sync')()

let s= 'kya bhai kya haal chal'
let arr = s.split(' ')
let ans =""

for(let i =0;i<arr.length;i++){
    let words = arr[i]
    let first = words.charAt(0).toUpperCase()
    let mid = words.substring(1,words.length-1)
    let last = words.charAt(words.length -1).toUpperCase()

    ans = ans +(first+mid+last)+" "
}
console.log(ans);
