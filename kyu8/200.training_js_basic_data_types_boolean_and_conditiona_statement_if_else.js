function trueOrFalse(val) {
    if (val) return "true";
    else return "false";
}

let a = 1, b = 2, c = 1;
console.log(trueOrFalse(a > b)); //"false"
console.log(trueOrFalse(a === c)); "true"