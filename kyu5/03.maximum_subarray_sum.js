var maxSequence = function (arr) {
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        //     currentSum = Math.max(arr[i], currentSum + arr[i]);
        //     maxSum = Math.max(maxSum,currentSum)
        console.log("#1:", arr[i])
        let currentSum = 0;
        for (let j = i; j < arr.length; j++) {
            console.log("#2:", arr[j])
            currentSum += arr[j];
            console.log(currentSum)
            if (currentSum > maxSum) {
                maxSum = currentSum
            }
        }

    }
    return maxSum;

    /*
        var maxSequence = function(arr){
            var min = 0, ans = 0, i, sum = 0;
            for (i = 0; i < arr.length; ++i) {
                sum += arr[i];
                min = Math.min(sum, min);
                ans = Math.max(ans, sum - min);
            }
            return ans;
        }

    */
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))//6