function disemvowel(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        //     console.log("looping ke-1:", str[i]);

        if (str[i] !== "a" && str[i] !== "i" && str[i] !== "u" && str[i] !== "e" && str[i] !== "o" && str[i] !== "A" && str[i] !== "I" && str[i] !== "U" && str[i] !== "E" && str[i] !== "O") {
            result += str[i];
        }

        // keep it simple stupid
        // if (!"aiueoAIUEO".includes(str[i])) {
        //     result += str[i];
        // }
    }

    return result;
}

console.log(disemvowel("This website is for losers LOL!")); //"Ths wbst s fr lsrs LL!"
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read")); //"N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
console.log(disemvowel("What are you, a communist?")); //"Wht r y,  cmmnst?"