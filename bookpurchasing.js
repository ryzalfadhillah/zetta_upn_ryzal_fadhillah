//Fungtion untuk melakukang perhitungan harga pembelian buku
const bookPurchasing = (detail, discount = 0, tax = 0) => {
    let result = 0;
    if(detail && detail.price) {
        const amountOfdiscount = detail.price * (discount / 100); //Perhitungan diskon
        const priceAfterDiscount = detail.price - amountOfdiscount; //Perhitungan harga setelah diskon
        const amountOfTax =  priceAfterDiscount * (tax / 100); //Perhitungan pajak
        const priceAfterTax = priceAfterDiscount + amountOfTax; //Perhitungan harga setelah pajak
        
        console.log(`Book Title\t\t: ${detail.title}`);
        console.log(`Book price\t\t: Rp.${detail.price}`);
        console.log(`Amount of Discount\t: Rp.${amountOfdiscount} (${discount}%)`);
        console.log(`Price after Discount\t: Rp.${priceAfterDiscount}`);
        console.log(`Amount of Tax\t\t: Rp.${amountOfTax} (${tax}%)`);
        console.log(`Price After Tax\t\t: Rp.${priceAfterTax}\n\n`);
    }
    return result;
}

//Array daftar buku
const books = [
    {
        title: 'Dasar-dasar Pemrograman Javascript',
        price: 145000,
        printingStatus: true
    },
    {
        title: 'Dasar-dasar Pemrograman Python',
        price: 120000,
        printingStatus : true
    },
    {
        title: 'Dasar-dasar Pemrograman Dart',
        price: 130000,
        printingStatus : true
    }
];

//Maping buku
const book = books.map(book => {
    const discount = Math.floor(Math.random() * 50); //Generate diskon dari 0 sampai 50
    const tax = Math.floor(Math.random() * 10) + 1; //Generate pajak dari 1 sampai 10
    bookPurchasing(book, discount, tax); //Pemanggilan fungction
})