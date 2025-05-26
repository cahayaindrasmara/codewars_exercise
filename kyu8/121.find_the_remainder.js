function remainder(n, m) {
    // if (n >= m) return n % m;
    // if (n <= m) return m % n;

    //kiss
    return n > m ? n % m : m % n;
}

console.log(remainder(17, 5)); //2
console.log(remainder(13, 72)); //7
console.log(remainder(1, 0)); //NaN
console.log(remainder(0, 0)); //NaN
console.log(remainder(-13, -13)) //-0
console.log(remainder(0, -1)) //0
console.log(remainder(0, 1)) //NaN