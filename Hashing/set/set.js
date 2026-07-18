// let set = new Set()

// set.add(10)
// set.add(20)
// set.add(30)
// set.add(40)
// set.add(10)


// console.log(set)



// let arr=[1,2,3,1,5,2,3,8]
// let set = new Set()


// for(let i=0;i<arr.length;i++){
//     set.add(arr[i])
// }
// console.log(set);



let arr= [1,3,4,5,3,3,4]

let set = new Set()


for (let i=0;i<arr.length;i++){
    if(set.has(arr[i])){
        set.delete(arr[i])
    }
    else set.add(arr[i])
}

console.log(set);

