function dataReverse(data) {
    // let splitData = [];

    // for (let i = 0; i < data.length; i += 8) {
    //     splitData.push(data.slice(i, i + 8));
    // }

    // console.log(splitData);

    // let result = splitData.reverse().flat();
    // return result;

    // manual
    let splitData = [];
    let result = [];
    for (let i = 0; i < data.length; i += 8) {
        splitData.push(data.slice(i, i + 8));
    }

    // console.log(splitData)

    for (let i = splitData.length - 1; i >= 0; i--) {
        console.log(splitData[i]);

        for (let j = 0; j < splitData[i].length; j++) {
            result.push(splitData[i][j]);
        }
    }
    console.log(splitData)
    // console.log(result);
    return result;

    /*
    const dataReverse = data => {

        const result = [];

        while(data.length){
            result.push(...data.splice(-8))
        }

        return result;
    }
    */
}


console.log(dataReverse([1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]))