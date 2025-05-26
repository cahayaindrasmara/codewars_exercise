function capitalize(s) {
    let result = [];
    let odd = ""
    let even = ""

    for (let i = 0; i < s.length; i++) {
        //     console.log(s[i])
        odd += i % 2 === 0 ? s[i].toUpperCase() : s[i]
        even += i % 2 === 1 ? s[i].toUpperCase() : s[i]
    }

    result.push(odd, even)

    return result;

    /*
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
    */
};

console.log(capitalize("abcdef")); //[ 'AbCdEf', 'aBcDeF' ]
console.log(capitalize("codewars")); //[ 'CoDeWaRs', 'cOdEwArS' ]
console.log(capitalize("abracadabra")); //[ 'AbRaCaDaBrA', 'aBrAcAdAbRa' ]
console.log(capitalize("codewarriors")); // [ 'CoDeWaRrIoRs', 'cOdEwArRiOrS' ]