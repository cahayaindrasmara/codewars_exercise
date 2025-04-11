function oddOrEven(array) {
    let result = 0;
    for (const number of array) {
        //console.log(number)
        result += number;
    }

    if (result % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
    //console.log("result:", result);
}

console.log(oddOrEven([0, -1, -5])); //even
console.log(oddOrEven([0, -1, -3])); //even
console.log(oddOrEven([-1023, 1, -2])); //even
console.log(oddOrEven([0, 1, 2])); //odd
console.log(oddOrEven([0, 1, 4])); //odd
console.log(oddOrEven([1023, 1, 3])); //odd
console.log(oddOrEven([0, -1, 2])); //odd
console.log(oddOrEven([0, 1, -4])); //odd
console.log(oddOrEven([-1023, -1, 3])); //odd         