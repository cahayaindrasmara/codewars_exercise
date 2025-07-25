function queueTime(customers, n) {
    if (customers.length === 0) return 0;

    if (n === 1) return customers.reduce((acc, val) => acc + val, 0);

    //inisialisasi waktu di masing-masing kasir
    let counters = new Array(n).fill(0);
    console.log("counters:", counters)

    //proses tiap pelanggan
    for (let time of customers) {
        //cari kasir dengan waktu tersingkat
        let minIndex = counters.indexOf(Math.min(...counters));
        console.log("min index:", minIndex)
        counters[minIndex] += time;
        console.log("counters after:", counters)
    }

    return Math.max(...counters)
}

// console.log(queueTime([5, 3, 4], 1)); //12
// console.log(queueTime([], 1)); //0
// console.log(queueTime([2, 2, 3, 3, 4, 4], 2)); //9
// console.log(queueTime([1, 2, 3, 4, 5], 100)); //5
// console.log(queueTime([10, 2, 3, 3], 2)); //10
console.log(queueTime([2, 3, 10, 2], 2)); //12