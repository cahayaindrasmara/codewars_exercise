function gooseFilter(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    let filter = [];

    for (let i = 0; i < birds.length; i++) {
        // console.log(birds[i])
        let found = false;

        for (let j = 0; j < geese.length; j++) {
            // console.log("check:", geese[j])

            if (birds[i] === geese[j]) {
                found = true;
            }
        }

        if (!found) {
            filter.push(birds[i])
        }
    }

    return filter;

    //kiss
    //return birds.filter(b => !geese.includes(b));
}

console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))
console.log(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]))
console.log(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]))
