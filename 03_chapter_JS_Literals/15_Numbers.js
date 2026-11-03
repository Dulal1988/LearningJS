// ============================================================
// Topic: All Number Types in JavaScript
/*
  In JavaScript, numbers are ALWAYS of type "number" (except BigInt).
  There is no separate int, float, double, etc.
*/
// Decimal (Base 10) - most common
let decimal =42;
console.log("Decimal:", decimal )//42

// Binary (Base 2) - starts with 0b or 0B
let binary =0b1010;
console.log("Binary:", binary);//
let octal=0o52;
console.log("octal:",octal); //22
let float1=3.14;
console.log("Float:",float1);//3.14
let float2=-0.5;
console.log("Float2:",float2);//-0.5

// Exponential notation
 let exp1=1.5e2;//1.5 * 10^2 = 150
console.log("Exponential:",exp1);
let exp2=1.5e-3;//1.5 * 10^3 // 0.0015    
console.log("Exponential2:",exp2);
let exp3 = 2E10;    // 2 * 10^10 = 20000000000
console.log("Exponential3:", exp3);