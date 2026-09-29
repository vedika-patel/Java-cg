//Assignment : Conditional Statements
//A]if satement
//Q-1
let num=50;
if(num%5==0){
    console.log("num divied by 5")
}
//Q-2
let age=75;
if(age>=60){
    console.log("Senior Citizen")
}
//Q-3
let num=200;
if(num>100){
    console.log("Big number")
}
//Q-4
let tempecher=5;
if(tempecher<10){
    console.log("Very Cold")
}
//Q-5
let marks=100;
if(marks==100){
    console.log("Perfect Score")
}
//Q-6
let num=-50;
if(num<0){
    console.log("Negative number")
}
//Q-7
let string="";
if(string==""){
    console.log("No input Provide")
}
//Q-8
let year=2000;
if(year%1000==0){
    console.log("Century Year")
}
//Q-10
let marks=89;
if(marks>=35||marKs<=100){
    console.log("Valid marks")
}
//B]if...else Statement
//Q-1
let num=3;
if(num%2==0){
    console.log("even number")
}else{
    console.log("odd number")
}
//Q-2
let age=19;
if(age>=18){
    console.log("Eligible")
}else{
    console.log("Not aligable")
}
//Q-3
let num=22;
if(num>=0){
    console.log("positive number")
}else{
    console.log("negitive number")
}
//Q-4
let marks=22;
if(marks>35){
    console.log("passed")
}else{
     console.log("failed")
}
//Q-5
const inputChar = 'G';

if (isUppercase(inputChar)) {
    console.log(`${inputChar} is an Uppercase Letter.`);
} else {
    console.log(`${inputChar} is NOT an Uppercase Letter.`);
}
//Q-6
let num=6;
if(num%3==0){
    console.log("num divied by three");
}else{
    console.log("not divied by three")
}
//Q-7
let password="admin123"
if(password=="admin123"){
    console.log("login successfull");
}
//Q-8
let year=2024;
if(year%4==0){
    console.log("Leap year");
}else{
    console.log("Not leap year");
}
//Q-9
let num=44;
if(num>20||num<50){
    console.log("number bettwen this number");
}else{
    console.log("not beetwen this number");
}
//Q-10
let num=10;
if(num>0){
    console.log("positive number");
}else if(num<0){
    console.log("negative number");
}else{
    console.log("zero")
}
//C] if...else if...else Statement
//Q-1
let month=12;
if(month==1||month==2||month==12){
    console.log("Winter");
}else if(month==3||month==4||month==5){
    console.log("Summmer");
}else if(month==6||month==7||month==8){
    console.log("Monsoon");
}else{
    console.log("Autumn")
}
//Q-2
let Income=1000000;
if(Income<300000){
    console.log("No tex");
}else if(Income>=300000&&Income<700000){
    console.log("5% Text allowd");
}else if(Income>=700000&&Income<1000000){
    console.log("10% Tex allowd");
}else if(Income>=1000000){
    console.log("15% Tex alloed");
}
//Q-3
let score=89;
if(score>=90){
    console.log("Outstanding");
}else if(score>70&&score<=89){
    console.log("Good");
}else if(score>40&&score<=69){
    console.log("Average");
}else{
    console.log("Need Improvement");
}
//Q-4
let speed=90;
if(speed<40){
    console.log("Slow")
}else if(speed>=40&&speed<80){
    console.log("Normal")
}else{
    console.log("Fast")
}
//Q-5
let hight=165;
if(hight<150){
    console.log("Short");
}else if(hight>=150&&hight<170){
    console.log("Avrage");
}else{
    console.log("Tall")
}
//Q-6
let day=4;
if(day>=1&&day<=5){
    console.log("Weekday");
}else if(day>=6){
    console.log("Weekend");
}
//Q-7(not under stand)
function calculateElectricityBill(units) {
    let totalBill = 0;

    if (units <= 50) {
        totalBill = units * 2;
    } else if (units <= 150) {
        totalBill = (50 * 2) + ((units - 50) * 4);
    } else {
        totalBill = (50 * 2) + (100 * 4) + ((units - 150) * 6);
    }

    return totalBill;
}

// Example Usage:
const unitsConsumed = 180;
const billAmount = calculateElectricityBill(unitsConsumed);

