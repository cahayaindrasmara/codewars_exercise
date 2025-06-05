function combat(health, damage) {
    let newHealth = health - damage;
    console.log("newHealth:", newHealth);
    return newHealth > 0 ? newHealth : 0;
}

console.log(combat(100, 5)); //95
console.log(combat(92, 8)); //84
console.log(combat(20, 30)); //0

