function longestConsec(strarr, k) {
    if (!strarr || strarr.length === 0 || k > strarr.length || k <= 0) {
        return "hi"
    }

    let arr = [];

    for (let i = 0; i < strarr.length - (k - 1); i++) {
        // console.log(strarr[i])

        let concat = "";
        for (let j = 0; j < k; j++) {
            concat += strarr[i + j]
        }
        // console.log("concat:", concat)
        arr.push(concat);
    }
    // console.log(arr)

    let longest = arr[0];

    for (const char of arr) {
        if (char.length > longest.length) {
            longest = char
        }
    }

    return longest;
}

console.log(longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2)); //folingtrashy
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3)); //ixoyx3452zzzzzzzzzzzz
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2)); "hi"
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15)); //"hi"
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0)); //"hi"


