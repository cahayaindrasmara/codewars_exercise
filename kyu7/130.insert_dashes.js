function insertDash(num) {
    let number = num.toString();
    let result = "";
    for (let i = 0; i < number.length; i++) {
        if (number[i] % 2 === 1 && number[i+1] % 2 === 1) {
            result += number[i]+'-';
        } else {
            result += number[i]
        }
    }
    return result;

    //simple way
    // return num.toString().replace(/[13579](?=[13579])/g, "$&-");
}

console.log(insertDash(454793));
console.log(insertDash(123456));