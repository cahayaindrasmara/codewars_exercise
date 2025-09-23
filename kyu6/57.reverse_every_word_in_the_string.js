function reverse(str) {
    return str.split(" ").map((value, index) => index % 2 === 0 ? value : value.split("").reverse().join("")).join(" ").trim()
}

console.log(reverse("Reverse this string, please!")); //Reverse siht string, !esaelp
console.log(reverse("I really don't like reversing strings!")); //I yllaer don't ekil reversing !sgnirts
