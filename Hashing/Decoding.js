
// Step 1: Input lena
const n = 5; // kitni mappings hain

const mappings = [
  ["a", "b"],
  ["b", "c"],
  ["c", "d"],
  ["d", "e"],
  ["e", "f"]
];

const message = "abc de"; // encoded message

// Step 2: HashMap (object) banao original -> mapped
const map = {};
for (const [original, mapped] of mappings) {
  map[original] = mapped;
}

console.log(map); 
// { a: 'b', b: 'c', c: 'd', d: 'e', e: 'f' }

// Step 3: Message ke har character ko decode karo
let result = "";
for (const ch of message) {
  if (ch === " ") {
    result += " "; // space ko chhodo waise hi
  } else if (map[ch]) {
    result += map[ch]; // agar mapping mein hai, to replace karo
  } else {
    result += ch; // nahi hai to as-it-is rakho
  }
}

console.log(result); // "bcd ef"