function capitalize(string, indices) {
    let result = "";

    for (let i = 0; i < string.length; i++) {
        let found = false;

        for (let j = 0; j < indices.length; j++) {
            if (i === indices[j]) {
                found = true;
                break;
            }
        }

        if (found) {
            result += string[i].toUpperCase();
        } else {
            result += string[i]
        }
    }

    return result;

    //kiss
    //return [...s].map((x,i)=>arr.includes(i)?x.toUpperCase():x).join('')
}

console.log(capitalize("abcdef", [1, 2, 5])); //"aBCdeF"
console.log(capitalize("abcdef", [1, 2, 5, 100])); //"aBCdeF"
console.log(capitalize("codewars", [1, 3, 5, 50])); //"cOdEwArs"
console.log(capitalize("abracadabra", [2, 6, 9, 10])); //"abRacaDabRA"