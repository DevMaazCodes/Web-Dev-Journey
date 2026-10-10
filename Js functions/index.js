function random(){
console.log("This is a random function")
} //this is the syntax of fucntion in js we dont need to specify the return type in js unlike cpp instead we use the basic fuonction keyword
random()
function sum(a,b){
    console.log(a+b)
}//in js we dont need to mention the type of data the parameters hold instead we just name them
sum(6,9)
function div(a,b,c=2){
    return a/b*c;
}//we can also return values to where the fucntion was called and also we can hv default arguments like c here which is 2 by default but if a third argument is passed c will take that value
console.log(div(6,3))
console.log(div(9,9))
console.log(div(18,3,3)) //the second 3 is optional argument as c was a default parameter
const func1 = (x)=>{
    console.log("This is a arrow function "+x);
} //this is an arrow function which means we can create a function like a variable without using the function keyword
func1(45);