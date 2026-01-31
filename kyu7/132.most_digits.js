function findLongest(array) {
    let digit = array.map(item => item.toString());

    let digitLength = digit[0].length;
    let result = digit[0];

    for (let i = 0; i < digit.length; i++) {
        if (digitLength < digit[i].length) {
            digitLength = digit[i].length;
            result = digit[i]
        }
    }

    return Number(result);
}

//simple way
/*
const findLongest = l => l
  .reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);
*/

console.log(findLongest([1, 10, 100])); //100
console.log(findLongest([9000, 8, 800])); //9000
console.log(findLongest([8, 900, 500])); //900
