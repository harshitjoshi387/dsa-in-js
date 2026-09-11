function Pangram(str) {
    const letter = "abcdefghijklmnopqrstuvwxyz"
    const strSet = new Set(str)
    for (s of letter.split("")) {
        if (!strSet.has(s)) {
            return false
        }
        else {
            return true
        }
    }

}
console.log(Pangram("thefiveboxingwizardsjumpquickly"))