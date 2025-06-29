function Sleigh() { }

Sleigh.prototype.authenticate = function (name, password) {
    return name === "Santa Claus" && password === "Ho Ho Ho!" ? true : false;
}

const sleigh = new Sleigh();
console.log(sleigh.authenticate("Santa", "Ho Ho Ho!"));
console.log(sleigh.authenticate("Santa Claus", "Ho Ho Ho!"));

// kalau kamu ingin sekaligus membuat dan langsung pakai
// console.log(new Sleigh().authenticate("Santa Claus", "Ho Ho Ho!"));
