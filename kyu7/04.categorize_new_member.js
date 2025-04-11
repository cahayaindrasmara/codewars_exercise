function openOrSenior(data) {
    let result = []
    for (let i = 0; i < data.length; i++) {
        console.log("looping ke-1:", data[i])

        if (data[i][0] >= 55 && data[i][1] > 7) {
            result.push("Senior");
        } else {
            result.push("Open");
        }
    }
    return result;
}

console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]])) //['Open', 'Senior', 'Open', 'Senior']