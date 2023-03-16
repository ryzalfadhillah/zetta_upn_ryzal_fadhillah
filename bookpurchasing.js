//Fungtion untuk melakukang perhitungan harga pembelian buku
const bookPurchasing = (detail, discount = 0, tax = 0, stock = 0, quantityBook = 0) => {
    let result = 0;
    let amountOfPurchasedBook = 0;
    let purchase = true;

    if(stock > 0 && quantityBook){
        for(let i = 0; i < quantityBook; i++){
            if(i == stock){
                purchase = false;
                break;
            }
            amountOfPurchasedBook++;
        }
    }

    if(detail && detail.price) {
        const amountOfdiscount = (amountOfPurchasedBook * detail.price) * (discount / 100); //Perhitungan diskon
        const priceAfterDiscount = (amountOfPurchasedBook * detail.price) - amountOfdiscount; //Perhitungan harga setelah diskon
        const amountOfTax =  priceAfterDiscount * (tax / 100); //Perhitungan pajak
        const priceAfterTax = priceAfterDiscount + amountOfTax; //Perhitungan harga setelah pajak
        console.log("------------------------------------------------------");
        console.log(`Book Title\t\t: ${detail.title}`);
        console.log(`Quantity\t\t: ${quantityBook}`);
        console.log(`Stock\t\t\t: ${stock}`);
        console.log(`Book price\t\t: Rp.${detail.price} * ${amountOfPurchasedBook} = Rp.${detail.price * amountOfPurchasedBook}`);
        console.log(`Amount of Discount\t: Rp.${amountOfdiscount} (${discount}%)`);
        console.log(`Price after Discount\t: Rp.${priceAfterDiscount}`);
        console.log(`Amount of Tax\t\t: Rp.${amountOfTax} (${tax}%)`);
        console.log(`Price After Tax\t\t: Rp.${priceAfterTax}`);
        console.log("------------------------------------------------------");
        if(purchase && stock - amountOfPurchasedBook > 0){
            console.log(`stock left\t\t: ${stock - amountOfPurchasedBook}`);
            console.log("Stock still available, you can order again");
        }else{
            console.log(`stock left\t\t: ${stock - amountOfPurchasedBook}`);
            console.log("Stock is sold out, you can't order again");
        }
        console.log("------------------------------------------------------\n\n");
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
    const stock = Math.floor(Math.random() * 100);
    const quantity = Math.floor(Math.random() * 100);
    bookPurchasing(book, discount, tax, stock, quantity); //Pemanggilan fungction
})