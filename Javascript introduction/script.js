alert("This is an alert message"); //we can use alert to prompt a message when someone enters the site
console.log("This is a message to the console") //we use console.log to give a static message to the console
var a=prompt(
    "Enter your number" //we can let a variable using var keyword and then take an input from user using a prompt
)
console.log("The number is "+a); //we store the value in console using .log function
var istrue=confirm("Do you want to continue to the site"); //We can use the confirm function to generate an ok or cancel message
if(istrue){
    console.log("CONTINUE");
}
else{
    console.log("Leave")
}