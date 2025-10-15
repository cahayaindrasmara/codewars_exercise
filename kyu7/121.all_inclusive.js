function containAllRots(strng, arr) {
    if (strng === "") return true;

    let result = ""
    for (let i = 0; i < strng.length; i++) {
        let first = strng.slice(0, i);
        //     console.log("first:",strng.slice(0,i));
        let second = strng.slice(i);
        //     console.log("second:",strng.slice(i))

        result = second + first;
        console.log(strng, result)
        if (!arr.includes(result)) {
            return false
        }
    }
    return true;

    // another way
    /*
     for (var i = 0; i < str.length; i++) {
        if (arr.indexOf(str.slice(i) + str.slice(0, i)) === -1) {
        return false
        }
    }
    return true
    */

}

console.log(containAllRots("", [])); //true
console.log(containAllRots("", ["bsjq", "qbsj"])); //true
console.log(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"])); //true
console.log(containAllRots("XjYABhR", ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"])) //false