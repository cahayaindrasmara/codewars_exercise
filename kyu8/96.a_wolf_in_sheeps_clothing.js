function warnTheSheep(queue) {
    let count = 0;

    if (queue[queue.length - 1] === "wolf") {
        return "Pls go away and stop eating my sheep"
    }

    for (let i = queue.length - 1; i >= 0; i--) {
        console.log(queue[i])
        if (queue[i] === "wolf") {
            return `Oi! Sheep number ${count}! You are about to be eaten by a wolf!`
        }
        count++
    }
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]))
console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]))
console.log(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]))
console.log(warnTheSheep(["sheep", "wolf", "sheep"]))
console.log(warnTheSheep(["wolf"]))
console.log(warnTheSheep(["sheep", "sheep", "wolf"]))

