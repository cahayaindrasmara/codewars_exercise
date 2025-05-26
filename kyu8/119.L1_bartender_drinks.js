function getDrinkByProfession(param) {
    let profession = param.toLowerCase();

    switch (profession) {
        case "jabroni":
            return "Patron Tequila"
        case "school counselor":
            return "Anything with Alcohol"
        case "programmer":
            return "Hipster Craft Beer"
        case "bike gang member":
            return "Moonshine"
        case "politician":
            return "Your tax dollars"
        case "rapper":
            return "Cristal"
        default:
            return "Beer"
    }
}

console.log(getDrinkByProfession("jabrOni")); //Patron Tequila
console.log(getDrinkByProfession("scHOOl counselor")); //Anything with Alcohol
console.log(getDrinkByProfession("prOgramMer")); //Hipster Craft Beer
console.log(getDrinkByProfession("bike ganG member")); //Moonshine
console.log(getDrinkByProfession("poLiTiCian")); //Your tax Dollars
console.log(getDrinkByProfession("rapper")); //Cristal
console.log(getDrinkByProfession("pundit")); // Beer
console.log(getDrinkByProfession("pug")); // Beer