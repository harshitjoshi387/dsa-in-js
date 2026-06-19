let arr= [9,8,1,4,10,23]
let n= arr.length


for(let i=1;i<n;i++){
    let key =arr[i]
    let j=i-1
    while(j>=0 && arr[j]>key){
        arr[j+1]=arr[j]
        j--
    }
    arr[j+1] =key

}
console.log(arr);
