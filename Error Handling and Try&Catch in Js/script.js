let a = prompt("Enter first number:")
let b = prompt("Enter second number:")
//let sum=a+b; this wont work because fundamentally the + sign concatenate two strings and a and b are in string form so we need to parse them into integers using parseInt like below
let sum=parseInt(a)+parseInt(b) //this will work
console.log("Sum is "+sum)