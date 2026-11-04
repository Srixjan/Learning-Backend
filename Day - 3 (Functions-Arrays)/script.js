// sayHello();

// function sayHello() {
//     console.log("Hello Javascript!");
// }

// function add(a, b) {
//     return a + b;
// }
// console.log(add(5, 4));

// function nameGuest(name = "Guest") {
//     return console.log("Hello ", name);
// }

// nameGuest("Srijan");

// function sum(...numbers) {
//     let sum = 0;
//     for(let i = 0 ;i < numbers.length; i++) {
//         sum += numbers[i];
//     } 
//     return sum;
// }

// console.log(sum(1, 2, 3, 4, 5));

// function outer() {
//     let outerVar = "Outer";
//     console.log("I am outer", outerVar);

//     function inner() {
//         console.log("I am inner",outerVar);
//     }

//     inner();
// }

// outer()

// Scope Chain

// let a = "GLOBAL";

// function outer() {
//     let b = "Outer";

//     function inner() {
//         let c = "inner";
//         console.log(a, b, c);
//     }

//     inner();
// }
// outer();

// Immediately Invoked Function Express

// (function () {console.log("I run instantly");}) ();

// ARROW FUNCIONS *** VERY IMP

// add = (a, b) => b + a;
// console.log(add(2, 5));

// setTimeout(function() {
//     console.log("Annoymous function executed!");
// }, 1000);

// HIGHER ORDER FUNCTIONS.

// function higherOrder(fn) {
//     fn();
// }

// higherOrder(() => console.log("This is callback!"));

// function greet(name, callback) {
//     console.log("Hello " + name);
//     callback();
// }

// greet("Srijan", () => console.log("Welcome to JAVASCRIPT!"));

// const sayHi = () => console.log("I am inside a variable!!");
// const run = sayHi;
// run();

// let fruits = ["Mango", "Apple", "Orange", "Guava", "Watermelon"];
// console.log(fruits);
// fruits.push("Tomato");
// console.log(fruits);
// fruits.shift();
// console.log(fruits);

// arr = ["Ferrari", "Mercedes", "Porsche", "BMW", "Audi", "Mahindra"];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let person = {
//     name: "Srijan",
//     age: 22,
//     city: "Durgapur"
// };

// console.log(person.name);
// console.log(person.age);
// console.log(person.city);
