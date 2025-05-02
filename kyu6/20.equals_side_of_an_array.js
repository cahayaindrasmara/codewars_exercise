function findEvenIndex(arr) {
    // for (let i = 0; i < arr.length; i++) {

    //     let leftSum = 0;
    //     let rightSum = 0;

    //     for (let j = 0; j < i; j++) {
    //         leftSum += arr[j]
    //     }
    //     console.log("kiri", leftSum)

    //     for (let j = i + 1; j < arr.length; j++) {
    //         rightSum += arr[j]
    //     }
    //     console.log("kanan:", rightSum)

    //     if (leftSum === rightSum) {
    //         return i
    //     }
    // }

    // return -1

    // or do this one
    let totalSum = arr.reduce((a, b) => a + b, 0);
    let leftSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let rightSum = totalSum - leftSum - arr[i];
        if (leftSum === rightSum) return i
        leftSum += arr[i]
    }

    return -1
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));