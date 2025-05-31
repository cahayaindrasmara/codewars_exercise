function meeting(s) {
    let namesArr = s.split(";");
    console.log(namesArr);

    let list = [];

    for (let i = 0; i < namesArr.length; i++) {
        let fullName = namesArr[i].split(":")
        list.push(fullName);
    }

    list.sort((a, b) => {
        let lastCompare = a[1].localeCompare([b[1]]);
        if (lastCompare !== 0) return lastCompare;
        return a[0].localeCompare(b[0])
    })

    console.log(list)

    let result = list.map(([first, last]) => `(${last.toUpperCase()}, ${first.toUpperCase()})`).join("")
    return result;

    //kiss
    //const meeting = s => s.toUpperCase().split(";").map(n => n.split(":").reverse()).sort().map(n => `(${n[0]}, ${n[1]})`).join('');

}

console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))
//(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)