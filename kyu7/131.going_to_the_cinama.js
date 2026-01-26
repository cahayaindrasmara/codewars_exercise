function movie(card, ticket, perc) {
    let qty = 1;
    let systemA = ticket * qty;
    let systemB = card + ticket * perc;

    while (Math.ceil(systemB) >= systemA) {
        qty++;
        systemA = ticket * qty;
        systemB += ticket * (perc ** qty);
    }
    console.log("qty:", qty, "systemA:", systemA, "systemB:", Math.ceil(systemB))
    return qty;

    /*
    simple way
    const movie = (card, ticket, perc) => {
        let cnt = 0;
        while (ticket * cnt <= Math.ceil(card)) {
            cnt++;
            card += ticket * perc ** cnt;
        }
        return cnt;
    }
    */
}

console.log(movie(500, 15, 0.9));
console.log(movie(100, 10, 0.95));