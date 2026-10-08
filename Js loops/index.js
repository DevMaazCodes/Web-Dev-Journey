console.log("Java script loops")
for(let i=1; i<=10; i++){
    console.log(i);
}
//basic for loop is same as c++
let obj={
    "Full name":"Mohammad Maaz",
    "Age":18,
    "Date of Birth":"21/10/2007"
}
for(const key in obj){
    console.log(key)
} //this is a for in loop usually used to print keys of object
for (const element of "12345MAAZ") {
 console.log(element);
} //this is a for of loop used to iterate over the elements of iterables like string/arrays
let i=-1;
while(i<=3){
    console.log(i);
    i++;
} //this while loop is same as c++ while loop and so is the do-while loop
