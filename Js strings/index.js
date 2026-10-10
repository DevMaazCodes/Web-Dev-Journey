let a="string"
console.log(a[1])//js has similar indexing way and access to char at particular index like cpp
console.log(a.length)//we can use .length to access the length of an array
let b="maaz"
console.log("This is a "+a+" video"+" and my name is "+b)
console.log(`This is a ${a} "video" and my name is ${b}.`) //instead of using + sign and doing more work we can simply use temmplate literals through backtic instead of quote and insert varible using the dollar sign, we can also console quotes inside template literal
// let c="str"ing"
//we can't print the above because there's confusion in where the string is ending to fix this we can use escape character as follows or we can simply use backtic to print "" inside
let c="str\"ing"
console.log(c)
let d="CoNfuSe"
console.log(d.toUpperCase()) //.toUpperCase() to print all char in uppercase
console.log(d.toLowerCase()) //.toLowerCase() to print all char in lowercase
console.log(d.slice(0,3)) //slice(start,end) to print the char of d from index start till end-1 cuz end range is not included
console.log(d.slice(2)) //slice(start) to print the char of d from index start till the last char