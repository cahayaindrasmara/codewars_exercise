class God {
    static create() { //keyword static membuat method create() melekat pada class nya lgsg,bukan pada instance, artinya kamu tidak perlu membuat objek seperti let god = new God(); dulu
        return [new Man(), new Woman()]
    }
}

class Human {
    constructor(name) {
        this.name = name;
    }
}

class Man extends Human {
    constructor(name) {
        super(name);
    }

    getGender() {
        if (this.name === "Adam") {
            return "Man"
        }
    }
}

class Woman extends Human {
    constructor(name) {
        super(name);
    }

    getGender() {
        if (this.name === "Hawa") {
            return "Woman";
        }
    }
}

let humans = God.create()
console.log(humans)