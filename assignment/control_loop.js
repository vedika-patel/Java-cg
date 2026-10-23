////Part I] - For Loop
////Q-1
// const temperatures = [28, 32, 25, 40, 18, 35];
// let count = 0;

// for (let i = 0; i < temperatures.length; i++) {
//   if (temperatures[i] > 30) {
//     count++;
//   }
// }

// console.log(`Number of days hotter than 30°C: ${count}`);
////Q-2
///not under stand
////Q-3
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0 && i % 7 !== 0) {
//         console.log(i);
//     }
// }
////Q-4 line 27 not under stand
// let str = "JavaScript";
// let consonants = "";
// let vowels = "aeiouAEIOU";

// for (let i = 0; i < str.length; i++) {
//     if (!vowels.includes(str[i])) {
//         consonants += str[i];
//     }
// }

// console.log(consonants); 
////Q-5
////not under stand the question
///Q-6
// let series = "";
// for (let i = 1; i <= 128; i *= 2) {
//     series += i + " ";
// }
// console.log(series.trim());
////Q-7
// let fib = [0, 1];
// for (let i = 2; i < 20; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
// }
// console.log(fib.join(" "));
////Q-8
// const scores = [45, 78, 90, 32, 56, 88];
// let sum = 0;
// for (let i = 0; i < scores.length; i++) {
//     sum += scores[i];
// }
// let average = sum / scores.length;
// let aboveAverageCount = 0;
// for (let i = 0; i < scores.length; i++) {
//     if (scores[i] > average) {
//         aboveAverageCount++;
//     }
// }
// console.log(`Average: ${average}`);
// console.log(`Students above average: ${aboveAverageCount}`);
////Q-10
// function decimalToBinary(decimalNum) {
//     if (decimalNum === 0) return "0";
//     let binary = "";
//     for (let n = decimalNum; n > 0; n = Math.floor(n / 2)) {
//         binary = (n % 2) + binary;
//     }
//     return binary;
// }
// let number = 13;
// console.log(`Binary of ${number} is: ${decimalToBinary(number)}`);
////Part I-a] break inside a for Loop
////Q-1
// const arr = [4, 9, 2, 7, 15, 7, 3];
// let foundIndex = -1;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 7) {
//         foundIndex = i;
//         console.log(`Found 7 at index: ${i}`);
//         break;
//     }
// }
////Q-2
// Run this in an environment where prompt() is available (like a browser console)
// const correctPassword = "secret123";
// let accessGranted = false;
// for (let attempt = 1; attempt <= 5; attempt++) {
//     let userPassword = prompt(`Attempt ${attempt}/5: Enter password:`);
//     if (userPassword === correctPassword) {
//         console.log("Access granted");
//         accessGranted = true;
//         break;
//     }
// }
// if (!accessGranted) {
//     console.log("Account locked");
// }
////Q-3
// let sum = 0;
// let lastNumber = 0;
// for (let i = 1; ; i++) {
//     if (sum + i > 100) {
//         lastNumber = i - 1; // Or depending on interpretation, the last number tried before stopping
//         console.log(`Last number added before sum crossed 100 was: ${i - 1} (Sum reached ${sum})`);
//         break;
//     }
//     sum += i;
// }
////Q-4
// const names = ["Rahul", "Amit", "Siddharth", "Priya", "Sunita"];
// for (let i = 0; i < names.length; i++) {
//     if (names[i].toUpperCase().startsWith("S")) {
//         console.log(`First name starting with 'S': ${names[i]}`);
//         break;
//     }
// }
////Q-5
// for (let i = 1; i <= 50; i++) {
//     let sqrt = Math.sqrt(i);
//     // Check if it's a perfect square and greater than 20
//     if (Number.isInteger(sqrt) && i > 20) {
//         console.log(`Encountered perfect square > 20: ${i}. Stopping loop.`);
//         break;
//     }
//     console.log(i);
// }








