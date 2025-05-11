function gimme(triplet) {
    let min = triplet[0]
    let max = triplet[0]
    let midIndex = 0;

    for (let i = 0; i < triplet.length; i++) {
        if (triplet[i] > max) {
            max = triplet[i];
        }

        if (triplet[i] < min) {
            min = triplet[i]
        }
    }

    for (let i = 0; i < triplet.length; i++) {
        if (triplet[i] !== min && triplet[i] !== max) {
            midIndex = i;
        }
    }

    return midIndex;
}

console.log(gimme([2, 3, 1])); //0
console.log(gimme([5, 10, 14])); //1
console.log(gimme([2.1, 3.2, 1.4])); //0
console.log(gimme([5.9, 10.4, 14.2])); //1
console.log(gimme([-2, -3, -1])); //0
console.log(gimme([-5, -10, -14])); // 1
console.log(gimme([-2, -3.2, 1])); // 0
console.log(gimme([-5.2, -10.6, 14])); // 0


