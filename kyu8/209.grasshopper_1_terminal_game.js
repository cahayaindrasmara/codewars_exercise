class Hero {
    // add default values here
    constructor(name = 'Hero') {
        this.name = name;
        this.position = '00';
        this.health = 100;
        this.damage = 5;
        this.experience = 0;
    }
}

let myHero = new Hero('')
console.log(myHero.name);
console.log(myHero.position);
console.log(myHero.health);
console.log(myHero.damage);
console.log(myHero.experience);

console.log(myHero.name);