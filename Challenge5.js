// Multi-Branch Financial Statement Analysis
// Challenge from Google Gemini AI

const salesData = [
    {
        transactionID: 'TX1001',
        productName: 'Sepatu Kulit',
        branch: 'Bandung',
        quantity: 10,
        price: 800000,
        salesman: 'BUDI'
    },
    {
        transactionID: 'TX1002',
        productName: 'Tas Ransel',
        branch: 'Jakarta',
        quantity: 5,
        price: 350000,
        salesman: 'CITRA'
    },
    {
        transactionID: 'TX1003',
        productName: 'Sepatu Kulit',
        branch: 'Bandung',
        quantity: 20,
        price: 800000,
        salesman: 'DWI'
    },
    {
        transactionID: 'TX1004',
        productName: 'Topi',
        branch: 'Surabaya',
        quantity: 50,
        price: 100000,
        salesman: 'BUDI'
    },
];

function totalIncome() {
    let grossIncome = salesData.map(num => {
        return num.quantity * num.price;
        });
    let temporalyValue = grossIncome.reduce((acc, number) => {
        return acc += number;
    }, 0);
    return temporalyValue;
}
console.log(totalIncome())

function activeSalesmanFilter() {
    let firstLetter = salesData.filter(name => {
        let letterB = name.salesman.startsWith('B');
        return letterB;
    });
    let arrayList = firstLetter.map(user => {
        return {
            id: user.transactionID,
            salesman: user.salesman
        };
    });
    return arrayList;
}
console.log(activeSalesmanFilter())

function incomeGroup() {
    return salesData.reduce((acc, transaction) => {
        const currentRevenue = transaction.quantity * transaction.price;
        const branchName = transaction.branch;

        acc[branchName] = (acc[branchName] || 0 ) + currentRevenue;

        return acc;
    }, {});
}
console.log(incomeGroup())