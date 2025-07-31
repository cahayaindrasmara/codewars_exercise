function countSmileys(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);

        if (/^[:;][-~]?[)D]$/.test(arr[i])) {
            count++;
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