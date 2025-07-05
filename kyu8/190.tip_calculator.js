function calculateTip(amount, rating) {
    console.log(amount, rating)
    switch (rating.toLowerCase()) {
        case "terrible":
            return amount * 0;
        case "poor":
            return Math.ceil(amount * 0.05);
        case "good":
            return Math.ceil(amount * 0.1);
        case "great":
            return Math.ceil(amount * 0.15);
        case "excellent":
            return Math.ceil(amount * 0.2);
        default:
            return "Rating not recognised"
    }
}

console.log(calculateTip(20, "Excellent")); //4
console.log(calculateTip(10, "Terrible")); //0
console.log(calculateTip(26.95, "good")); //3