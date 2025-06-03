function hello(name) {
    let string = "";

    if (name) {
        for (let i = 0; i < name.length; i++) {
            if (i === 0) {
                string += name[i].toUpperCase();
            } else if (name[i] === name[i].toUpperCase()) {
                string += name[i].toLowerCase();
            } else {
                string += name[i]
            }
        }
    } else {
        return "Hello, World!"
    }

    return `Hello, ${string}!`

    //kiss
    //`Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;
}

console.log(hello("John"));
console.log(hello("Alice"));
console.log(hello(""));
console.log(hello("johN"));