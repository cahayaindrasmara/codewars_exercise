function ensureQuestion(s) {
    return s.includes("?") ? s : s + "?";
}

console.log(ensureQuestion("")); //?
console.log(ensureQuestion("Yes")); //Yes?
console.log(ensureQuestion("No?")); //No?