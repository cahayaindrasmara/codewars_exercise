function mix(s1, s2) {
    //Filtering out all alphabets of the two strings into an array.
    let union = [...new Set((s1 + s2).match(/[a-z]/g) || [])];
    console.log(union)
    //Sorting characters of one occurrence or more.
    let arr1 = s1.match(/[a-z]/g).sort().join('').match(/(.)\1*/g);
    console.log("arr1:", arr1)
    let arr2 = s2.match(/[a-z]/g).sort().join('').match(/(.)\1*/g);
    console.log("arr2:", arr2)
    let cr1, cr2;
    return union.map(e => {
        cr1 = arr1.filter(c => c[0] == e)[0] || '';
        cr2 = arr2.filter(c => c[0] == e)[0] || '';
        return `${cr1.length == cr2.length ? '=' : (cr1.length > cr2.length ? '1' : '2')}:${cr1.length >= cr2.length ? cr1 : cr2}`;
    }).sort((a, b) => b.length == a.length ? (a[0] == b[0] ? a[2].charCodeAt() - b[2].charCodeAt() : a[0].charCodeAt() - b[0].charCodeAt()) : b.length - a.length).filter(x => /([a-z])\1+/g.test(x)).join('/');
}

console.log(mix("Are they here", "yes, they are here"));
console.log(mix("looping is fun but dangerous", "less dangerous than coding"));
console.log(mix(" In many languages", " there's a pair of functions"));
console.log(mix("Lords of the Fallen", "gamekult"));
console.log(mix("codewars", "codewars"));
console.log(mix("A generation must confront the looming ", "codewarrs"));

