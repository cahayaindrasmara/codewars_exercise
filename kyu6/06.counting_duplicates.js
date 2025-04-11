function duplicateCount(text) {
    let charMap = {};
    let count = 0;

    for (char of text.toLowerCase()) {
        charMap[char] = (charMap[char] || 0) + 1;
        /*
        contoh step by step, misalnya
        iterasi ke-1: char = "a"
        charMap["a"] = (undefined || 0) + 1 -> 0 + 1
        iterasi ke-2: char = "a"
        charMap["a"] = (1 || 0) + 1 -> 1 + 1
        */
    }

    for (char in charMap) {
        if (charMap[char] > 1) {
            count++
        }
    }

    return count;
}

console.log(duplicateCount("")); //0
console.log(duplicateCount("abcde")); //0
console.log(duplicateCount("aabbcde")); //2
console.log(duplicateCount("aabBcde")); //1
console.log(duplicateCount("Indivisibility")); //1
console.log(duplicateCount("Indivisibilities")); //2