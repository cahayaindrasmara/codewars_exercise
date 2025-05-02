function isPalindrome(x) {
    if (x.length <= 1) {
        return true;
    }

    let palindrome = "";

    for (let i = x.length - 1; i >= 0; i--) {
        palindrome += x[i];
    }

    let result = palindrome.toLowerCase() === x.toLowerCase() ? true : false;
    return result;
}

console.log(isPalindrome("a"));
console.log(isPalindrome("aba"));
console.log(isPalindrome("Abba"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("Bob"));
console.log(isPalindrome("Madam"));
console.log(isPalindrome("Abba"));
console.log(isPalindrome(""));