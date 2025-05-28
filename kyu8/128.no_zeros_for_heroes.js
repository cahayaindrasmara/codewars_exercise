function noBoringZeros(n) {
    // if (n === 0) return 0;

    // while (n % 10 === 0) {
    //     n /= 10;
    // }

    // return n;

    return n === 0 ? n : Number(n.toString().replace(/0+$/, ""))
}

console.log(noBoringZeros(1450)); //145
console.log(noBoringZeros(960000)); //96
console.log(noBoringZeros(1015)); //1015
