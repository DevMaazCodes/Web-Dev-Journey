let arr=[2,4,5,6,7,10] //i can simply create an array by simply creating a variable using [] and access it via indexing
console.log(arr[2])
console.log(arr.length) //like string .length gives me the length of array i.e the number of elements inside it
arr[0]=0; //since array are mutable unlike immutable strings we can make changes to it using index
console.log(arr[0])
console.log(arr.toString())//this outputs the array as a string where each element of array is output and they are comma seperated
console.log(arr.join(" and ")) //this can edit the places where comma when converted to toString and add a string instead of ,.
console.log(arr.pop()) //this prints the popped element from the array i.e 10
console.log(arr) //.pop() removes the last element i.e index [length-1] from the array so this prints the updated array without 10
console.log(arr.push("nine")) //this prints the new length of arr after pushing
console.log(arr) //.push(data) can be used to add a new element of any data type to the array at the very last and it returns the new length of the array
console.log(arr.shift()) //this prints the element removed from first after shifting
console.log(arr) //.shift() removes the first element i.e at index 0 from the array,.shift() is like pop but from front
console.log(arr.unshift("zero")) //this prints the new length after unshifting
console.log(arr) //.unshift adds a new element at front of the array it's like push but from front
