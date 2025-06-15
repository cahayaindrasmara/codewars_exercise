function vertMirror(strng) {
    let result = []
    let words = strng.split("\n");
    console.log(words)

    for (let i = 0; i < words.length; i++) {
        let word = words[i].split("").reverse().join("")
        result.push(word)
    }

    return result.join("\n")
}

function horMirror(strng) {
    let words = strng.split("\n")
    console.log(words)

    for (let i = 0; i < Math.floor(words.length / 2); i++) {
        [words[i], words[words.length - i - 1]] = [words[words.length - i - 1], words[i]]
    }

    //kiss, lgsg reverse saja

    return words.join("\n")
}

function oper(fct, s) {
    return fct(s);
}

console.log(oper(vertMirror, "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"));
/*
QHdgSh
oaMDnH
XxNNlC
HxxvRi
AvVTqb
uRySvw
*/

console.log(oper(horMirror, "lVHt\nJVhv\nCSbg\nyeCt"))
/*
yeCt
CSbg
JVhv
lVHt
*/