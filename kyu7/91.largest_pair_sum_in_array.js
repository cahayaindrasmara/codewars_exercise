function largestPairSum(numbers) {
    numbers.sort((a, b) => b - a);
    // console.log(numbers);
    return numbers[0] + numbers[1]
}

console.log(largestPairSum([10, 14, 2, 23, 19]));
console.log(largestPairSum([-100, -29, -24, -19, 19]));
console.log(largestPairSum([1, 2, 3, 4, 6, -1, 2]));
console.log(largestPairSum([-10, -8, -16, -18, -19]));
console.log(largestPairSum([53, 16, -39, -17, 69, 65, 31, -24, 79, 38, -49, 14, -79, -58, -91, 11, -62, -57, 90, -65, -24, 54, -82, -35, -3, -1, 64, -40, -92, 39, 73, -98, -68, -29, -55, 56]));
console.log(largestPairSum([55, -55, 79, -10, -98, 94, 89, -96, 11, -48, -5, -36, -20, -23, 54, -32, -17, -12, -24, -67, -4, -96, -18, 64, 30, -36, -79, 67, -26, 96, -37]));