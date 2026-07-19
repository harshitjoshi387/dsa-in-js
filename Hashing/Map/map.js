// let map = new Map();

// map.set("ajay", 5);
// map.set("amit", 7);
// map.set("aman", 3);
// map.set("skashi", 8);
// map.set("ajay", 2);   

// console.log(map);
// map.delete("aman")

// console.log(map.size)

// console.log(map)


// for(let value of map.values()){
//     console.log(value)
// }

let arr = [1,2,3,4,5,2,1,3,4,1]
let freqMap = new Map();

for (let char of arr) {
  if (freqMap.has(char)) {
    freqMap.set(char, freqMap.get(char) + 1);  
  } else {
    freqMap.set(char, 1);  
  }
}

console.log(freqMap);