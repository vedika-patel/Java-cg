////# 1. What Is an Array?
////Q-1
////ans=array is collaction of the values
////Q-2
////ans=The technical term for the position of a value inside an array is index
////Q-3
////ans=0
////Q-4
////ans=30 value is store at index 2
////Q-5
////ans=the index of number 40 is 3
//2. Creating Arrays
////Q-1
///ans=Array Literal (using square brackets [])
// Array Constructor (using the new Array() syntax)
////Q-2
////ans=Array Literal
////Q-3 ans
// const students=["Jenil","Mahir","Priyesha","Yashvi"]
// console.log(students)
////Q-4 ans
// const marks=[85,90,78]
// console.log(marks)
////Q-5
// ans=new (used with new Array()).
//// 3. Accessing Values in an Array
////Q-1
//ans=To access a specific value stored in an array, you use its index enclosed in square brackets [] placed after the array name (for example, students[0]).
////Q-2
// var students = ["Jenil", "Mahir", "Priyesha"];
// console.log(students[0]);//Jenil
//Q-3
//ans=priyesha
//Q-4
//ans=undefine
////Q-5
// var arr=["pinak","blue","black","white"];
// console.log(arr[0]);
//# 4. Updating Values
////Q-1
//ans=because sapose student one subject marks is not correct and you have change the marks
////Q-2
// var marks = [80, 75, 90];
// marks[1]=95;
// console.log(marks);
////Q-3
//ans=[ 80, 95, 90 ] is the out put
////Q-4
//ans=True
//Q-5
////ans=Yes, JavaScript allows you to assign a value to an index that is outside the current bounds of an array.
// When you assign a value to an index significantly higher than the current length (e.g., arr[10] = 5), JavaScript automatically expands the array to accommodate the new index.
//# 5. Array Length
//Q-1
//ans=name of the property in arr is length
////Q-2
//ans=4
//Q-3
//ans=0
//Q-4
//ans=because of arr is order of the collection of the values
//Q-5
//ans=length is a property, not a function call.
// Because it is a property on JavaScript arrays (and strings), you access it directly using dot notation without parentheses:
//# 6. Looping Through Arrays
//pandding
// # 7. Adding Elements to Arrays
//Q-1
//ans=push method 
//Q-2
//ans=unshift method
//Q-3
// let num=[1,2,3];
// num.push(4);
// console.log(num);
//Q-4
// let num=[1,2,3];
// num.unshift(0);
// console.log(num);
//Q-5
//ans=true
//# 8. Removing Elements
//Q-1
//ans=pop method
//Q-2
//ans=shift method
//Q-3
// let nums = [100, 200, 300, 400, 500];
// nums.pop();
// console.log(nums);
//Q-4
// let nums = [100, 200, 300, 400, 500];
// nums.shift();
// console.log(nums);
//Q-5
//ans=true
// # 9. Searching in Arrays
//Q-1
//ans=return of the arr values
//Q-2
//ans=-1
//Q-3
//ans=1
//Q-4
// ans=-1
//Q-5
// let arr=["ved","nati","Priyesha"];
// console.log(arr.indexOf("Priyesha"));
// # 10. Array with Different Data Types
//Q-1
//ans=yes
//Q-2
// let arr=[100,"manav",True,null];
//Q-3
// const data = [100, "Hello", true, null];
// for (let i = 0; i < data.length; i++) {
//     console.log(`Element: ${data[i]}, Type: ${typeof data[i]}`);
// }
//Q-4
//ans=number
//Q-5
//ans=boolean
////# 11. Array of Arrays (Matrix) – 2D Arrays
// //#Q-1
// let arr=[
//     [1,2],
//     [3,4],
//     [5,6],
//     [7,8]
// ]
////Q-2
// const marks = [
//     [85, 90, 78],
//     [70, 75, 80],
//     [88, 82, 95],
//     [60, 65, 70]
// ];
// console.log(marks[3]);
////Q-3
// const marks = [
//     [85, 90, 78, 90],
//     [70, 75, 80, 69],
//     [88, 82, 95, 10]
// ];
// const totalRows = marks.length;
// const totalCols = marks[0].length;
// console.log(totalRows*totalCols)
////Q-4
// const matrix=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// matrix[1][1]=0
// console.log(matrix);
////Q-5
// const matrix=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// console.log(matrix[0][2])
//12,13,14 is pannding
////# 15. Multiple Choice Questions
////Q-1 ans=d(20)
//Q-2
//ans=c) arr.unshift(5)
//Q-3
//ans=c) -1
//Q-4
//ans=c) Arrays can store mixed data types
//Q-5
//ans=b) [1, 2, 4]
//Q-6
//ans=d) 60
//Q-7
//ans=b) string
