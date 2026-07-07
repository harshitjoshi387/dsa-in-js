let prompt = require ("prompt-sync")()
let arr = new array(3)
for(let i=0;i<arr.length;i++){
    arr[i]=new array(2)
}

for (let i=0; i<arr.length; i++){
    for(let j=0;j<arr[i].length;j++){
        arr[i][j]=Number(prompt('enter a value'))
    }
}
for (let i=0; i<arr.length; i++){
    for(let j=0;j<arr[i].length;j++){
        process.stdout.write(arr[i]+[j]+" ")
    }
    console.log()
}