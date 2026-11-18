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

// function once(fn) {
//     let executed = false;
//     let result;

//     return function (...args) {
//         if (!executed) {
//             result = fn.apply(this, args);
//             executed = true;
//         }

//         return result;
//     }
// }

// const intitialize = once(() => {
//     console.log("Application Intialized!");
//     return "SUCCESS";
// } )

// intitialize()
// intitialize()
// intitialize()
// intitialize()
// intitialize()   


// function debounce(fn, delay) {
//     let timer;

//     return function(...args) {
//         clearTimeout(timer);

//         timer = setTimeout(() => {
//             fn.apply(this, args);
//         }, delay)
//     }
// }


// const search = debounce((query) => {
//     console.log("Searching:", query);
// }, 500);

// search("J");
// search("Ja");
// search("Java");
// search("JavaScript");



// function groupBy(array, key) {
//     const result = [];

//     for (const item in array) {
//         const groupName = item[key];

//         if(!Object.hasOwn(result, groupName)) {
//             result[groupName] = [];
//         }
        
//         result[groupName].push(item);
//     }
// }

// const employees = [
//     { name: "Amit", department: "IT" },
//     { name: "Rahul", department: "HR" },
//     { name: "Priya", department: "IT" },
//     { name: "Neha", department: "Finance" },
//     { name: "Rohan", department: "HR" }
// ];

// groupBy(employees, "department")

// function deepClone(value, seen = new WeakMap()) {
//     if (value === null || typeof value !== "object") {
//         return value;
//     }

//     if (seen.has(value)) {
//         return seen.get(value);
//     }

//     const clone = Array.isArray(value) ? [] : {};
//     seen.set(value, clone);

//     for (const key of Reflect.ownKeys(value)) {
//         clone[key] = deepClone(value[key], seen);
//     }

//     return clone;
// }


// const user = {
//     name: "Ramiz",
//     address: {
//         city: "Kolkata",
//         country: "India"
//     },
//     skills: ["JavaScript", "React"]
// };

// const clonedUser = deepClone(user);

// clonedUser.address.city = "Delhi";
// clonedUser.skills.push("Node.js")

// console.log("clonedUser: ", clonedUser)
// console.log("user: ", user)

