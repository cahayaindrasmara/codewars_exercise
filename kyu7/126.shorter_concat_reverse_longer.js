function shorterReverseLonger(a, b) {
    if (a.length === b.length || a.length > b.length) {
        return b + a.split("").reverse().join("") + b;
    } else {
        return a + b.split("").reverse().join("") + a;
    }

    // kiss
    //  if (a.length >= b.length) [a,b] = [b,a];    
    //   return a + b.split('').reverse().join('') + a;
}

console.log(shorterReverseLonger("first", "abcde")); //abcdetsrifabcde
console.log(shorterReverseLonger("hello", "bau")); //bauollehbau
console.log(shorterReverseLonger("fghi", "abcde")); //fghiedcbafghi