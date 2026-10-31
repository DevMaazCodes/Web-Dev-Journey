let [x,y]=[5,10,12] //by rhis we can assign x and y the first two values of the array [5,10,12] i.e 5 and 10 respectively this is known as destructing
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