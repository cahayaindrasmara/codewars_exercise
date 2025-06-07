function array(string) {
    if (string.split(",").length <= 2) return null
    return string.split(",").slice(1, -1).join(" ")
}

console.log(array("")); //null
console.log(array("1")); //null
console.log(array("A1,B2")); //null
console.log(array("1,2,3")); //"2"
console.log(array("1,2,3,4,5")); //" 2 3 4"
console.log(array("A1,B2,C3,D4,E5")); //"B2 C3 C4"