let num=prompt("Enter your number for factorial:");
let numArr=[];
for(let index=num; index>=1; index--){
    numArr.push(index);
}
let fact= numArr.reduce((el1, el2)=>{
    return el1*el2;
})
alert(`Your factorial is ${fact}`)