function smallEnough(a, limit) {
    //   console.log(a , limit)
    let check = true;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > limit) {
            check = false;
        }
    }

    return check;
}

console.log(smallEnough([66, 101], 200)); //true
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)); //false
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107)); //true
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120)); //true
console.log(smallEnough([1, 1, 1, 1, 1, 2], 1)); // false
console.log(smallEnough([78, 33, 22, 44, 88, 9, 6], 87)); // false