function twoSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === target) {
      return [arr[left], arr[right]]; 
    } else if (sum < target) {
      left++;   
    } else {
      right--; 
  }

  return null; // koi pair nahi mila
}

console.log(twoSum([2, 7, 11, 15], 9)); // [2, 7]
console.log(twoSum([1, 3, 5, 7], 100)); // null