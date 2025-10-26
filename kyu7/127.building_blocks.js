class Block {

    constructor(data) {
        this.data = data || []
        //kiss
        // [this.width, this.length, this.height] = data;
    }

    getWidth() {
        return this.data[0];
    }

    getLength() {
        return this.data[1];
    }

    getHeight() {
        return this.data[2]
    }

    getVolume() {
        return this.data.reduce((acc, recent) => acc * recent, 1)
    }

    getSurfaceArea() {
        return 2 * (this.data[0] * this.data[1] + this.data[0] * this.data[2] + this.data[1] * this.data[2])
    }

}

let block = new Block([2, 4, 6]);
console.log(block.getWidth()); //22
console.log(block.getLength()); //4
console.log(block.getHeight()); //6
console.log(block.getVolume()); //48
console.log(block.getSurfaceArea()); //88
