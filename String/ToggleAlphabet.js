function toggleAlpha(str){
   return str.split("").map(char => {
    if (char === char.toLowerCase() && char !== char.toUpperCase()) {
        return char.toUpperCase();
    } else if (char === char.toUpperCase() && char !== char.toLowerCase()) {
        return char.toLowerCase();
    } else {
        return char;
    }
   }).join("");
}

console.log(toggleAlpha("AcgDfD"));