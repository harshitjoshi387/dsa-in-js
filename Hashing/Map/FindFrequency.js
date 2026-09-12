function findFrequency(arr) {
  const freq = new Map();

  for (let num of arr) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  return freq;
}

console.log(findFrequency([1, 2, 2, 3, 3, 3, 4]));