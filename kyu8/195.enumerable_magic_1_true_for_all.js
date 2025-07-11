function all(arr, fun) {
    if (arr.length === 0) return true;
    return arr.every(fun);
}

console.log(all([1, 2, 3, 4, 5], function (v) { return v < 9; })); //true
console.log(all([1, 2, 3, 4, 5], function (v) { return v > 9; })); //false
// console.log(all([], function(v) { return v > 9; }));

/*
every mengecek apakah semua elemen memenuhi kondisi
map mengubah setiap elemen menjadi yang baru
*/