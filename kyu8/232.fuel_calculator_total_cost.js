function fuelPrice(litres, pricePerLitres) {
    let discount = Math.min(Math.floor(litres / 2) * 5, 25);
    // console.log(discount)
    let totalDiscount = (litres * pricePerLitres * 100) - (discount * litres);

    return +(totalDiscount / 100).toFixed(2);
}

console.log(fuelPrice(5, 1.23)); //5.65
console.log(fuelPrice(8, 2.5)); //18.4
console.log(fuelPrice(5, 5.6)); //27.5