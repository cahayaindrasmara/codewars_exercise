function getSize(width, height, depth) {
    let surfaceArea = 2 * (height * width + height * depth + depth * width);
    let volumeBox = width * height * depth;

    return [surfaceArea, volumeBox]
}

console.log(getSize(4, 2, 6)); //[88,48]
console.log(getSize(4, 2, 6)[0]); //88
console.log(getSize(4, 2, 6)[1]); //48
console.log(getSize(10, 10, 10)); //[600,100]