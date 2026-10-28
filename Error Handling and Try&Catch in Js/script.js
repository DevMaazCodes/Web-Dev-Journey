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
} //the try catch is the pro way of handling errors though it is synchronous so any error through try catch wont be detected through async errors i.e when the compiler left the code block of try and catch the error wont be caught if an error comes like from setTimeout an error comes but due to the timeout no catch will be executed
function noError(){
    let y=12;
    let z=1;
    try{
        console.log(y+z);
        return null; //we return the function here
    }
    catch(err){
        console.log(err)
    }
    finally{
        console.log("Sum done") //the finally executes regardless of the return and try catch execution if try executes finally stills executes, before returning to main the finally always executes
    }
    
}
noError()
