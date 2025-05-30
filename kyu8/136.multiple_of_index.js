function multipleOfIndex(array) {
    let result = [];
    if (array[0] === 0) { result.push(array[0]) }

    for (let i = 0; i < array.length; i++) {
        //     if (array[i] === 0) {result.push(array[i])}
        if (array[i] % i === 0) {
            //       console.log(`${array[i]} true`)
            result.push(array[i])
        }
    }

    return result;

    //kiss
    //return array.filter((x,i) => x == 0 || x % i === 0)
}

console.log(multipleOfIndex([22, -6, 32, 82, 9, 25])); //[ -6, 32, 25 ]
console.log(multipleOfIndex([0, 2, 3, 6, 9])); //[ 0, 2, 6 ]
console.log(multipleOfIndex([-56, -85, 72, -26, -14, 76, -27, 72, 35, -21, -67, 87, 0, 21, 59, 27, -92, 68]));
//[ -85, 72, 0, 68 ]