function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
    let listAge = [age1, age2, age3, age4, age5, age6, age7, age8];

    return Math.floor(Math.sqrt(listAge.map((val) => val * val).reduce((a, b) => a + b, 0)) / 2);
}

//kiss
//const predictAge = (...ages) => Math.hypot(...ages) / 2 | 0;

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45)) //86
