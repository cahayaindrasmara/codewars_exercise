function maxRot(n) {
    let digit = n.toString().split("");
    let max = n;

    for (let i = 0; i < digit.length - 1; i++) {
        let removed = digit.splice(i, 1)[0];
        digit.push(removed);

        let current = parseInt(digit.join(""), 10);
        if (current > max) max = current;
    }

    return max;
}

console.log(maxRot(38458215)); //85821534
console.log(maxRot(195881031)); //988103115
console.log(maxRot(896219342)); //962193428
console.log(maxRot(69418307)); //94183076
