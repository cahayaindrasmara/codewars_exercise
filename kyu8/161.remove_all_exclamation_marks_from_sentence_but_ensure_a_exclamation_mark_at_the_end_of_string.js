function remove(string) {
    let regex = string.match(/[^\!]/g)
    //   console.log(regex.join("") + "!")
    return regex.join("") + "!"

    //kiss
    // return s.replace(/!/g, '') + "!"
}

console.log(remove("Hi!"));  //Hi!
console.log(remove("Hi!!!")); //Hi!
console.log(remove("!Hi")); //Hi!
console.log(remove("!Hi!")); //Hi!
console.log(remove("Hi! Hi!")); //Hi Hi!
console.log(remove("Hi")); //Hi!