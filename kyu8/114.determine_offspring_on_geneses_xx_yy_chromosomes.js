function chromosomeCheck(sperm) {
    return sperm == "XY" ? "Congratulations! You're going to have a son." : "Congratulations! You're going to have a daughter."
}

console.log(chromosomeCheck("XX")); // "Congratulations! You're going to have a daughter."
console.log(chromosomeCheck("XY")); // "Congratulations! You're going to have a son."
