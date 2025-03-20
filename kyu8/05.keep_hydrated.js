function litres(time) {
    if (time > 0) {
        return Math.floor(time * 0.5);
    } else {
        return 0;
    }
};

console.log(litres(0));
console.log(litres(1));
console.log(litres(2));
console.log(litres(3));
console.log(litres(4));