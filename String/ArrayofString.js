let words = ["pay","attention","practice","attend"]
let pref="at"
let count =0

for(let i=0;i<words.length;i++){
    if(words[i].startsWith(pref)) count++
}
console.log(count);
