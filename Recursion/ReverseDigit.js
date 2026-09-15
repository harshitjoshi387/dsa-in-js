function reverseDigits(n,rev=0) {
    if(n===0){
        return rev
    }
    return  reverseDigits(Math.floor(n / 10), rev * 10 + (n % 10));
}
console.log(reverseDigits(1234));
