function findUniq(arr) {
    let count = {}
    for (num of arr) {
        // console.log(num)
        count[num] = (count[num] || 0) + 1
    }

    for (num in count) {
        // console.log(count[num])
        if (count[num] === 1) {
            return num
        }
    }
    console.log(count)
}

console.log(findUniq([1, 0, 0])); //1
console.log(findUniq([0, 1, 0])); //1
console.log(findUniq([0, 0, 1])); //1
console.log(findUniq([1, 1, 1, 2, 1, 1])); //2
console.log(findUniq([1, 1, 2, 1, 1])); //2
console.log(findUniq([3, 10, 3, 3, 3])); //2