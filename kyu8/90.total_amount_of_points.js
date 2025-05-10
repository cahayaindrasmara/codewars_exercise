function points(games) {
    total = 0;
    for (let i = 0; i < games.length; i++) {
        let [a, b] = games[i].split(":").map(Number)
        // console.log(a, b);

        if (a > b) {
            total += 3
        } else if (a < b) {
            total += 0
        } else {
            total += 1
        }
    }

    // console.log(total);
    return total;
}

console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])) //30
console.log(points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])) //10
console.log(points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"])) //0
console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"])) //15
console.log(points(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:4"])) //12

