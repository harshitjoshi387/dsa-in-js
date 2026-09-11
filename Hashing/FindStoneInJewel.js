function StoneInJewels(jewel,stones){
    const jewelSet = new Set(jewel)
     let count=0

    for(let s of stones){ 
        if(jewelSet.has(s)){
            count ++
        }
    }
    return count

}
console.log(StoneInJewels("ABC","abcABCabcABC"))