function solve(s) {
    if (s.length === 0) return [0, 0, 0, 0];

    let uppercase = s.match(/[A-Z]/g) || [];
    let lowercase = s.match(/[a-z]/g) || [];
    let number = s.match(/\d/g) || [];
    let symbols = s.match(/[^A-Za-z0-9]/g) || [];

    return [uppercase.length, lowercase.length, number.length, symbols.length];
}

console.log(solve("")); //[ 0, 0, 0, 0 ]
console.log(solve("a12$s")); //[ 0, 2, 2, 1 ]
console.log(solve("*'&ABCDabcde12345")); //[ 4, 5, 5, 3 ]