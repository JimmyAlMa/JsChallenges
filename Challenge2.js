// Product Financial Reporting
// Challenge from Google Gemini AI

let inventory = [
    {
        name: 'Kemeja Katun',
        productID: 'A001',
        stock: 50,
        price: 150000,
        minStock: 10
    },
    {
        name: 'Celana Jeans',
        productID: 'B002',
        stock: 5,
        price: 300000,
        minStock: 25
    },
    {
        name: 'Topi Baseball',
        productID: 'D004',
        stock: 0,
        price: 50000,
        minStock: 5
    },
    {
        name: 'Sepatu Lari',
        productID: 'C003',
        stock: 100,
        price: 750000,
        minStock: 25
    }
];
function buyItems(number, purchaseAmount) {
    if (inventory[number] === undefined) {
        return 'Item not found';
    } else if (inventory[number].stock < purchaseAmount) {
        return 'Stock not sufficient';
    } else {
        inventory[number].stock -= purchaseAmount;
        return 'Purchase successful. Remaining stock: ' + inventory[number].stock;
    }
}
function addStock(itemNum, howMuch) {
    if (inventory[itemNum] === undefined) {
        return 'Item not found';
    } else {
        inventory[itemNum].stock += howMuch;
        return 'Stock updated. New stock: ' + inventory[itemNum].stock
    }
}


console.log(buyItems(1, 2))
console.log(addStock(1, 3))
