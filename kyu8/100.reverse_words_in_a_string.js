function reverse(string) {
    let word = string.split(" ")
    let result = ""
    for (let i = word.length - 1; i >= 0; i--) {
        result += word[i] + " "
    }
    return result.trim();
}

console.log(reverse('I am an expert at this')); //"this at expert an am I"
console.log(reverse('This is so easy')); //"easy so is This"
console.log(reverse('no one cares')); //"cares one no"
console.log(reverse('')); //""
console.log(reverse('CodeWars')); //"CodeWars"