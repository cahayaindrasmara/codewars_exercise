function arrayLeaders(numbers) {
    let leaders = [];

    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
        let resultRight = 0;

        for (let j = i + 1; j < numbers.length; j++) {
            console.log("inner:", numbers[j]);
            resultRight += numbers[j]
            console.log(resultRight)
        }

        console.log("first:", numbers[i], "right:", resultRight);
        if (numbers[i] > resultRight) leaders.push(numbers[i])
    }

    return leaders;

    //kiss
    //return numbers.filter((a, i) => numbers.slice(i + 1).reduce((sum, b) => sum + b, 0) < a)}
}

console.log(arrayLeaders([1, 2, 3, 4, 0])); //[ 4]
console.log(arrayLeaders([17, 5, 2])); // [17,5,2]
// console.log(arrayLeaders([-1, -29, -26, -2])); //[ -1]
// console.log(arrayLeaders([-36, -12, -27])); // [-36,-12]
// console.log(arrayLeaders([5, -2, 2])); //[ 5, 2 ]
// console.log(arrayLeaders([0, -1, -29, 3, 2])); // [ 0, -1, 3, 2 ]