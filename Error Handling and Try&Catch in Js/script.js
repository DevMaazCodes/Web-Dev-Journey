let a = prompt("Enter first number:")
let b = prompt("Enter second number:")
//let sum=a+b; this wont work because fundamentally the + sign concatenate two strings and a and b are in string form so we need to parse them into integers using parseInt like below
if(isNaN(a)||isNaN(b)){
    throw SyntaxError("Sorry, you need to write a number") //this is how we throw a custom error
}
let sum=parseInt(a)+parseInt(b) //this will work but if the user wrote anything other than a number then the sum will not be a number(NaN)

console.log("Sum is "+sum)