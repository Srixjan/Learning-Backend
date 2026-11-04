// var a;
// var a = 12; // ES5 // intialization and declaration
// let a;          // <- intialization
// let a = 12; // ES6 
// const a = 12;

let a = 25;
let b = 50;

// we dont use var because
// 1. even if u use it on if statements, 
// it will be available outside the if statement as well inside the function scope.
// 2. var is function scoped, let and const are block scoped
// 3. var can be redeclared, let and const cannot be redeclared
// ALWAYS USE LET AND CONST INSTEAD OF VAR

// fucntion scope -> accessible only inside the function
// global scope -> accessible anywhere in the code
// block scope -> accessible only inside the block
// let is block scoped and works inside parenthesis, curly braces, and square brackets.

// reassignment vs redeclaration
// this is reassignment
var f = 12;
f = 23;

let f1 = 25;
f1 = 50;

// this is redeclaration SHOULD NOT BE DONE
var fa = 12;
var fa = 23; 

//temporal dead zone -> a let variable cannot be accessed before its declaration
// var lets you do it but shows undefined.
// let will throw ann error saying cannot access before initialization

// hoisting -> each var is broke into two parts, declaration and initialization.
// var a = 12; -> var a = undefined; a = 12; (this is what happens in the background)
// var a goes to top, thats why we can access it but show undefined.
 
// var nm = undefined;
// console.log(nm);
// nm = "Bruce Wayne"; 

// DATA TYPES
// primitives and refereces data types
// primitives -> string, number, boolean, null, undefined, symbol
// references -> objects, arrays, functions
// null means on purpose no value, undefined means no value assigned yet
// number -> any integer or decimal(float) number
// sybol -> unique and immutable, used to create unique identifiers for objects
// let obj = {
//     uid: 1,
//     name: "Bruce Wayne",
//     age: 35,
//     email:"test@test.com"
// }

// let u1 = Symbol("uid");
// obj[u1] = 2;

// bigint -> use for large numbers, regular int is 9007199254740991
// let biga = 9007199254740991n;
// biga = biga + 10n;
// this was you can use values bigger than max int value.
// abovee these were primitive values meaninng they are not references, they are stored in stack memory and are immutable.

// REFERENCES -> these are reference values, so they are just references and not the actual values. so when u change both the reference and the original value will change.
// let ab = [1, 2, 3, 4, 5];
// let ba = ab;
// ba.pop();
// as we can see ab removed last idx value and so did ba as it was referenced.

//Type coercion -> where one type gets converted automatically to another type.
//  "5" + 1 = 51 <- concatenation.
// why ? because + works for one it can add and another it can concatenate,
// so it will convert the number to string and concatenate it. But..
// "5" - 1 = 4 <- subtraction(there is no concatenation so it has to do subtraction), here it will convert the string to number and subtract it.

// Truthy vs Falsy values
// falsy values -> false, 0, "", null, undefined, NaN (u can check by !! value)
// truthy values -> all other values are truthy values 
// if () <- inside if u write falsy value, it will be false and if u write truthy value, it will be true.
// why is NaN a number ? because it is a failed numerical operation, but still its a number.

// OPERATORS
//  Arithmetic, Comparison, Logical, Assigment, Unary.
// Arithmetic -> + - / * % ** (+ can add and concatenate strings), (** can be used to find power of a number)
// Comparision ->  ==(check only values), ===(check values and types), !=, !==(strict not equal), >, <, >=, <= i know all of these from dsa.
// Assignment -> =, +=, -=, *=, /=, %=, **=
// Logical -> &&, ||, !
// Unary -> typeof, delete, void, +, - (unary plus and minus), ++, --

// instanceof used for referce and typeof used for primitive data types.
//!! can be used in console to see any datatypes truthiness.

// CONTROL FLOW
// if and else if 
// switch case

// function getGrade(score) {
//     if (score >= 90 && score <= 100) {
//         return "A"
//     }

//     else if (score >= 80 && score <= 89) {
//         return "B"
//     }

//     else if (score >= 70 && score <= 79) {
//         return "C"
//     }

    
// }

// LOOPS
// for (let i = 1; i <= 25; i++) {
//     console.log(i);
// }

// let ass = 10;

// while (ass >= 1) {
//     console.log("fuck you", ass);
//     ass--;
// }

// let i = 1;

// do {
//     console.log(i);
//     i++;
// } while (i < 20); 

// for (let i = 1; i <= 44; i++) {
//     console.log(i);
//     if (i == 32) {
//         break;
//         continue;
//     }
// }
// console.log("out of loop and if")

