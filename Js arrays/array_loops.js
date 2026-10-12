let arr=[2,4,3,7,5,9,10,1,100]
for(let i=0; i<arr.length; i++){
    console.log(arr[i])
 
}//one way is the simple for loop using i=0 i<arr.length and i++
arr.forEach((value,index,arr) => {
    console.log(value,index);
}) //we can also use a for each loop like this where value index and arr have to be in the same order inside brackets but we can change their name as they are mere identifiers
for(const it of arr){
    console.log(it)
} //we can use for of to iterate over an array
 