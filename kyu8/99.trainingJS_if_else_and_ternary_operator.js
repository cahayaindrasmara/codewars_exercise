function saleHotdogs(n) {
    return n >= 10 ? n * 90 : n >= 5 && n < 10 ? n * 95 : n * 100;
}

console.log(saleHotdogs(1)); //100
console.log(saleHotdogs(4));  //400
console.log(saleHotdogs(5));  //475
console.log(saleHotdogs(9));  //855
console.log(saleHotdogs(10));  //900
console.log(saleHotdogs(100));  //9000