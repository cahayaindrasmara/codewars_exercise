var greet = function (name) {
    let first = name[0].toUpperCase();
    let second = name.slice(1).toLowerCase();

    return `Hello ${first + second}!`
}


console.log(greet("riley")); //Hello Riley!
console.log(greet("BILLY")); //Hello Billy!