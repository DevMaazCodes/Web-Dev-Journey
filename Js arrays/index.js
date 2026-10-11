let arr=[2,4,5,6,7,10] //i can simply create an array by simply creating a variable using [] and access it via indexing
console.log(arr[2])
console.log(arr.length) //like string .length gives me the length of array i.e the number of elements inside it
arr[0]=0; //since array are mutable unlike immutable strings we can make changes to it using index
console.log(arr[0])