function printArray(array) {
    return array.join(",")
}

console.log(printArray([2, 4, 5, 2]));
console.log(printArray([2.0, 4.2, 5.1, 2.2]));
console.log(printArray(["2", "4", "5", "2"]));
console.log(printArray(["hello", "this", "is", "an", "array!"]));
console.log(printArray([{ firstName: "Ruslan", lastName: "López" }, { firstName: "John", lastName: "Doe" }]));
console.log(printArray([true, false]));