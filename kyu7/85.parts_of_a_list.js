function partlist(arr) {
    let result = []

    for (let i = 1; i < arr.length; i++) {
        result.push([arr.slice(0, i).join(" "), arr.slice(i - arr.length).join(" ")])
    }
    console.log(result)
}

console.log(partlist(["I", "wish", "I", "hadn't", "come"]));
/*
[
  [ 'I', "wish I hadn't come" ],
  [ 'I wish', "I hadn't come" ],
  [ 'I wish I', "hadn't come" ],
  [ "I wish I hadn't", 'come' ]
]
*/