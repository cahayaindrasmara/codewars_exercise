function minValue(values) {
    let form = new Set(values);
    console.log("form:", form)

    let formArray = [...form]
    console.log(formArray)

    return +formArray.sort((a, b) => a - b).join("")
}

console.log(minValue([1, 9, 3, 1, 7, 4, 6, 6, 7]))