//hanya bisa untuk data terurut
function twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        let sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left, right];
        } else if (left < right) {
            left++
        } else {
            right--
        }
    }
}

console.log(twoSum([1, 2, 3], 4)); //[0,2]
console.log(twoSum([1234, 5678, 9012], 14690)); //[1,2]
console.log(twoSum([2, 2, 3], 4)); //[0,1]
console.log(twoSum([2, 3, 1], 3)); //[0,1]