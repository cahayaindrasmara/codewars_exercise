function quote(fighter) {
    let nameFighter = fighter.toLowerCase();

    return nameFighter === "conor mcgregor" ? "I'd like to take this chance to apologize.. To absolutely NOBODY!" : "I am not impressed by your performance."
};

console.log(quote('george saint pierre')); //I am not impressed by your performance.
console.log(quote('conor mcgregor')); //I'd like to take this chance to apologize.. To absolutely NOBODY!