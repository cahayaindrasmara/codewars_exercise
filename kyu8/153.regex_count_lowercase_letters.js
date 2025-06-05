function lowercaseCount(str) {
    let regex = str.match(/[a-z]/g);
    console.log(regex)
    return regex ? regex.length : 0;
}

console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~")); //3
console.log(lowercaseCount("abcdefghijklmnopqrstuvwxyz")); //26
console.log(lowercaseCount("abcABC123!@€£#$%^&*()hijkl_-+=}{[]|\':;?/>.<,~")); //8
console.log(lowercaseCount("")); //0