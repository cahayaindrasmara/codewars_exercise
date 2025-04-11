const areaOrPerimeter = function (l, w) {
    if (l === w) {
        return l * w;
    } else {
        return 2 * (l + w);
    }
}

console.log(areaOrPerimeter(3, 3)); //9
console.log(areaOrPerimeter(6, 10)); //32
