let s= "naman"
let arr =new Array(128).fill(0)

for(let i=0;i<arr.length;i++){
    let ascii = s.charCodeAt[i]
    arr[ascii]= arr[ascii]+1
}
for (let i=0;i<arr.length;i++){
    if(arr[i]>0){
        console.log(String.fromCharCode(i)+ arr[i])
    }
    
    }