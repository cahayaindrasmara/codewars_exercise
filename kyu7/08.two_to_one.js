function longest(s1, s2) {
    let result = "";

    for (let i = 97; i <= 122; i++) {
        let char = String.fromCharCode(i);
        // console.log("huruf:", char)

        if (s1.includes(char) || s2.includes(char)) {
            result += char;
        }
    }

    return result;

    // return [...(new Set(s1 + s2))].sort().join('');
    // keep it simple stupid
}

console.log(longest("aretheyhere", "yestheyarehere")); //aehrsty
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")); //abcdefghilnoprstu
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")); //abcdefghilnoprstu