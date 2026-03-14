let arr=[1,2,3,7,5]
let target=12;
let count = 0
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]==target){
            count++
        }
    }
}
console.log(count);
