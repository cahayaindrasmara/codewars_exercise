function stockList(books, categories) {
    let stock = {}
    let list = []

    for (let i = 0; i < categories.length; i++) {
        // console.log(categories[i]);

        for (let j = 0; j < books.length; j++) {
            // console.log("#2:", books[j]);

            let code = books[j][0];
            let qty = books[j].split(" ")[1];

            // console.log("code:", code, "qty:", qty);

            if (categories[i] === code) {
                stock[categories[i]] = (stock[categories[i]] || 0) + Number(qty);
            } else {
                stock[categories[i]] = (stock[categories[i]] || 0);
            }
        }
    }

    // console.log(stock);

    for (let book in stock) {
        list.push(`(${book} : ${stock[book]})`)
    }

    return list.join(" - ")
}

console.log(stockList(['BBAR 150', 'CDXE 515', 'BKWR 250', 'BTSQ 890', 'DRTY 600'], ['A', 'B', 'C', 'D']))
//(A : 0) - (B : 1290) - (C : 515) - (D : 600)
console.log(stockList(["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B"]))
//(A : 200) - (B : 1140

/*
function stockList(books, categories) {
    if (books.length === 0 || categories.length === 0) return "";

    let stock = {};

    for (let i = 0; i < categories.length; i++) {
        stock[categories[i]] = 0; // inisialisasi semua kategori
    }

    for (let j = 0; j < books.length; j++) {
        let idBook = books[j][0]; // huruf pertama
        let countBook = Number(books[j].split(" ")[1]);

        if (stock.hasOwnProperty(idBook)) {
            stock[idBook] += countBook;
        }
    }

    let list = categories.map(cat => `(${cat} : ${stock[cat]})`);

    return list.join(" - ");
}

*/
