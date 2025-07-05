function convertFrac(lst) {
    if (lst.length === 0) return "";

    let denom = [];
    for (let i = 0; i < lst.length; i++) {
        denom.push(lst[i][1]);
    }

    console.log(denom)

    let penyebut = kpkAll(denom);
    console.log(penyebut)

    let hasil = lst.map(([num, dem]) => {
        let faktor = penyebut / dem;
        return `(${num * faktor},${penyebut})`
    });

    return hasil.join("");
}

function fpb(a, b) {
    return b === 0 ? a : fpb(b, a % b)
}

function kpk(a, b) {
    return (a * b) / fpb(a, b);
}

function kpkAll(arr) {
    return arr.reduce((acc, val) => kpk(acc, val))
}

console.log(convertFrac([[1, 2], [1, 3], [1, 4]]))