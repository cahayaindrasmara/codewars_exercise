function last(x) {
    let char = x.split(" ");
    //   console.log(char);

    let list = [];

    for (let i = 0; i < char.length; i++) {
        //     console.log(char[i][char[i].length - 1]);
        let lastChar = char[i][char[i].length - 1];

        list.push([char[i], lastChar, i])
    }

    //   console.log(list);

    for (let i = 0; i < list.length; i++) {
        console.log(list[i][1]);
        let minIndex = i;
        for (let j = i + 1; j < list.length; j++) {
            console.log("inner:", list[j][1]);

            if (list[j][1] < list[minIndex][1] || list[j][1] === list[minIndex][1] && list[j][2] < list[minIndex][2]) {
                minIndex = j;
            }
        }
        console.log("minIndex", minIndex)

        let temp = list[i];
        list[i] = list[minIndex];
        list[minIndex] = temp;
    }

    //   console.log(list);

    let result = list.map(value => value[0]);
    return result;

    // kiss
}

console.log(last('man i need a taxi up to ubud'))