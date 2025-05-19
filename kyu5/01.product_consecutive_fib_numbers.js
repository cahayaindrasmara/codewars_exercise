function productFib(prod) {
    let num1 = 0;
    let num2 = 1;
    let sum = 0;
    let numbers = [];

    while (num1 * num2 < prod) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        // console.log(num1, num2)
    }

    numbers.push(num1, num2, (num1 * num2) === prod);

    return numbers;
}

console.log(productFib(4895));
/*
            1 1
            1 2
            2 3
            3 5
            5 8
            8 13
            13 21
            21 34
            34 55
            55 89
            [ 55, 89, true ]
*/
console.log(productFib(5895)); //[ 89, 144, false ]
console.log(productFib(74049690)); // [ 6765, 10946, true ]
console.log(productFib(84049690)); //[ 10946, 17711, false ]
console.log(productFib(193864606)); //[ 10946, 17711, true ]
console.log(productFib(447577)); //[ 610, 987, false ]
console.log(productFib(602070)); //[ 610, 987, true ]