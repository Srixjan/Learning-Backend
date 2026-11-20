// function delay(ms) {
//     if (!Number.isFinite(ms) || ms < 0) {
//         return Promise.reject (
//             new Error("Invalid delay value!")
//         )
//     }

//     return new Promise((resolve => {
//         setTimeout(() => {
//             resolve(
//                 console.log("Finished Waiting...")
//             );
//         }, ms)
//     }))
// }

// async function main() {
//     console.log("Start");
//     await delay(2000);
//     console.log("End!");
// }

// main()

// function wait(ms) {
//     return new Promise(resolve => {
//         setTimeout(resolve, ms)
//     })
// }


// async function retry(fn, attempts, delayTime) {
//     if (typeof fn !== "function" ||
//         !Number.isInteger(attempts) ||
//         attempts < 1 ||
//         !Number.isFinite(delayTime) ||
//         delayTime < 0
//     ) {
//         throw new Error("Invalid retry configuration")
//     }

//     let lastError;

//     for (let i = 1; i <= attempts; i++) {
//         try {
//             console.log(`Attempt ${i}`);
//             const result = await fn();
//             return result;
//         } catch (error) {
//             lastError = error;
//             console.log(`Attempt ${i} Failed`)

//             if (i < attempts) {
//                 await wait(delayTime);
//             }
//         }
//     }

//     throw lastError;
// }

// let count = 0;

// async function fetchUserData() {
//     count++;
//     if (count < 7) {
//         throw new Error("Server temporarily unavailable")
//     }

//     return {
//         id: 1,
//         name: "Ramiz"
//     }
// }

// async function main() {
//     try {
//         const result = await retry(
//             fetchUserData,
//             7,
//             1000
//         )
//     } catch (err) {
//         console.log(err)
//     }
// }

// main();

// const response = {
//     status: 200,
//     data: {
//         users: [
//             {
//                 id: 1,
//                 firstName: "Srijan",
//                 lastName: "Chowdhury",
//                 age: 22
//             },
//             {
//                 id: 2,
//                 firstName: "Dibyo",
//                 lastName: "Banerjee",
//                 age: 21
//             }
//         ]
//     }
// };

//     function transformUsers(response) {
//         if (
//             !response ||
//             response.status !== 200 ||
//             !response.data ||
//             !Array.isArray(response.data.users) 
//         ) {
//             throw new Error("Invalid API response");
//         }

//         return response.data.users.map(user => {
//             if (
//                 !user ||
//                 !Number.isFinite(user.id) ||
//                 typeof user.firstName !== "string" ||
//                 typeof user.lastName !== "string" ||
//                 !Number.isFinite(user.age) ||
//                 user.age < 0
//             ) {
//                 throw new Error("Invalid user input");
//             }

//             const fullName = `${user.firstName} ${user.lastName}`;
//             const category = user.age < 23 ? "Junior" : "Senior";

//             return {
//                 id: user.id,
//                 fullName: fullName,
//                 age: user.age,
//                 category: category
//             }
//         }) 
//     }

// const users = transformUsers(response);
// console.log(users);
