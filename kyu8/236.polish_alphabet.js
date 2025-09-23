function correctPolishLetters(string) {
    // let result = ""
    // for (let i = 0; i < string.length; i++) {
    //     console.log(string[i]);

    //     switch (string[i]) {
    //         case "ą":
    //             result += "a";
    //             break;
    //         case "ć":
    //             result += "c";
    //             break;
    //         case "ę":
    //             result += "e";
    //             break;
    //         case "ł":
    //             result += "l";
    //             break;
    //         case "ń":
    //             result += "n";
    //             break;
    //         case "ó":
    //             result += "o";
    //             break;
    //         case "ś":
    //             result += "s";
    //             break;
    //         case "ź":
    //             result += "z";
    //             break;
    //         case "ż":
    //             result += "z";
    //             break;
    //         default:
    //             result += string[i]
    //     }
    // }
    // console.log(result);
    // return result;

    //kiss pakai object
    let polishString = {
        "ą": "a",
        "ć": "c",
        "ę": "e",
        "ł": "l",
        "ń": "n",
        "ó": "o",
        "ś": "s",
        "ź": "z",
        "ż": "z",
    }

    return string.split("").map(value => polishString[value] || value).join("")
}

console.log(correctPolishLetters("Jędrzej Błądziński"));
console.log(correctPolishLetters("Lech Wałęsa"));