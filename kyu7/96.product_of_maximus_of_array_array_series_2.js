function maxProduct(numbers, size) {
    let sequence = numbers.sort((a, b) => b - a);
    // console.log(sequence);

    let result = 1;
    for (let i = 0; i < size; i++) {
        result *= sequence[i];
    }

    return result;

    //kiss
    //return numbers.sort((a,b) => b-a).slice(0,size).reduce((acc,n) => acc*n);
}

console.log(maxProduct([4, 3, 5], 2)); //20
console.log(maxProduct([10, 8, 7, 9], 3)); //720
console.log(maxProduct([8, 6, 4, 6], 3)); //288
console.log(maxProduct([10, 2, 3, 8, 1, 10, 4], 5)); //9600
