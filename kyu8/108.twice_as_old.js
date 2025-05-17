function twiceAsOld(dadYearsOld, sonYearsOld) {
    // // rumus. diket f = father, s = son, dicari x ?
    // // mencari saat x tahun yang lalu
    // // f - x = 2 (s - x);
    // // f - x = 2s - 2x
    // // f = 2s - x
    // // x = 2s - f

    // let tahunLalu = Math.abs(2 * sonYearsOld - dadYearsOld);
    // //   console.log(Math.abs(tahunLalu))

    // //mencari saat x tahun yang akan datang
    // // f + x = 2 (s + x)
    // // f + x = 2s + 2x
    // // f + x - 2x = 2s
    // // f - x = 2s
    // // x = f - 2s

    // let nextYear = Math.abs(dadYearsOld - (2 * sonYearsOld));
    // //   console.log(Math.abs(nextYear))

    // if (dadYearsOld - tahunLalu === sonYearsOld * 2) {
    //     return tahunLalu
    // } else if (dadYearsOld + nextYear === sonYearsOld * 2) {
    //     return nextYear
    // } else {
    //     return 0;
    // }

    return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

console.log(twiceAsOld(36, 7)); //22
console.log(twiceAsOld(55, 30)); //5
console.log(twiceAsOld(42, 21)); //0
console.log(twiceAsOld(22, 1)); //20
console.log(twiceAsOld(29, 0)); //29

