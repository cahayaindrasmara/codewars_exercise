function removeUrlAnchor(url) {
    let regex = url.replace(/#.*/, "");
    return regex;
}

console.log(removeUrlAnchor('www.codewars.com#about')) //'www.codewars.com'
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about')) //'www.codewars.com/katas/?page=1'
console.log(removeUrlAnchor('www.codewars.com/katas/')) //www.codewars.com/katas/