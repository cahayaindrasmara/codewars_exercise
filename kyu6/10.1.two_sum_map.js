// menggunakan map
function twoSum(numbers, target) {
    let map = new Map();
    /*
        Map sekarang berisi:
        key = angka
        value = index-nya
    */

    for (let i = 0; i < numbers.length; i++) {
        let selisih = target - numbers[i];
        if (map.has(selisih)) {
            return [map.get(selisih), i];
        }
        map.set(numbers[i], i)
    }
    return []
}

console.log(twoSum([1, 2, 3], 4)); //[0,2]
console.log(twoSum([1234, 5678, 9012], 14690)); //[1,2]
console.log(twoSum([2, 2, 3], 4)); //[0,1]
console.log(twoSum([2, 3, 1], 3)); //[0,1]