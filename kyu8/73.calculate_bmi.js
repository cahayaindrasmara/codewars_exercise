function bmi(weight, height) {
    let bmi = weight / height ** 2;
    if (bmi <= 18.5) {
        return "Underweight"
    } else if (bmi <= 25.0) {
        return "Normal"
    } else if (bmi <= 30) {
        return "Overweight"
    } else {
        return "Obese"
    }
}

console.log(bmi(50, 1.80)); //Underweight
console.log(bmi(80, 1.80)); //Normal
console.log(bmi(90, 1.80)); //Overweight
console.log(bmi(100, 1.80)); //Obese