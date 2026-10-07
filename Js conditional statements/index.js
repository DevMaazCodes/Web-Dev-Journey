let c=3;
let a=2;
let b=a**c; //ik all the other operators but ** is new it stands for exponential a**c means a to the power c i.e 2^3.
console.log(b);
let a1=2;
let b1="2"; //if we use simple == operator to check whether a1=b1 it would show this as true even though there data type is different
a1===b1; //using === operator checks if the value and DATA TYPE  both are same if either is diiferent this would result as a false statement
if(/*condition*/1==1){
  
} //simple if statement used only one condition to evaluate
if(/*condition*/1==1){
  
} 
else{
        //will be executed if the "if" block doesn't run
} //if-else statement used when only one condition to check and if condition is false we want something to execute 
if(/*condition*/1==1){
  
} 
else if(/*condition*/1===4){

}
else if(/*condition*/1===4){

}
else if(/*condition*/1===4){

}
else{
        //will be executed if the "if" block doesn't run
} //if else if ladder used when multiple conditions to check and based on it we have multiple outputs
let y=1;
let z=5;
let x= y<z ? y+z:y-z; //we can use the ternary operator (?) instead of the usual if-else block the syntax is condition ? (operation to execute if condition is true) : (operation to be executed if condition is false)
console.log(x);
