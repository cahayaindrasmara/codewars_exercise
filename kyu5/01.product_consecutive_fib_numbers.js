function productFib(prod) {
    let num1 = 0;
    let num2 = 1;
    let sum = 0;
    let numbers = [];

    while (num1 * num2 < prod) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }

    numbers.push(num1, num2, (num1 * num2) === prod);

    return numbers;
}

console.log(productFib(4895));
console.log(productFib(5895));
console.log(productFib(74049690));
console.log(productFib(84049690));
console.log(productFib(193864606));
console.log(productFib(447577));
console.log(productFib(602070));