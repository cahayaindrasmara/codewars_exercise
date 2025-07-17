function validateCode(code) {
    // console.log(code)
    let string = code.toString();
    return /^[1-3]/.test(string)
}

console.log(validateCode(123)); //true
console.log(validateCode(248)); //true
console.log(validateCode(8)); //false
console.log(validateCode(321)); //true
console.log(validateCode(9453)); //false
console.log(validateCode(21135308)); //true