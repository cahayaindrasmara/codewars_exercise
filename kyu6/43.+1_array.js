function upArray(arr) {
    if (arr.length === 0) return null;

    for (let i = 0; i < arr.length; i++) {
        if (arr < 0 || arr > 9) return null;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < 9) {
            arr[i]++;
            return arr;
        } else {
            arr[i] = 0;
        }
    }

    // kalau semua digit 9
    arr.unshift(1);
    return arr;
}

console.log(upArray([0, 1, 3, 7]));
console.log(upArray([9, 9]));
console.log(upArray([2, 3, 9, 9]));