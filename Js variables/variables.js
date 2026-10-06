console.log("Just like cout, used to give output")
var a=2
var b='a'
var c="hi"
console.log(typeof a, typeof b, typeof c) //we can use the typeof keyword to know the type of variable the identifier is holding, as js automatically identifies the type of variable when we declare using var
const a1=67; //we use the const keyword to declare and assign a variable which stays contant throughout the code and we can't change it by any means except changing the first assignment
console.log(a1);
console.log(a);
{
    let a=12; //the let keyword allow us to create local variables that are only accessible to the block of code they are present in, if we let a variable globally i.e not in any block we can access it anywhere in the file but if we let inside a block of code we can only access it inside the block it is present in unlike var which can be accessed anywhere in the code no matter where it is declared
    console.log(a);
}