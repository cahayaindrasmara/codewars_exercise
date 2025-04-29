var min = function (list) {
    let min = list[0];

    for (let i = 0; i < list.length; i++) {
        if (list[i] < min) {
            min = list[i]
        }
    }

    return min;
}

var max = function (list) {
    let max = list[0];

    for (let i = 0; i < list.length; i++) {
        if (list[i] > max) {
            max = list[i]
        }
    }
    return max;
}


console.log(min([-52, 56, 30, 29, -54, 0, -110])); //-110
console.log(min([42, 54, 65, 87, 0])); //0

console.log(max([4, 6, 2, 1, 9, 63, -134, 566])); //566
console.log(max([5])); //5