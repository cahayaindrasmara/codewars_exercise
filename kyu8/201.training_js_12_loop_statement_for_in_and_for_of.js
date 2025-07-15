function giveMeFive(obj) {
    let result = [];
    for (let data in obj) {
        let key = data;
        let value = obj[data];

        console.log("key: ", key, "value:", value);

        if (key.length === 5) result.push(key);
        if (value.length === 5) result.push(value);
    }

    return result;
}

console.log(giveMeFive({ Pears: "than", apple: "sweet" })); //[ 'Pears', 'apple', 'sweet' ]
console.log(giveMeFive({ Ihave: "enough", money: "to", buy: "a", car: "model" })); //[ 'Ihave', 'money', 'model' ]
console.log(giveMeFive({ Our: "earth", is: "a", beautyful: "world" })); //[ 'earth', 'world' ]

