let Ghost = function () {
    this.colors = ["white", "red", "blue", "purple"];
    this.color = this.colors[Math.floor(Math.random() * this.colors.length)]
}

let ghost = new Ghost();
console.log(ghost.colors)
console.log(ghost.color)