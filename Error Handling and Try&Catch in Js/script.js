let a = prompt("Enter first number:")
let b = prompt("Enter second number:")
//let sum=a+b; this wont work because fundamentally the + sign concatenate two strings and a and b are in string form so we need to parse them into integers using parseInt like below
if(isNaN(a)||isNaN(b)){
    throw SyntaxError("Sorry, you need to write a number") //this is how we throw a custom error
}
let sum=parseInt(a)+parseInt(b) //this will work but if the user wrote anything other than a number then the sum will not be a number(NaN)
//let multip=sum*x; x is not defined so will show a referenceError x is not defined we will use try catch to fix it as below
console.log("Sum is "+sum)
try{
    console.log(sum*x) //if no error try will execute
}
catch(err){
    console.log("Shit, its a error") //if error it will caught in catch block
    console.log(err) //this is the error object will shows the details of the error it is a parameter of the catch function
} //the try catch is the pro way of handling errors
