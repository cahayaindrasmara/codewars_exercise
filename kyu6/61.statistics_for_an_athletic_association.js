function stat(strg) {
    if (strg === "") return "";

    let listStat = strg.split(",");
    //   console.log(listStat);
    let listRunner = listStat.map(value => value.split("|"));
    //   console.log(listRunner);
    let seconds = listRunner.map(([h, m, s]) => (+h * 3600) + (+m * 60) + (+s));
    //   console.log(seconds);

    let max = Math.max(...seconds);
    let min = Math.min(...seconds);
    //   console.log(`${max}, ${min}`);

    let sort = seconds.sort((a, b) => a - b);

    let range = max - min;
    console.log("range:", range);

    let average = seconds.reduce((acc, value) => acc + value, 0) / seconds.length;
    console.log("average:", average);

    let median = seconds.length % 2 === 0 ? (seconds[seconds.length / 2] + seconds[seconds.length / 2 - 1]) / 2 : seconds[Math.floor(seconds.length / 2)]
    console.log("median:", median);

    let stat = [range, average, median];
    console.log(stat);

    let result = [];

    for (let i = 0; i < stat.length; i++) {
        let time = stat[i];
        //     console.log(time);
        let hour = Math.floor(time / 3600);
        console.log("hour:", hour)
        let minute = Math.floor((time % 3600) / 60);
        console.log("minute:", minute)
        let second = Math.floor(time % 60);

        result.push(`${hour > 9 ? hour : "0" + hour}|${minute > 9 ? minute : "0" + minute}|${second > 9 ? second : "0" + second}`)
    }

    //   console.log("result:", result)
    [range, average, median] = result
    return `Range: ${range} Average: ${average} Median: ${median}`;
}

console.log(stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17"))
//Range: 01|01|18 Average: 01|38|05 Median: 01|32|34