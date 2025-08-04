function isPangram(string) {
    // let lowercase = string.toLowerCase();

    // for (let i = 97; i <= 122; i++) {
    //     let char = String.fromCharCode(i);
    //     if (!lowercase.includes(char)) {
    //         return false;
    //     }
    // }

    // return true;

    //kiss
    // return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;

    //another way
    // let alphabet = {}

    // for (let i = 0; i < string.length; i++) {
    //     let char = string[i].toLowerCase();

    //     if (/[a-zA-Z]/.test(char)) {
    //         alphabet[char] = (alphabet[char] || 0) + 1;
    //     }
    // }
    // // console.log(alphabet);

    // let totalAlphabet = Object.keys(alphabet).length;
    // return totalAlphabet === 26;

    // menggunakan set 
    let pangram = new Set(
        string.toLowerCase().match(/[a-z]/g)
    )

    console.log(pangram.size);

    return pangram.size === 26;

}

console.log(isPangram("The quick brown fox jumps over the lazy dog.")); //true
console.log(isPangram("This is not a pangram.")); false
