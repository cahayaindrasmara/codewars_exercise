function shortenToDate(longDate) {
    return longDate.split(",")[0]

    //barbar
    //return longDate.split(" ").slice(0,3).join(" ").split(",").join(" ").trim()
}

console.log(shortenToDate("Friday May 2, 9am")); //Friday May 2
console.log(shortenToDate("Tuesday January 29, 10pm")); //Tuesday January 29
console.log(shortenToDate("Monday December 25, 10pm")); //Monday December 25
