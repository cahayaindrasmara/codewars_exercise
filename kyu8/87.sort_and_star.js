function twoSort(s) {
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s.length; j++) {
            if (s[j] > s[j + 1]) {
                let temp = s[j];
                s[j] = s[j + 1];
                s[j + 1] = temp
            }
        }
    }

    return s[0].split("").join("***")
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]))