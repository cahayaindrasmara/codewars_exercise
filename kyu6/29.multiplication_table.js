function multiplicationTable(size) {
    let result = [];
    for (let i = 1; i <= size; i++) {
        console.log(i)
        let number = []
        for (let j = 1; j <= size; j++) {
            console.log("#2:", j);
            number.push(i * j)
        }
        console.log(number)
        result.push(number)
    }

    return result;
}

console.log(multiplicationTable(3)) //[ [ 1, 2, 3 ], [ 2, 4, 6 ], [ 3, 6, 9 ] ]
console.log(multiplicationTable(5))
/*
    [
    [ 1, 2, 3, 4, 5 ],
    [ 2, 4, 6, 8, 10 ],
    [ 3, 6, 9, 12, 15 ],
    [ 4, 8, 12, 16, 20 ],
    [ 5, 10, 15, 20, 25 ]
    ]
*/
