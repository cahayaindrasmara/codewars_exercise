function countSmileys(arr) {
    let count = 0;

    for (const smile of arr) {
        if (smile.match(/^[:;][-~]?[)D]/)) {
            count++
        }
    }

    return count;
}

console.log(countSmileys([])); //0
console.log(countSmileys([':D', ':~)', ';~D', ':)'])); //4
console.log(countSmileys([':)', ':(', ':D', ':O', ':;'])); //2
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])); //1

// ^      -> awal string
// [:;]   -> mata harus : atau ;
// [-~]?  -> opsional hidung - atau ~
// [)D]   -> mulut harus ) atau D
// $      -> akhir string