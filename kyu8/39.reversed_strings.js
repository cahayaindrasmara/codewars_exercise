function solution(str) {
    let reverse = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }

    return reverse;
}

console.log(solution("world")); //dlrow
console.log(solution("hello")); //elloh
console.log(solution("")); //
console.log(solution("h")); //h

