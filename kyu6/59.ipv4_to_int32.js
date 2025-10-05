function ipToInt32(ip) {
    let digit = ip.split(".");

    let convert = digit.reduce((acc, value, index) => {
        let power = 24 - (index * 8);
        let result = value * (2 ** power);
        console.log(result)

        return acc + result;
    }, 0);

    // console.log(convert);
    return convert;

    //kiss
    // return ip.split(".").reduce(function (int, v) { return int * 256 + +v })
}

console.log(ipToInt32("192.168.1.10")); //3232235786