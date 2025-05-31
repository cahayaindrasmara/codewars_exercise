function wordsToMarks(string) {
    let sum = 0;

    for (let i = 0; i < string.length; i++) {
        let mark = string.charCodeAt(i) - 96;

        sum += mark;
    }

    return sum;
}

console.log(wordsToMarks("attitude")); //100
console.log(wordsToMarks("friends")); //75
console.log(wordsToMarks("family")); //66
console.log(wordsToMarks("selfness")); //99
console.log(wordsToMarks("knowledge")); //96