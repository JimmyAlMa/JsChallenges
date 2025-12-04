// Create a list of people who are allowed to borrow books from the library.


const userList = [
    {
        name: 'Jimmy',
        age: 28,
        hasFine: false,
        numberBooksBorrowed: 4,
        maxBorrowed: 5
    },
    {
        name: 'Juno',
        age: 17,
        hasFine: false,
        numberBooksBorrowed: 0,
        maxBorrowed: 3
    },
    {
        name: 'Rose',
        age: 35,
        hasFine: true,
        numberBooksBorrowed: 2,
        maxBorrowed: 5
    },
    {
        name: 'Mina',
        age: 22,
        hasFine: false,
        numberBooksBorrowed: 5,
        maxBorrowed: 5
    },
];

function canBorrowBooks(list, index) {
    const user = list[index];
        if (user.age < 18) {
            return user.name + ' is underaged';
        } else if (user.hasFine === true) {
            return user.name + ' has a fine';
        } else if (user.numberBooksBorrowed >= user.maxBorrowed) {
            return user.name + ' has already borrowed maximum number off books';
        } else {
            return user.name + ' can borrow books';
        }
};
console.log(canBorrowBooks(userList, 0))
console.log(canBorrowBooks(userList, 1))
console.log(canBorrowBooks(userList, 2))
console.log(canBorrowBooks(userList, 3))