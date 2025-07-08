let maxSubarrayLength = function (arr) {
    let maxSum = 0;
    let maxLength = 0;

    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i])
        let currentSum = 0;
        let currentLength = 0;

        for (let j = i; j < arr.length; j++) {
            currentSum += arr[j];
            currentLength++
            if (currentSum > maxSum) {
                maxSum = currentSum;
                maxLength = currentLength
            }
        }
    }
    return "max length:" + maxLength
}

console.log(maxSubarrayLength([-2, 1, -3, 4, -1, 2, 1, -5, 4])) //4
// console.log(maxSubarrayLength([3, -4, 2, -3, -1, 7, -5])) //-6