function howManydays(month) {
    var days;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            break;
        default:
            days = 28;
            break;
    }
    return days;
}

console.log(howManydays(1)); //31
console.log(howManydays(2)); //28
console.log(howManydays(3)); //31
console.log(howManydays(4)); //30
console.log(howManydays(12)); //31
