function findNb(m) {
    let n = 0;
    let total = 0;

    while (total < m) {
        n++;
        total += n ** 3;
    }

    return total === m ? n : -1;
}

console.log(findNb(4183059834009)); //2022
console.log(findNb(24723578342962)); //-1
console.log(findNb(135440716410000)); //4824
console.log(findNb(40539911473216)); //3568
