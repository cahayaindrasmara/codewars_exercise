function solution(str, ending) {
    // str = "abcde"
    // ending = "abc"

    console.log(str.substring(str.length - ending.length))
    // str length = 5
    // ending length = 3

    // str.substring(5 - 3) -> str.substring(2)
    // hasil substring nya -> cde
    if (str.substring(str.length - ending.length) === ending) {
        // jika cde === ending ("cde") -> return true
        return true;
    } else {
        // jika tidak return false
        return false;
    }

    // keep it simple stupid
    // return str.endsWith(ending)
}

console.log(solution("abcde", "cde")); //true
console.log(solution("abcde", "abc")); //false
console.log(solution("abc", "bc")); //true
console.log(solution("ninja", "ja")); //true
console.log(solution("samurai", "ai")); //true


