class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.info = `${name}s is age ${age}`;
    }

    getInfo() {
        return `${this.name} is age ${this.age}`
    }
}

let john = new Person('John', 34);
console.log(john.info)