function countPrefix(words,pref){
    let count=0
    words.forEach(word=>{
        if(word.startsWith(pref)){
            count++
        }
    })
    return count

}
console.log(countPrefix(["pay","attention","practice","attend"],"at"))