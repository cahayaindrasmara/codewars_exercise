String.prototype.toAlternatingCase() = function () {
    let result = "";

    for (let i = 0; i < this.length; i++) {
        console.log(this[i]);

        if (this[i] === this[i].toUpperCase()) {
            result += this[i].toLowerCase();
        } else if (this[i] === this[i].toLowerCase()) {
            result += this[i].toUpperCase();
        }
    }

    return result;
}

console.log("hello world".toAlternatingCase());