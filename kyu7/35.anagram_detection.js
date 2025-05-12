var isAnagram = function (test, original) {
    const testSort = test.toLowerCase().split("").sort().join("");
    console.log(testSort);
    const originalSort = original.toLowerCase().split("").sort().join("");
    console.log(originalSort);

    return testSort === originalSort ? true : false;
}

console.log(isAnagram("foefet", "toffee")); //true
console.log(isAnagram("Buckethead", "DeathCubek")); //true
console.log(isAnagram("Twoo", "WooT")); //true
console.log(isAnagram("dumble", "bumble")); // false
console.log(isAnagram("ound", "round")); //false
console.log(isAnagram("apple", "pale")); //false