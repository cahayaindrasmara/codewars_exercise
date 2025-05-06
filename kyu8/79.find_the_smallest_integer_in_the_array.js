function findSmallestInt(arr) {
    let result = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < result) {
            result = arr[i]
        }
    }
    //   console.log(result)
    return result;
}

console.log(findSmallestInt([78, 56, 232, 12, 8])); //8
console.log(findSmallestInt([78, 56, 232, 12, 18])); //12
console.log(findSmallestInt([78, 56, 232, 412, 228])); //56
console.log(findSmallestInt([78, 56, 232, 12, 0])); //0
console.log(findSmallestInt([1, 56, 232, 12, 8])); //1