function getAge(inputString) {
    let age = inputString.slice(0, 1);
    return +age
}

console.log(getAge("4 years old"));
console.log(getAge("9 years old"));
console.log(getAge("1 years old"));
