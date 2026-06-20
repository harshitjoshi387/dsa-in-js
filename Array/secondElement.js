let arr = [10,20,30,40,50]

let firstElement = -Infinity
let secondElement = -Infinity

for (let i = 0; i < arr.length; i++) {

    if(arr[i] > firstElement){

        secondElement = firstElement
        firstElement = arr[i]

    }
    else if(arr[i] > secondElement && arr[i] < firstElement){

        secondElement = arr[i]

    }

}

console.log(`second element = ${secondElement}`)