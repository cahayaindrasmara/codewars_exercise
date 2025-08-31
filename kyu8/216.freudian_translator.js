function toFreud(string) {
    return string.length > 0 ? string.split(" ").map(text => "sex").join(" ") : "";
}

console.log(toFreud("test")); //sex
console.log(toFreud("This is a test")); //sex sex sex sex
console.log(toFreud("This is a longer test")); //sex sex sex sex sex
