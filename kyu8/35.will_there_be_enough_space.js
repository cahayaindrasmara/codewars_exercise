function enough(cap, on, wait) {
    let result = cap - on - wait;

    if (result >= 0) {
        return 0;
    } else {
        return Math.abs(result);
    }

    // return (on + wait) - cap;
}

console.log(enough(10, 5, 5)); // 0
console.log(enough(100, 60, 50)); // 10
console.log(enough(20, 5, 5)); // 0