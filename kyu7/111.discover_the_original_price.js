function discoverOriginalPrice(discountedPrice, salePercentage) {
    //rumus => ubah persentase diskon menjadi desimal
    //hitung faktor setelah harga diskon 1 - discount percentage
    //hitung harga asli => harga asli / faktor setelah harga diskon

    return +(discountedPrice / (1 - (salePercentage / 100))).toFixed(2)
}

console.log(discoverOriginalPrice(75, 25)); //100
console.log(discoverOriginalPrice(373.85, 11.2)); //421
console.log(discoverOriginalPrice(75.75, 25)); //101
console.log(discoverOriginalPrice(458.2, 17.13)); //552.91