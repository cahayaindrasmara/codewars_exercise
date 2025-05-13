const binaryArrayToNumber = arr => {
    // let number = 0;
    // let pow = 0;

    // for (let i = arr.length - 1; i >= 0; i--) {
    //     console.log("array:", arr[i])
    //     if (arr[i] === 1) {
    //         number += 2 ** pow;
    //     }
    //     pow++
    // }
    // return number;

    return parseInt(arr.join(""), 2) //,menggunakan radix
}

console.log(binaryArrayToNumber([0, 0, 0, 1])) //1
console.log(binaryArrayToNumber([0, 0, 1, 0])) //2
console.log(binaryArrayToNumber([0, 1, 0, 1])) //5
console.log(binaryArrayToNumber([1, 1, 1, 1])) //15
console.log(binaryArrayToNumber([0, 1, 1, 0])) //6