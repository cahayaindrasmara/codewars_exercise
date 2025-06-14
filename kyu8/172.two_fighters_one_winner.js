class Fighter {
    constructor(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
    }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
    //menentukan attacker dan defender awal
    let attacker = firstAttacker === fighter1.name ? fighter1 : fighter2;
    let defender = attacker.name === fighter1.name ? fighter2 : fighter1;

    while (true) {
        //attacker menyeran defender
        defender.health -= attacker.damagePerAttack;
        console.log(
            `${attacker.name} attacks ${defender.name}; ${defender.name} now has ${defender.health} health.`
        );

        //mengecek apakah defender sudah kalah
        if (defender.health <= 0) {
            return attacker.name;
        }

        //ganti giliran serang
        [attacker, defender] = [defender, attacker]
    }
}

console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harald", 10, 2), "Lew")); //Lew
console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harald", 10, 2), "Harald")); //Harald
console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")); //Lew
console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry")); //Harry
console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry")); //Harald