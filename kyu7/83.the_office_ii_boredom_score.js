function boredom(staff) {
    let score = 0;
    for (let departement in staff) {
        console.log(staff[departement]);

        switch (staff[departement]) {
            case "accounts":
                score += 1;
                break;
            case "finance":
                score += 2;
                break;
            case "canteen":
                score += 10
                break;
            case "regulation":
                score += 3;
                break;
            case "trading":
                score += 6;
                break;
            case "change":
                score += 6;
                break;
            case "IS":
                score += 8;
                break;
            case "retail":
                score += 5;
                break;
            case "cleaning":
                score += 4;
                break;
            case "pissing about":
                score += 5;
                break;
        }
    }
    console.log("score:", score)

    if (score <= 80) {
        return 'kill me now'
    } else if (score > 80 && score < 100) {
        return 'i can handle this'
    } else {
        return 'party time!!'
    }
}

let team1 = {
    tim: 'change', jim: 'accounts',
    randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
    laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
    mr: 'finance'
}
// console.log(boredom(team1))

let team2 = {
    tim: "IS",
    jim: "finance",
    randy: "pissing about",
    sandy: "cleaning",
    andy: "cleaning",
    katie: "cleaning",
    laura: "pissing about",
    saajid: "regulation",
    alex: "regulation",
    john: "accounts",
    mr: "canteen"
}

console.log(boredom(team2))