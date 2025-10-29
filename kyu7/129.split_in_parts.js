var splitInParts = function (s, partLength) {
    let list = []
    for (let i = 0; i < s.length; i += partLength) {
        console.log(s.slice(i, i + partLength))
        list.push(s.slice(i, i + partLength));
    }

    return list.join(" ");

    //kiss
    //s.match(new RegExp(`.{1,${ partLength }}`, 'g')).join(' ');
}

console.log(splitInParts("supercalifragilisticexpialidocious", 3)) //sup erc ali fra gil ist ice xpi ali doc iou s
console.log(splitInParts("helloworld", 1)) //h e l l o w o r l d
console.log(splitInParts("HelloKata", 9)) //HelloKata
