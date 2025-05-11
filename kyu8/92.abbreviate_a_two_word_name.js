function abbrevName(name) {
    let fullName = name.toUpperCase().split(" ");
    //   console.log(fullName);
    return `${fullName[0][0]}.${fullName[1][0]}`
}

console.log(abbrevName("Sam Harris")); //S.H
console.log(abbrevName("Patrick Feenan")); //P.F
console.log(abbrevName("Evan Cole")); //E.C
console.log(abbrevName("P Favuzzi")); //P.F
console.log(abbrevName("David Mendieta")); //D.M