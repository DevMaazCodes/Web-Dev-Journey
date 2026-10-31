let [x,y]=[5,10,12] //by this we can assign x and y the first two values of the array [5,10,12] i.e 5 and 10 respectively this is known as destructing
let [z, t, ...hi] = [5, 10, 12, 20, 50]; //...identifier assigns the rest of the elements after z and t as an array to the given identifier, like here z=5 t=10 hi=[12,20,50]
console.log(hi);
let obj={
    a:1,
    b:2,
    c:3,
    d:4
}
let {a,b}=obj; //this is how we destructure an object, we can choose any key from object and treat them as variable
console.log(a,b)
async function sleep() {
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve(3);
        },5000)
    })
}
(async function main(parameters){
    let a= await sleep();
    console.log(a);
    let b= await sleep();
    console.log(parameters);
})("parameters") //the function main is called itself as soon as the script runs because of the IIFE (immediate invoked function expression) feature if js, the syntax is shown above in simple words we enclose the function in () and then add a pair of () after the function and parameters inside it if needed
function sum(a,b,c){
    return a+b+c
}
let arr=[2,3,4]
let sum0=sum(arr[0],arr[1],arr[2])
console.log(sum0)
let sum1=sum(...arr) //this is same as above we can use ... (spread operator to open any array)
console.log(sum1)
let objar={...arr} //assigns the array values to index like 0:2,1:3,2:4