function twoSum(numbers, target) {
    let index1 = 0;
    let index2 = 1;

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                index1 = i;
                index2 = j;
                break;
            }
        }
    }
    return [index1, index2]
}

console.log(twoSum([1, 2, 3], 4));
console.log(twoSum([1234, 5678, 9012], 14690));
console.log(twoSum([2, 2, 3], 4));
console.log(twoSum([2, 3, 1], 3));