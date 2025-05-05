function accum(s) {
    let char = [];

    for (let i = 0; i < s.length; i++) {
        char.push(s[i])
    }
    //   console.log(char); // ini bisa menggunakan split

    let charPow = [];
    for (let i = 0; i < char.length; i++) {
        //     console.log(char[i].repeat(i+1));
        charPow.push(char[i].toLowerCase().repeat(i + 1));
    }
    //   console.log(charPow);

    let charJoin = charPow.join("-");
    //   console.log(charJoin);

    let result = ""
    for (let i = 0; i < charJoin.length; i++) {
        if (i === 0 || charJoin[i - 1] === "-") {
            result += charJoin[i].toUpperCase()
        } else {
            result += charJoin[i]
        }
    }

    //   console.log(result);
    return result;

    // return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

console.log(accum("abcd"));
console.log(accum("ZpglnRxqenU"));
console.log(accum("NyffsGeyylB"));