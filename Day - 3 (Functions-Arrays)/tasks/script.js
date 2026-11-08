const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const division = (a, b) => {
    if (b === 0) {
        throw new Error("Divisor cannot be zero");
    } 

    a / b;
};

function Calculator (operation, a, b) {
    if (typeof operation !== 'function') {
        throw new Error("Invalid User");
    }
    return operation(a, b);
}

console.log(Calculator(multiply, 5, 4));

const account = createBankAccount(5000)

console.log(account.deposit(2000))
console.log(account.withdraw(1000))
console.log(account.getBalance())

console.log(account.balance) //Private


function memorize(fn) {
    const cache = new Map()

    return function (...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            console.log("Returning cached result");

            return cache.get(key);
        }

        console.log("Calculating Results...")
        const result = fn.apply(this, args);
        cache.set(key, result)

        return result;
    }
}

const square = memorize((n) => n * n);

console.log(square(5));
console.log(square(10));
console.log(square(5));

