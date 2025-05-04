function correct(string) {
    let result = "";

    for (let i = 0; i < string.length; i++) {
        //     console.log(string[i]);
        if (string[i] === "0") {
            result += "O";
        } else if (string[i] === "1") {
            result += "I";
        } else if (string[i] === "5") {
            result += "S"
        } else {
            result += string[i]
        }
    }
    return result;

    // s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S') //kiss
}

console.log(correct("L0ND0N")); //LONDON
console.log(correct("DUBL1N")); //DUBLIN
console.log(correct("51NGAP0RE")); //SINGAPORE
console.log(correct("BUDAPE5T")); //BUDAPEST
console.log(correct("PAR15")); //PARIS