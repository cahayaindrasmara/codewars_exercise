function grader(score) {
    if (score > 1 || score < 0.6) return "F";

    return score >= 0.9 ? "A" : score >= 0.8 ? "B" : score >= 0.7 ? "C" : "D";
}

console.log(grader(0.7)); //"C"
console.log(grader(0.9)); //"A"
console.log(grader(0.6)); //"D"