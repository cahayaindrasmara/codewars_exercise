Object.defineProperty(
    String.prototype,
    "toJadenCase",
    {
        value:
            function toJadenCase() {
                // return this.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

                let result = "";

                for (let i = 0; i < this.length; i++) {
                    if (i === 0 || this[i - 1] === " ") {
                        result += this[i].toUpperCase()
                    } else {
                        result += this[i]
                    }
                }

                return result;
            }
    }
)

console.log("most trees are blue".toJadenCase()) //"Most Trees Are Blue"