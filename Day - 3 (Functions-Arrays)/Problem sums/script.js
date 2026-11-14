// const add = (a, b) => a + b;
// const substract = (a, b) => a - b;
// const multiply = (a, b) => a * b;
// const division = (a, b) => {
//     if (b === 0) {
//         throw new Error("Divisor cannot be zero");
//     } 

//     a / b;
// };

// function Calculator (operation, a, b) {
//     if (typeof operation !== 'function') {
//         throw new Error("Invalid User");
//     }
//     return operation(a, b);
// }

// console.log(Calculator(multiply, 5, 4));

// function memorize(fn) {
//     const cache = new Map()

//     return function (...args) {
//         const key = JSON.stringify(args);
//         if (cache.has(key)) {
//             console.log("Returning cached result");

//             return cache.get(key);
//         }

//         console.log("Calculating Results...")
//         const result = fn.apply(this, args);
//         cache.set(key, result)

//         return result;
//     }
// }

// const square = memorize((n) => n * n);

// console.log(square(5));
// console.log(square(10));
// console.log(square(5));


// function createBalance(initialBalance) {
//     if (typeof initialBalance !== "number" || initialBalance < 0 || !Number.isFinite(initialBalance)) {
//         throw new Error("Invalid Intial result");
//     }
//     let balance = initialBalance;
//     return {
//         deposit(amount) {
//             if (!Number.isFinite(amount) || amount <= 0) {
//                 return "Invalid Deposit Amount!";
//             }

//             balance += amount;
//             return `Deposited ${amount}, Balance = ${balance}`;
//         },
//         withdraw(amount) {
//             if (!Number.isFinite(amount) || amount <= 0) {
//                 return "Invalid Withdrawl Amount";
//             }

//             if (amount > balance) {
//                 return "Not enough Balance!"
//             }

//             balance -= amount;
//             return `Withdrawl ${amount}, Balance ${balance}`;
//         },

//         getBalance() {
//             return balance;
//         }
//     }
// }

// const account = createBalance(5000)   
// console.log(account.deposit(1000)) 
// console.log(account.withdraw(1000))
// console.log(account.getBalance())

// function memorize(fn) {
//     const cache = new Map();

//     return function(...args) {
//         const key = JSON.stringify(args);
//         if (cache.has(key)) {
//             console.log("Returning cache result");

//             return cache.get(key);
//         }

//         console.log("Calculating results....");
//         const result = fn.apply(this, args);
//         cache.set(key, result);
//     }
// }

// const square = memorize((n) => n * n);

// console.log(square(5))
// console.log(square(10));
// console.log(square(5));