console.log(`Total Units Consumed: ${unitsConsumed}`);
console.log(`Total Bill Amount: ₹${billAmount}`);
//Q-8
let attendens=97;
if(attendens>=90){
    console.log("Excellent");
}else if(attendens>75&&attendens<=89){
    console.log("Good");
}else if (attendens>50&&attendens<=74){
    console.log("Satisfactory");
}else{
    console.log("Poor")
}
//Q-9
let marks1=56;
let marks2=99;
let marks3=90;
if(marks1>marks2&&marks1>marks3){
    console.log("subject one marks height");
}else if(marks2>marks3&&marks2>marks1){
    console.log("subject two marks is height");
}else{
    console.log("subject three marks is heights");
}
//Q-10
let num=-7;
if(num>0){
    if(num%2==0){
        console.log("positive even");
    }else{
        console.log("possitive odd");
    }
}else if(num<0){
    if(num%2==0){
        console.log("negative even");
    }else{
        console.log("negative odd");
    }
}
//D. Nested if Statement
//Q-1
let num=30;
if(num>10){
    if(num%3==0){
        console.log("num is divied by three");
    }
}
//Q-2
let age=16;
let voterId=true
if(age>=18){
    if(voterId==true){
        console.log("can vote")
    }
}
//Q-3
let score=89;
if(score>=40){
    if(score>=80){
        console.log("Passed with Distinction")
    }
}
//Q-4
let pIn=123;
if(pIn==123){
    if(pIn=true){
        console.log("he account balance is sufficient for withdrawal");
    }
}
//Q-5
let year = 2024;

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log("Leap Year");
        } else {
            console.log("Not a Leap Year");
        }
    } else {
        console.log("Leap Year");
    }
} else {
    console.log("Not a Leap Year");
}
//Q-6(not under stand)
function validateEmail(email) {
    // 1. Check if the email contains "@"
    if (email.includes("@")) {
        // 2. Check if the email ends with ".com"
        if (email.endsWith(".com")) {
            // 3. Check if the length of the email is greater than 10 characters
            if (email.length > 10) {
                console.log("Valid Email");
            } else {
                console.log("Email length must be greater than 10 characters.");
            }
        } else {
            console.log("Email must end with '.com'");
        }
    } else {
        console.log("Email must contain '@'");
    }
}

// Example Usage:
validateEmail("user@example.com"); // Output: Valid Email
validateEmail("a@b.com");          // Output: Email length must be greater than 10 characters.
validateEmail("user@domain.org");  // Output: Email must end with '.com'
//Q-7(not under stand)
let cartTotal = 1200; // cart ka total
let isPremium = true; // true = premium member, false = normal member

let finalAmount = cartTotal;
let discount = 0;

if (cartTotal >= 1000) {
  // cart 1000 ya usse jyada hai
  if (isPremium) {
    // premium member hai to 20% discount
    discount = cartTotal * 0.20;
    console.log("You are Premium Member - 20% discount");
  } else {
    // normal member hai to 10% discount
    discount = cartTotal * 0.10;
    console.log("You are Normal Member - 10% discount");
  }
  finalAmount = cartTotal - discount;
} else {
  console.log("Cart total is less than 1000 - No discount");
}

console.log("Cart Total: ₹" + cartTotal);
console.log("Discount: ₹" + discount);
console.log("Final Amount to Pay: ₹" + finalAmount);
//Q-8
let num = 16; // yaha number change karke check kar sakte ho

if (num > 0) {
  console.log(num + " is Positive");

  if (num % 2 === 0) {
    console.log(num + " is Even");

    if (num % 4 === 0) {
      console.log("Positive Even and Divisible by 4");
    } else {
      console.log("Positive Even but Not Divisible by 4");
    }

  } else {
    console.log(num + " is Odd");
  }

} else {
  console.log(num + " is Not Positive");
}
//Q-9
let age = 25;
let hasDegree = true; // true = graduation hai, false = nahi hai
let experience = 3; // years me

if (age >= 21 && age <= 30) {
  console.log("Age is valid: " + age);

  if (hasDegree === true) {
    console.log("Graduation degree is present");

    if (experience >= 2) {
      console.log("Experience is: " + experience + " years");
      console.log("Eligible for Interview");
    } else {
      console.log("Not Eligible - Experience less than 2 years");
    }

  } else {
    console.log("Not Eligible - Graduation degree required");
  }

} else {
  console.log("Not Eligible - Age must be between 21 and 30");
}
//Q-10
// 7,8,9,10 are not under stand;