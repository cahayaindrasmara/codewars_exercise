function mergeArrays(arr1, arr2) {
    let newArr = arr1.concat(arr2);
    // console.log(newArr)

    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < newArr.length; j++) {
            if (newArr[j + 1] < newArr[j]) {
                let temp = newArr[j];
                newArr[j] = newArr[j + 1];
                newArr[j + 1] = temp;
            }
        }
    }
    // console.log(newArr)

    const uniqueArr = newArr.filter((item, index) => newArr.indexOf(item) === index);
    // console.log(uniqueArr)

    return uniqueArr;

    //kiss
    //return [...new Set(a.concat(b))].sort((a,b)=>a-b)
}

console.log(mergeArrays([1, 2, 3, 4], [5, 6, 7, 8])); //[1,2,3,4,5,6,7,8]
console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2])); //[1,2,3,4,5,6,7,8,9,10]
console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12])); //[1,2,3,4,5,7,9,10,11,12]