function billboard(name, price = 30) {
    let cost = 0
    for (let i = 0; i < name.length; i++) {
        cost += price;
    }
    return cost;
}

console.log(billboard("Jeong-Ho Aristotelis")); //600
console.log(billboard("Abishai Charalampos")); //570
console.log(billboard("Idwal Augustin")); //420
console.log(billboard("Hadufuns John")); //390
console.log(billboard("Zoroaster Donnchadh")); //570
