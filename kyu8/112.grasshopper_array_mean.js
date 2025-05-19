function findAverage(nums) {
    // let sum = 0;

    // for (let i = 0; i < nums.length; i++) {
    //     sum += nums[i]
    // }
    // console.log(sum)

    // return sum / nums.length

    return nums.reduce((a, b) => a + b, 0) / nums.length
}

console.log(findAverage([1, 3, 5, 7])) 