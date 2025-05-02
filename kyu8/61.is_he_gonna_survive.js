function hero(bullets, dragon) {
    return dragon * 2 <= bullets ? true : false;
}

console.log(hero(10, 5)); //true
console.log(hero(7, 4)); //false
console.log(hero(4, 5)); //false
console.log(hero(100, 40)); //true