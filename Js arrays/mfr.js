let arr=[2,4,6,1,3,11]
let newarr=arr.map((value,index,arr)=>{
    return value**2;
})//this the .map function, the syntax is like a foreach loop, we can map an array into another array like this
console.log(newarr)