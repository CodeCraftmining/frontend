let a = 5;
let b = 2;
console.log("a = ", a, " & b =", b);
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
//unary operator
let a = 5;
let b = 2;
console.log("a = ", a,"& b = ",b);
a = a + 1//6
console.log("a = ", a);//6
//asignment operator
let a = 5;
let b = 2;
a += 4;//a = a+4
console.log("a =", a);//9
//comparison operators
let a = 5;
let b = 2;
console.log("5 != 2", a != b);//true
let a = 5; //number
let b = "6"; //string 
console.log("a !== b", a !== b);//true
//console.log("5 != 2", a != b);//true
let a = 5; //number
let b = "6"; //string 
console.log("a !== b", a !== b);//true
//logical operators
let a = 5; 
let b = 6;
let cond1 = a<b; //false
let cond2 = a===6;//true
console.log("cond1 && cond2 =", cond1 && cond2);


  
 
let  a = 6;
let b = 5;

console.log("!(6<5) =", !(a === 6));//true

//condition ststenment
let age = 25;
if (age > 18) {
    console.log("you can vote ");
}
