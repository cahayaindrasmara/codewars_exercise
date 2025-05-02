function humanYearsCatYearsDogYears(humanYears) {
    let result = [];
    let catYears = 0;
    let dogyears = 0;

    for (let i = 1; i <= humanYears; i++) {
        if (i === 1) {
            catYears = dogyears = 15;
        } else if (i === 2) {
            catYears += 9;
            dogyears += 9;
        } else if (i >= 3) {
            catYears += 4;
            dogyears += 5;
            // return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
        }
    }

    result.push(humanYears, catYears, dogyears);
    return result;
}

console.log(humanYearsCatYearsDogYears(1)); //[ 1, 15, 15 ]
console.log(humanYearsCatYearsDogYears(2)); //[ 2, 24, 24 ]
console.log(humanYearsCatYearsDogYears(3));[3, 28, 29]
