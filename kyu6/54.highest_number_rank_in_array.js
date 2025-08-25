function highestRank(arr) {
    let data = {};
    let frequent = [];

    for (let i = 0; i < arr.length; i++) {
        data[arr[i]] = (data[arr[i]] || 0) + 1;
    }
    console.log(data);

    let arrayData = Object.values(data);
    // console.log(arrayData)
    let max = Math.max(...arrayData);
    // console.log(max);

    for (let number in data) {
        if (max === data[number]) {
            frequent.push(number)
        }
    }

    console.log(frequent);

    return frequent.length > 1 ? Math.max(...frequent) : +frequent[0];

    //simmilar way
    // var obj = {};
    // arr.forEach(function (elem) {
    //     if (obj[elem] === undefined)
    //         obj[elem] = 0;
    //     obj[elem]++;
    // });
    // var keys = Object.keys(obj), highest = 0, key;
    // keys.forEach(function (elem) {
    //     if (obj[elem] >= highest) {
    //         highest = obj[elem];
    //         key = elem;
    //     }
    // })
    // return parseInt(key);

    //other way
    // arr.sort((a, b) => arr.filter(val => val === b).length - arr.filter(val => val === a).length || b - a)[0];
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]));
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]));
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]));
