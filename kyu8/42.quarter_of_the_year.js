const quarterOf = (month) => {
    // Your code here
    if (month >= 10) {
        return 4;
    } else if (month >= 7) {
        return 3;
    } else if (month >= 4) {
        return 2;
    } else if (month >= 1) {
        return 1;
    }
}

console.log(quarterOf(3)); //1
console.log(quarterOf(8)); //3
console.log(quarterOf(4)); //2
console.log(quarterOf(11)); //4


