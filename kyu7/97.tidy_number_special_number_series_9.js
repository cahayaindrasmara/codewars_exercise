function tidyNumber(n) {
    let digit = n.toString().split("").map(Number);
    console.log(digit)

    for (let i = 0; i < digit.length; i++) {
        if (digit[i] > digit[i + 1]) {
            return false;
        }
    }
    return true;
}

console.log(tidyNumber(12)); //true
console.log(tidyNumber(102)); //false
console.log(tidyNumber(9672)); //false
console.log(tidyNumber(2789)); //true
console.log(tidyNumber(2335)); //true