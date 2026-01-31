// function Dog (breed) {
//   this.breed = breed;
// }

// var snoopy = new Dog("Beagle");

// snoopy.bark = function() {
//   return "Woof";
// };

// var scoobydoo = new Dog("Great Dane");

// scoobydoo.bark = function() {
//   return "Woof";
// };

class Dog{
    constructor(breed) {
        this.breed = breed;
    }

    bark() {
        return 'Woof';
    }
}

const snoopy = new Dog("Beagle");
console.log(snoopy.bark())
const scoobydoo = new Dog("Great Dane");
console.log(scoobydoo.bark())