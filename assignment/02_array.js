1. push()
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
//Q-5
ans="Underflow" error or exception, JavaScript handles this gracefully by simply returning undefined because there are no elements available to remove.
//3. unshift()
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
//Q-4
//ans=found the indexof element
//Q-5
//ans=It returns the index of the first occurrence of the element (scanning from left to right, starting at index 0).
