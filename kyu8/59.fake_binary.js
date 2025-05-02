function fakeBin(x) {
    let result = "";

    for (let i = 0; i < x.length; i++) {
        let number = +x[i];
        // console.log(number)

        if (number < 5) {
            result += "0";
        } else {
            result += "1"
        }
    }
    return result;
}


console.log(fakeBin('45385593107843568')); //01011110001100111
console.log(fakeBin('509321967506747')); //101000111101101
console.log(fakeBin('366058562030849490134388085')); //011011110000101010000011011