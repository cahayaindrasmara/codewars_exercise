function duckDuckGoose(players, goose) {
    let index = (goose - 1) % players.length;
    return players[index].name;
}

class Player {
    constructor(name) {
        this.name = name;
    }
}

let players = [
    new Player("a"),
    new Player("b"),
    new Player("c"),
    new Player("d"),
    new Player("e"),
    new Player("f"),
    new Player("g"),
    new Player("h"),
    new Player("z"),
]

console.log(duckDuckGoose(players, 3)) //c
console.log(duckDuckGoose(players, 1)); //a
console.log(duckDuckGoose(players, 2)); //b
console.log(duckDuckGoose(players, 10)); //z