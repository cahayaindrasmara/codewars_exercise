function getMiddle(s) {
    const len = s.length;
    const mid = Math.floor(len / 2);

    if (len % 2 === 0) {
        return s.slice(mid - 1, mid + 1);
    } else {
        return s.charAt(mid)
    }
}

console.log(getMiddle("test")); //es
console.log(getMiddle("testing")); //t
console.log(getMiddle("middle")); //dd
console.log(getMiddle("A")); //A