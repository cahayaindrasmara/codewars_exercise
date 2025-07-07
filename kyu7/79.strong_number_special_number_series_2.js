function strong(n) {
    let digit = n.toString().split("").map(Number);
    // console.log(digit);

    let sum = 0;
    for (let i = 0; i < digit.length; i++) {
        let factorial = 1;
        // console.log(digit[i]);

        for (let j = digit[i]; j > 0; j--) {
            factorial *= j;
            // console.log("inner loop:", j);
        }
        // console.log(factorial)
        sum += factorial;
    }
    // console.log("sum:", sum);

    return sum === n ? "STRONG!!!!" : "Not Strong !!";

    /*
    mencari factorial dengan rekursif
    function factorial(fnNum){
        if(fnNum <= 1){
        return 1;
        }else{
        return fnNum * factorial(fnNum - 1);
        }
    }
    */
}

console.log(strong(145)); //STRONG!!!!
console.log(strong(2)); //STRONG!!!!
console.log(strong(7)); //Not Strong !!
console.log(strong(93)); //Not Strong !!
console.log(strong(85)); //Not Strong !!

