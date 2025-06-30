function dirReduc(arr) {
    // Stack untuk menyimpan arah yang valid
    /*
    Stack adalah struktur data dengan prinsip LIFO (Last In, First Out).
    
    Metode umum:
    push(item) → Tambah elemen ke atas stack
    pop() → Hapus elemen paling atas
    stack[stack.length - 1] → Ambil elemen paling atas tanpa menghapus
    */
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
        console.log("prev:", prevDirection)
        console.log("stack:", stack)
        console.log("opposite:", opposite[currentDirection])
        console.log("")

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
