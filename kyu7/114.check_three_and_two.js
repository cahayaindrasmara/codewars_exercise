function checkThreeAndTwo(array) {
    let list = {};

    for (let i = 0; i < array.length; i++) {
        list[array[i]] = (list[array[i]] || 0) + 1;
    }

    console.log(list);

    let values = Object.values(list);

    return values.includes(3) && values.includes(2);
}

console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"])); //true
console.log(checkThreeAndTwo(["a", "c", "a", "c", "b"])); //false
console.log(checkThreeAndTwo(["a", "a", "a", "a", "a"])); //false
