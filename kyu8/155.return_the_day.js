function whatday(num) {
    switch (num) {
        case 1:
            return "Sunday"
        case 2:
            return "Monday"
        case 3:
            return "Tuesday"
        case 4:
            return "Wednesday"
        case 5:
            return "Thursday"
        case 6:
            return "Friday"
        case 7:
            return "Saturday"
        default:
            return "Wrong, please enter a number between 1 and 7"
    }
}

console.log(whatday(1)); //sunday
console.log(whatday(2)); //monday
console.log(whatday(3)); //tuesday
console.log(whatday(8)); //Wrong, please enter a number between 1 and 7