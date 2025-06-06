function multiTable(number) {
    let result = "";

    for (let i = 1; i <= 10; i++) {
        result += `${i} * ${number} = ${i * number}`;
        if (i !== 10) {
            result += "\n"
        }
    }
    return result;
}

console.log(multiTable(5));
/*
1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
*/
console.log(multiTable(1));
/*
1 * 1 = 1
2 * 1 = 2
3 * 1 = 3
4 * 1 = 4
5 * 1 = 5
6 * 1 = 6
7 * 1 = 7
8 * 1 = 8
9 * 1 = 9
10 * 1 = 10
*/
