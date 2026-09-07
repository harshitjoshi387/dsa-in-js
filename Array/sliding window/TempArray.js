/**
 * given an array of temperatur and a number k,
 * find the average of the first window of size k
 */

let arr=[10,20,30,40,50]
let k=2
let sum=0
let avg=0

for(let i=0;i<k;i++){
    sum= sum+arr[i]
    
}
average=sum/k

console.log(average)