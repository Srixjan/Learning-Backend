// let input = prompt("Enter your age!");
// let age = Number(input);

// if (input == null || input.trim() == "" || age < 0 || age > 120 || !Number.isFinite(age)) {
//     console.log("Please enter a valid age!");
// } else if (age <= 18) {
//     console.log("Not ellegible to vote!");
// } else {
//     console.log("Elligble for vote!");
// }

// for (let i = 1; i <= 10; i++) {
//     console.log("5 *", i, "=", 5 * i);
// }

// let count = 0;
// for (let i = 1; i <= 15; i++) {
//     if (i >= 8) {
//         count++;
//     }
// }
// console.log("The count is", count);

// counter = 3;
// while (counter >= 1) {
//     let password = prompt("Enter your password");

//     if(password == null || password.trim() == "" || password != "123") {
//         console.log("Password Incorrect!");
//         counter--;
//         if (counter == 0) alert("Account Locked");
//     } else if (password === "123") {
//         console.log("Correct Password!");
//         break;
//     }
// }

// let cnt = 0;
// while(true) {
//     let input = prompt("Enter a word!");
//     word = input.toLowerCase().trim();
//     if (word == null) {
//         console.log("Please enter a correct word!");
//     } else if (word == "yes") {
//         cnt++;
//     } else if(word == "stop") {
//         console.log("User typed 'Yes'",cnt, "times.");
//         break;
//     }
// }

// let i=1;
// while(i<=50) {
//     if (i % 7 == 0) console.log(i);
//     i++;
// }

// let sum = 0;
// for(let i = 1; i <= 30; i++) {
//     if (i % 2 != 0) {
//         sum+=i;
//         console.log(sum);
//     }
// }

// while(true) {
//     let input = prompt("Enter number!");
//     let num = Number(input);
//     if (input == null || input.trim() == "" || !Number.isFinite(num)) {
//         console.log("Enter a valid number!");
//         break;
//     } else if (num % 2 == 0) {
//         console.log("Even Number", num);
//         break;
//     }
// }

// let inputStart = prompt("Enter the start number!");
// let inputEnd = prompt("Enter the end number!");

// for(let i = inputStart; i <= inputEnd; i++) {
//     console.log(i);
// }

// let cnt = 0;
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 != 0) {
//         cnt++;
//         console.log(i);
//         if (cnt==3) break;
//     }
// }

// let cnt = 0;
// for(let i = 1; i <= 5; i++) {
//     let inp = prompt("Enter a number!");
//     if (inp > 0) {
//         cnt++;
//     }
// }
// console.log("The number of positive numbers are: ", cnt);

// let bankBalance = 1000;
// for (let i = 1; i <= 3; i++) {
//     let input = prompt("Enter amount you want to deduct!");
//     let amt = Number(input);
//     if (bankBalance >= input) {
//         bankBalance = bankBalance - input;
//         console.log("Updated Bank Balance", bankBalance)
//     } else if (bankBalance < input) {
//         console.log("Insuffcient amount!, you only have", bankBalance);
//         break;
//     }
// }


// let bal = 1000;
// for (let i = 0; i <= 3; i++) {
//     let input = prompt("ENter  a withdrawl");
//     if (isNaN(input)) {
//         console.log("wrong input!");
//     }

    
// }


