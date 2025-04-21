function isPangram(string) {
    let lowercase = string.toLowerCase();

    for (let i = 97; i <= 122; i++) {
        let char = String.fromCharCode(i);
        if (!lowercase.includes(char)) {
            return false;
        }
    }

    return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog.")); //true
console.log(isPangram("This is not a pangram.")); false
