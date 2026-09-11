function StoneInJewel(j, s) {
    const jewelSet = new Set(j)
    let count = 0
    for (let stone of s) {
        if (jewelSet.has(stone)) {
            count++
        }
    }
    return count;
}
console.log(StoneInJewel("ABC", "abcABCabcABC"))  