class Ship {
    constructor(draft, crew) {
        this.draft = draft;
        this.crew = crew;
    }

    isWorthIt() {
        let addUnit = this.crew * 1.5;
        let removeWeight = this.draft - addUnit;
        console.log("after remove weight:", removeWeight);

        return removeWeight > 20 ? true : false;
    }
}

let titanic = new Ship(100, 20);
console.log(titanic.isWorthIt())

let boat = new Ship(15, 10);
console.log(boat.isWorthIt())