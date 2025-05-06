function expressionMatter(a, b, c) {
    let exp1 = a + b + c;
    let exp2 = a * b * c;
    let exp3 = (a + b) * c;
    let exp4 = a * (b + c);
    let exp5 = a * b + c;
    let exp6 = a + b * c;

    let arr = [exp1, exp2, exp3, exp4, exp5, exp6];
    let result = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > result) {
            result = arr[i]
        }
    }

    return result;
}

console.log(expressionMatter(2, 1, 2)); //6
console.log(expressionMatter(2, 1, 1)); //4
console.log(expressionMatter(5, 1, 3)); //20
console.log(expressionMatter(3, 5, 7)); //105
console.log(expressionMatter(2, 10, 3)); //60
console.log(expressionMatter(1, 8, 3)); //27
