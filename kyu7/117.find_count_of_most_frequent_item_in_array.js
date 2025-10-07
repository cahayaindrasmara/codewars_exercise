function mostFrequentItemCount(collection) {
    if (collection.length === 0) return 0;

    let item = {};
    for (let i = 0; i < collection.length; i++) {
        item[collection[i]] = (item[collection[i]] || 0) + 1;
    }

    console.log(item);

    return Math.max(...Object.values(item));
}

console.log(mostFrequentItemCount([3, -1, -1]));
console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]));
console.log(mostFrequentItemCount([]));
