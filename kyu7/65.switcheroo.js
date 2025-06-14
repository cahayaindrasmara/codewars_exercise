function switcheroo(x) {
    let word = ""
    for (let i = 0; i < x.length; i++) {
        //     console.log("out loop:",x[i]);

        if (x[i] === "a") {
            word += "b"
        } else if (x[i] === "b") {
            word += "a"
        } else {
            word += x[i]
        }
    }

    //   console.log(word)
    return word

    //kiss
    //const switcheroo=x=>x.replace(/[ab]/g,x=>x=="a"?"b":"a")
}

console.log(switcheroo("abc")); //bac
console.log(switcheroo("aabacbaa")); //bbabcabb
console.log(switcheroo("aaabcccbaaa")); //bbbacccabbb
console.log(switcheroo("ccccc")); //ccccc