function findShort(s) {
    let word = s.split(" ");
    let minLength = word[0].length;

    for (let i = 0; i < word.length; i++) {
        if (word[i].length < minLength) {
            minLength = word[i].length;
        }
    }

    return minLength;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps")); //3
console.log(findShort("turns out random test cases are easier than writing out basic ones")); //3
console.log(findShort("Let's travel abroad shall we")); //2