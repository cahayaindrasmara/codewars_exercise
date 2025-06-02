function printerError(s) {
    let regex = s.match(/[^a-m]/g);
    console.log(regex)
    return regex === null ? `0/${s.length}` : `${regex.length}/${s.length}`
}

console.log(printerError("aaabbbbhaijjjm"));
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));