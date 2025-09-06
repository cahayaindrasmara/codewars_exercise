function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}

function longestPalindrome(s) {
    let maxLen = 0;
    let longest = "";

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            let sub = s.slice(i, j);
            console.log(sub)
            if (isPalindrome(sub) && sub.length > maxLen) {
                maxLen = sub.length;
                longest = sub;
            }
        }
    }

    return maxLen;
}

console.log(longestPalindrome("racecar"));
console.log(longestPalindrome("BaaBcd"));