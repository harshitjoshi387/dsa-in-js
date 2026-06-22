const prompt = require("prompt-sync")();

let s = prompt("Enter a string: ");

let ans = "";

for (let i = 0; i < s.length; i++) {
    let ascii = s.charCodeAt(i);

    if (ascii >= 65 && ascii <= 90) {
        // Uppercase -> Lowercase
        ans = ans + String.fromCharCode(ascii + 32);
    } else if (ascii >= 97 && ascii <= 122) {
        // Lowercase -> Uppercase
        ans = ans + String.fromCharCode(ascii - 32);
    } else {
        // Numbers and special characters
        ans = ans + s[i];
    }
}

console.log(ans);