//// 4. Function Expression
// function calculateAverage(a, b, c) {
//     return (a + b + c) / 3;
// }
// console.log(calculateAverage(80,90,70))
////5. Parameters vs Arguments
////this code xand y is paremeter and 12 and 5 are argumentresule is 60
////6. Return Statement
// function isEven(num){
//     return num%2==0;
// }
// console.log(isEven(7))
////7. Multiple Parameters
// function findPercentage(obtainedMarks,totalMarks){
//     return (obtainedMarks/totalMarks)*100
// }
// console.log(findPercentage(456,500))
////8. Function Without Return
// Function without a return statement
// function sayHello(name) {
//     console.log("Hello, " + name + "!");
// }
// let result = sayHello("Rahul");
// console.log("The function returned:", result);
////9. Practical Application – Simple Interest
// function calculateSimpleInterest(principal,rate,time){
//     return SI = (principal* rate*time) / 100;
// }
// console.log(calculateSimpleInterest(10000,5,2));
////10. Mixed Concept Question
function formatStudentScore(name, marks) {
    return "Student " + name + " has scored " + marks + " marks.";
}
let student1 = formatStudentScore("Aarav", 88);
let student2 = formatStudentScore("Priya", 92);

console.log(student1);
console.log(student2);