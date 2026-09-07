function maxSumSubarray(arr, k) {
  let maxSum = 0;
  let windowSum = 0;

  // Step 1: Pehli window (0 se k-1) ka sum nikaalo
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;

  // Step 2: Window ko slide karo (k se lekar end tak)
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];  // bahar wala minus, andar wala plus
    maxSum = Math.max(maxSum, windowSum);          // max update karo
  }

  return maxSum;
}

console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // 9