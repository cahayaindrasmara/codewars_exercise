function isValidWalk(walk) {
    let step = {};

    if (walk.length === 10) {
        for (let i = 0; i < walk.length; i++) {
            step[walk[i]] = (step[walk[i]] || 0) + 1;
        }

        console.log(step)

        if (step["n"] === step["s"] && step["w"] === step["e"]) {
            return true;
        }
    }
    return false;
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']));