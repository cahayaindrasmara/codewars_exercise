function sortByLength(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j].length > array[j + 1].length) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array

    //kiss
    // return array.sort((a,b) => a.length - b.length);
}

console.log(sortByLength(["Beg", "Life", "I", "To"])); //[ 'I', 'To', 'Beg', 'Life' ]
console.log(sortByLength(["", "Moderately", "Brains", "Pizza"])); //[ '', 'Pizza', 'Brains', 'Moderately' ]
console.log(sortByLength(["Longer", "Longest", "Short"])); //[ 'Short', 'Longer', 'Longest' ]