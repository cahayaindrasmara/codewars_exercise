const natoList = {
    "A": "Alfa",
    "B": "Bravo",
    "C": "Charlie",
    "D": "Delta",
    "E": "Echo",
    "F": "Foxtrot",
    "G": "Golf",
    "H": "Hotel",
    "I": "India",
    "J": "Juliett",
    "K": "Kilo",
    "L": "Lima",
    "M": "Mike",
    "N": "November",
    "O": "Oscar",
    "P": "Papa",
    "Q": "Quebec",
    "R": "Romeo",
    "S": "Sierra",
    "T": "Tango",
    "U": "Uniform",
    "V": "Victor",
    "W": "Whiskey",
    "X": "Xray",
    "Y": "Yankee",
    "Z": "Zulu"
}

function toNato(words) {
    let result = [];
    words = words.toUpperCase();

    for (let i = 0; i < words.length; i++) {
        if (/[A-z]/.test(words[i])) {
            result.push(natoList[words[i]])
        } else if (/[,.!?]/.test(words[i])) {
            result.push(words[i])
        }
    }

    return result.join(" ");
}

console.log(toNato("If you can read")); //India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta
console.log(toNato("go for it!")); // Golf Oscar Foxtrot Oscar Romeo India Tango !
console.log(toNato("T VFDj CWI jktuP xBl EhsA bOocLGDen QONrrMOer MyfNVNVN"));
/*
Tango Victor Foxtrot Delta Juliett Charlie Whiskey India Juliett Kilo Tango Uniform Papa Xray Bravo Lima Echo Hotel Sierra Alfa Bravo Oscar 
Oscar Charlie Lima Golf Delta Echo November Quebec Oscar November Romeo Romeo Mike Oscar Echo Romeo Mike Yankee Foxtrot November Victor Nove
mber Victor November
*/