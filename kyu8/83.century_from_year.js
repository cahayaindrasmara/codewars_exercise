function century(year) {
    let count = 0;

    while (year > 0) {
        count++
        year -= 100;
    }

    //   console.log(count)
    return count;
}

console.log(century(1705)); //18
console.log(century(1900)); //19
console.log(century(1601)); //17
console.log(century(2000)); //20
console.log(century(81)); //1




