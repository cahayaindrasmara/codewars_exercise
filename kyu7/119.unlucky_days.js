function unluckyDays(year) {
    let sum = 0;
    for (let month = 0; month < 12; month++) {
        let date = new Date(year, month, 13);
        console.log("date:", date.getDay());

        if (date.getDay() === 5) sum++;
    }

    return sum;
}

console.log(unluckyDays(2723));
console.log(unluckyDays(2819));
console.log(unluckyDays(2025));
