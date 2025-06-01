function mango(quantity, price) {
    let free = 0;

    if (quantity >= 3) free = Math.floor(quantity / 3);
    // console.log(free)

    let diskon = free * price;
    let cost = (quantity * price) - diskon;
    return cost;
}

console.log(mango(3, 3));  //6
console.log(mango(9, 5)); //30
console.log(mango(7, 3)); //15
console.log(mango(14, 2)); //20