function distanceBetweenPoints(a, b) {
    //   rumus euclidean
    //   akar(x2-x1^2 + y2-y1^2)
    console.log(a, b);
    let { x: x1, y: y1 } = a;
    let { x: x2, y: y2 } = b;

    console.log("x1:", x1, "y1:", y1, "x2:", x2, "y2:", y2);

    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    //kiss
    //return Math.hypot(a.x - b.x, a.y - b.y);
}

console.log(distanceBetweenPoints(new Point(1, 6), new Point(4, 2)))