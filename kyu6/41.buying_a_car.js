function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
    if (startPriceOld >= startPriceNew) {
        return [0, Math.round(startPriceOld - startPriceNew)];
    }

    let selisih = startPriceOld - startPriceNew;
    let available = 0;
    let saving = 0;
    let month = 0;
    let loss = percentLossByMonth;

    while (selisih < 0 && available <= 0) {
        month++
        if (month % 2 === 0) {
            loss += 0.5;
        }

        startPriceOld *= (1 - loss / 100);
        startPriceNew *= (1 - loss / 100);
        saving += savingperMonth;
        available = startPriceOld + saving - startPriceNew
        // console.log(`month: ${month} loss: ${percentLossByMonth}`)
    }

    return ([month, Math.round(available)])
}

console.log(nbMonths(2000, 8000, 1000, 1.5)); //[ 6, 766 ]
//2000 old car price
//8000 new car price
//1000 saving per month
//1.5  percent loss by month

console.log(nbMonths(2700, 2700, 1000, 1.4)); //[0,0]
console.log(nbMonths(12000, 8000, 1000, 1.5)); //[ 0, 4000 ]
console.log(nbMonths(8000, 12000, 500, 1)); //[ 8, 597 ]