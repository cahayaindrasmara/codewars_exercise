function solution(str, ending) {
    return ending === "" ? true : str.slice(-ending.length) === ending;

    // keep it simple stupid
    // return str.endsWith(ending)
}

console.log(solution("abcde", "cde")); //true
console.log(solution("abcde", "abc")); //false
console.log(solution("abc", "bc")); //true
console.log(solution("ninja", "ja")); //true
console.log(solution("samurai", "ai")); //true


