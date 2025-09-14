function removeRotten(bagOfFruits) {
    if (!bagOfFruits || bagOfFruits.length === 0) return [];

    for (let i = 0; i < bagOfFruits.length; i++) {
        if (bagOfFruits[i].includes("rotten")) {
            bagOfFruits[i] = bagOfFruits[i].slice(6).toLowerCase();
        }
    }

    return bagOfFruits;

    //kiss
    //return arr ? arr.map(x=>x.replace('rotten', '').toLowerCase()) : [] ;

    //with regex
    //let str = "rottenApple rottenBanana rottenCherry";
    // console.log(str.replace(/rotten/g, ""));
}

console.log(removeRotten(["apple", "rottenBanana", "apple"])); //[ 'apple', 'banana', 'apple' ]
console.log(removeRotten(["apple", "banana", "kiwi", "melone", "orange"])); //[ 'apple', 'banana', 'kiwi', 'melone', 'orange' ]
console.log(removeRotten([])); //[]
console.log(removeRotten(null)); //[]
console.log(removeRotten(undefined)); //[]