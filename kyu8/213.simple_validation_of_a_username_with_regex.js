function validateUsr(username) {
    return /^[a-z0-9_]{4,16}$/.test(username);
}

console.log(validateUsr('asddsa')); //true
console.log(validateUsr('p1pp1')); //true
console.log(validateUsr('p1p_1')); //true
console.log(validateUsr('1234567890abcdefg')); //false