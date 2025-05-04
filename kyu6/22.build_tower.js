function towerBuilder(nFloors) {
    let pyramid = [];

    for (let i = 0; i < nFloors; i++) {
        let spaceCount = nFloors - i - 1;
        let starCount = 2 * i + 1;

        let line = " ".repeat(spaceCount) + "*".repeat(starCount) + " ".repeat(spaceCount);
        pyramid.push(line);
    }

    return pyramid;
}

console.log(towerBuilder(1));
console.log(towerBuilder(2));
console.log(towerBuilder(3));