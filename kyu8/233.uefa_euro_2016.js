function uefaEuro2016(teams, scores) {
    let result = scores[0] > scores[1] ? teams[0] : teams[1];
    // console.log(result)

    return scores[0] === scores[1] ? `At match ${teams[0]} - ${teams[1]}, teams played draw.`
        : `At match ${teams[0]} - ${teams[1]}, ${result} won!`

    //kiss
    //const uefaEuro2016 = (c, s) => `At match ${c[0]} - ${c[1]}, ${s[0] == s[1] ? "commands played draw." : (s[0] > s[1] ? c[0] : c[1]) + ' won!'}`;
}

console.log(uefaEuro2016(['Germany', 'Ukraine'], [2, 0])); //At match Germany - Ukraine, Germany won!
console.log(uefaEuro2016(['Belgium', 'Italy'], [0, 2])); //At match Belgium - Italy, Italy won!
console.log(uefaEuro2016(['Portugal', 'Iceland'], [1, 1])); //At match Portugal - Iceland, teams played draw.