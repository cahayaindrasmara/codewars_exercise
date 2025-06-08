function usdcny(usd) {
    return `${(usd * 6.75).toFixed(2)} Chinese Yuan`
}

console.log(usdcny(15)); //101.25 Chinese Yuan
console.log(usdcny(400)); //2700.00 Chinese Yuan