function solve(s) {
    let hasil = [];
    let temp = "";

    for (let i = 0; i < s.length; i++) {
        if (!"aiueo".includes(s[i])) {
            temp += s[i];
        } else {
            if (temp.length > 0) {
                hasil.push(temp);
                temp = "";
            }
        }
    }
    if (temp.length > 0) hasil.push(temp);

    let max = 0;

    for (let i = 0; i < hasil.length; i++) {
        let sum = 0;
        for (let j = 0; j < hasil[i].length; j++) {
            sum += hasil[i].charCodeAt(j) - 96;
        }
        if (sum > max) max = sum;
    }

    return max;
}

console.log(solve("zodiac"));     // Output: 26 ("z")
console.log(solve("strength"));   // Output: 57 ("ngth")
