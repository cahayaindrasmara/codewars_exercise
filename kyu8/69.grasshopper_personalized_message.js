function greet(name, owner) {
    return result = (name == owner) ? "Hello boss" : "Hello guest";
};

console.log(greet("Greg", "Daniel")); //"Hello guest"
console.log(greet("Daniel", "Daniel"));//"Hello boss"