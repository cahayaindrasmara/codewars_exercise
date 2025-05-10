function peopleWithAgeDrink(old) {
    console.log(old)
    if (old >= 21) {
        return "drink whisky";
    } else if (old >= 18) {
        return "drink beer"
    } else if (old >= 14) {
        return "drink coke"
    } else {
        return "drink toddy"
    }
};

console.log(peopleWithAgeDrink(22)); //"drink whisky"
console.log(peopleWithAgeDrink(19)); //"drink beer"
console.log(peopleWithAgeDrink(15)); //"drink coke"
console.log(peopleWithAgeDrink(2)); //"drink toddy"
