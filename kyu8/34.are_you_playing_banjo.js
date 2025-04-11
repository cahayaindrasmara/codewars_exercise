function areYouPlayingBanjo(name) {
    if (name[0] === "R" || name[0] === "r") {
        return `${name} plays banjo`;
    } else {
        return `${name} does not play banjo`
    }
}

console.log(areYouPlayingBanjo("Adam"));
console.log(areYouPlayingBanjo("Paul"));
console.log(areYouPlayingBanjo("Ringo"));
console.log(areYouPlayingBanjo("Bravo"));
console.log(areYouPlayingBanjo("rolf"));