let num=prompt("Enter your number for factorial:")
let fact=1;
for(let index=num; index>=1; index--){
    fact*=index;
}
alert("Your factorial is "+fact);
