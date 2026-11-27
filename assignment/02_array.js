// //1. push()
//Q-1
const arr=["red","blue","green"]
arr.push("brown","white")
console.log(arr);
////Q-2
const arr=[]
arr.push(5,10,15)
console.log(arr);
////Q-3
const arra=["Pen", "Book"]
arr.push("Eraser","Scale")
console.log(arra);
//Q-4
//ans=because push add the items in arr
//Q-5
//ans=no change the main arr
//2. pop()
//Q-1
const arra=[1,2,3,4,5]
arr.pop()
arr.pop()
console.log(arra);
Q-2
const array=["Red", "Blue", "Green"]
array.pop()
console.log(array);
//Q-3
const nums=[100, 200, 300, 400]
nums.pop()
console.log("nums =",nums);
//Q-4
//ans=pop return the array last items or element
// //Q-5
//// ans="Underflow" error or exception, JavaScript handles this gracefully by simply returning undefined because there are no elements available to remove.
// //3. unshift()
//Q-1
const leng=["CSS", "JavaScript"]
leng.unshift("HTML");
console.log(leng);
//Q-2
const num=[20, 30]
num.unshift(5,10)
console.log(num);
//Q-3
const citys=[]
citys.unshift("mumbai","delihi","ahemdabad")
console.log(citys);
//Q-4
//ans=in arry begnning
//Q-5
//ans=yes
//4. shift()
//Q-1
const city=["vadodra","ahedabad","himmatnager","pune"]
city.shift()
console.log(city);
//Q-2
const num=[10, 20, 30, 40]
num.shift()
num.shift()
console.log(num);
//Q-3
const fruits=["Apple", "Banana", "Mango"]
fruits.shift()
console.log("fruits=",fruits);
//Q-4
//ans=pop remove the arrs last element and shift remove the beghing element in the arrs
//Q-5
//ans=shift return the remmoving the fast element and return arr
//5. indexOf()
//Q-1
const arr=["apple","banana","mango","cocnute","pineapple","orange"]
console.log(arr.indexOf("apple"));
//Q-2
const arr=["A", "B", "C", "B", "D"]
console.log(arr.indexOf("B"));
//Q-3
const student=["vedika","mansi","javi","suhani"]
console.log(student.indexOf("vedika"));
console.log(student.indexOf("suhani"));
Q-4
// //ans=found the indexof element
Q-5
// ans=It returns the index of the first occurrence of the element (scanning from left to right, starting at index 0).
6. lastIndexOf()
//Q-1
let arr=[49,90,100]
console.log(arr.lastIndexOf(100));
//Q-2
let arr=["X", "Y", "Z", "Y", "X"]
console.log(arr.lastIndexOf("Y"));
console.log(arr.lastIndexOf("X"));
//Q-3
const arr=[1,2,3,4,5,3]
console.log(arr.lastIndexOf(3));
/Q-4
const arr=[1,2,3,4,3,1]
console.log(arr.lastIndexOf(3));
console.log(arr.indexOf(2));
//Q-5
let numbers = [10, 20, 30, 20, 50];
console.log(numbers.indexOf(20));     
console.log(numbers.lastIndexOf(20)); 
//7. includes()
//Q-1
const arr=["vedika","mahi","shloka","hasti"]
console.log(arr.includes("mahi"));
console.log(arr.includes("shloka"));
console.log(arr.includes("hasti"));
console.log(arr.includes("vedika"));
//Q-2
const arr=[11, 22, 33, 44]
console.log(arr.includes(33));
console.log(arr.includes(35));
//Q-3
const subject=["match","science","english"]
console.log(subject.includes("english"));
console.log(subject.includes("gujrati"));
//Q-4
///ANS=includes()return the boolean value
//Q-5
const arr=[2,"vedika","figma",4]
console.log(arr.includes(4));
console.log(arr.includes("figma")); 
//8. reverse()
//Q-1
const arr=[1,2,3,4,5]
console.log(arr.reverse());
//Q-2
const arr=["A", "B", "C", "D"]
console.log(arr.reverse());
//Q-3
const arr=["hmt","adm","pune","mumbai"]
console.log(arr.reverse());
//Q-4
const color=["red","blue","green","orange"]
console.log(color.reverse());
//Q-5
const arr=[90,"blue"]
console.log(arr.reverse());
//9. sort() – Basic Version
//Q-1
const arr=["vedika","shloka","hasti","mahi","dharmi"]
arr.sort();
console.log(arr);
//Q-2
const arr=["Dog", "Cat", "Elephant", "Ant"]
arr.sort()
console.log(arr);
//Q-3
const num=[40, 100, 5, 25]
num.sort()
console.log(num);//[ 100, 25, 40, 5 ]
/Q-4
const num=[40, 100, 5, 25]
num.sort()
console.log(num);
//Q-5
const arr=["html","css","python","js"]
console.log(arr.sort());
//10. join()
//Q-1
const arr=["html","js","python","css"]
const u=arr.join(" | ");
console.log(u);
//Q-2
const arr=["HTML", "CSS", "JavaScript"]
const update=arr.join("-");
console.log(update);
//Q-3
const sub=["science","matsh","english"]
const up=sub.join("/");
console.log(up);
//Q-4
let arr=[2,2,3,4];
const u=arr.join("-");
console.log(u)
//Q-5
const sub=["science","matsh","english"]
const up=sub.join("/");
console.log(up);
//11. concat()
//Q-1
const arr1=[1,2];
const arr2=[3,4];
const result=arr1.concat(arr2);
console.log(result);
//Q-2
const arr1 = [1, 2]
const arr2 = [3, 4]
const result=arr1.concat(arr2);
console.log(result)
//Q-3
const arr1 = [1, 2]
const arr2 = [3, 4]
const arr3 =  [5,6]
const result=arr1.concat(arr2,arr3);
console.log(result)
//Q-4
