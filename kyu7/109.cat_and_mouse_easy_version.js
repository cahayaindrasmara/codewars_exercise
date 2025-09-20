function catMouse(x) {
    let distance = (x.match(/\./g) || []).length;
    console.log(distance)

    return distance > 3 ? "Escaped!" : "Caught!"
}
console.log(catMouse('C....m')); //Escaped!
console.log(catMouse('C..m')); //Caught!
console.log(catMouse('Cm')); //Caught!