function dirReduc(arr) {
    // Stack untuk menyimpan arah yang valid
    let stack = [];

    // Object untuk arah yang saling berlawanan
    let opposite = {
        "NORTH": "SOUTH",
        "SOUTH": "NORTH",
        "WEST": "EAST",
        "EAST": "WEST"
    }

    //Loop untuk memproses setiap langkah
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let lastInStack = stack[stack.length - 1];

        // Cek apakah current berlawanan dengan last
        if (opposite[current] === lastInStack) {
            stack.pop() // Hapus arah sebelumnya karena berlawanan
        } else {
            stack.push(current) // Tambahkan arah karena tidak bisa dibatalkan
        }
    }

    return stack
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])); //[ 'WEST' ]
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])); //[ 'NORTH', 'WEST', 'SOUTH', 'EAST' ]
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])); //[]
