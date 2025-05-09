function solution(nums) {
    if (!nums || nums.length === 0) {
        return [];
    }

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] > nums[j + 1]) {
                var temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }

    return nums;
}

console.log(solution([1, 2, 3, 10, 5])); //[ 1, 2, 3, 5, 10 ]
console.log(solution(null)); //[]
console.log(solution([])); //[]