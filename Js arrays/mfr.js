let arr=[2,4,6,1,3,11]
let newarr=arr.map((value,index,arr)=>{
    return value**2;
})//this the .map function, the syntax is like a foreach loop, we can map an array into another array like this
console.log(newarr)

console.log(arr.filter ((element)=>{
    if (element%2==0){
        return true
    }
    return false
})) //this is a filter function which passes a value only if the if the function called inside filter returns true, like here i called the compare function.
console.log(arr.reduce((el1,el2)=>{
    return el1+el2;
})) //the reduce function has a function inside it with 2 parameters one acting as odd elements and 1 even all the elements undergo an operation and the reduce function gives a final answer which is then printed
