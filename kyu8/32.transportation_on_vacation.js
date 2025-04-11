function rentalCarCost(d) {
    let amount = 0;

    if (d >= 7) {
        amount = (40 * d) - 50;
    } else if (d >= 3) {
        amount = (40 * d) - 20;
    } else {
        amount = 40 * d;
    }

    return amount;
}

console.log(rentalCarCost(1));
console.log(rentalCarCost(2));
console.log(rentalCarCost(3));
console.log(rentalCarCost(4));
console.log(rentalCarCost(5));
console.log(rentalCarCost(6));
console.log(rentalCarCost(7));
console.log(rentalCarCost(8));
console.log(rentalCarCost(9));
console.log(rentalCarCost(10));
