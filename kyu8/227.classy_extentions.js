class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Cat extends Animal {
    speak() {
        return `${this.name} meows.`
    }
}

let cat = new Cat('Mr Whiskers');
console.log(cat.speak());
let cat2 = new Cat('Lamp');
console.log(cat2.speak());