function calculateAge(a, b) {
    if (a - b === 1 || Math.abs(a - b) === 1) {
        if (a < b) {
            return `You are ${b - a} year old.`
        } else if (a > b) {
            return `You will be born in ${a - b} year.`
        } else {
            return "You were born this very year!"
        }
    } else {
        if (a < b) {
            return `You are ${b - a} years old.`
        } else if (a > b) {
            return `You will be born in ${a - b} years.`
        } else {
            return "You were born this very year!"
        }
    }

    //kiss
    /*
    return a>b?`You will be born in ${a-b} year${a-b==1?"":"s"}.`:
         a<b?`You are ${b-a} year${b-a==1?"":"s"} old.`:
         `You were born this very year!`
    */
}

console.log(calculateAge(2012, 2016)); //You are 4 years old.
console.log(calculateAge(2011, 2012)); //You are 1 year old.
console.log(calculateAge(2000, 1990)); //You will be born in 10 years.
console.log(calculateAge(2000, 2000)); //You were born this very year!



