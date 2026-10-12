let arr=[2,4,5,6,7,10] //i can simply create an array by simply creating a variable using [] and access it via indexing
console.log(arr[2])
console.log(arr.length) //like string .length gives me the length of array i.e the number of elements inside it
arr[0]=0; //since array are mutable unlike immutable strings we can make changes to it using index
console.log(arr[0])
console.log(arr.toString())//this outputs the array as a string where each element of array is output and they are comma seperated
console.log(arr.join(" and ")) //this can edit the places where comma when converted to toString and add a string instead of ,.
console.log(arr.pop()) //this prints the popped element from the array i.e 10
console.log(arr) //.pop() removes the last element i.e index [length-1] from the array so this prints the updated array without 10