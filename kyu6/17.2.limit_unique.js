function limitUnique(arr, maxUnique) {
    let result = [];
    let seen = new Set();

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        let num = arr[i]

        if (!seen.has(num)) {
            if (seen.size >= maxUnique) continue;
            seen.add(num);
        }
        result.push(num)
    }
    return result
}

console.log(limitUnique([1, 2, 1, 3, 4, 2, 5], 3));
console.log(limitUnique([10, 11, 10, 12, 13, 11, 14], 3));