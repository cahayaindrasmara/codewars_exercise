let minSequence = function (arr) {
    let minSum = 0;

    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i])
        let currentSum = 0;
        for (let j = i; j < arr.length; j++) {
            // console.log("inner loop:", arr[j])
            currentSum += arr[j];
            if (currentSum < minSum) {
                minSum = currentSum;
            }
        }
    }
    return "result: " + minSum
}

console.log(minSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(minSequence([3, -4, 2, -3, -1, 7, -5])) //-6
