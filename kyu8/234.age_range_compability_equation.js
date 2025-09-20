function datingRange(age) {
    let min = age <= 14 ? Math.floor(age - 0.10 * age) : Math.floor(age / 2) + 7;
    let max = age <= 14 ? Math.floor(age + 0.10 * age) : 2 * (age - 7);

    //   console.log(min,max)

    return `${min}-${max}`
}

console.log(datingRange(14)); //12-15
console.log(datingRange(17)); //15-20
console.log(datingRange(40)); //27-66
console.log(datingRange(15)); //14-16
console.log(datingRange(35)); //24-56
console.log(datingRange(10)); //9-11