const prom1= new Promise((resolve,reject)=>{
     let a=Math.random();
     if(a<0.5){
        resolve("Yayy resolved 1")
     }
     else{
        reject("Shit, rejected 1")
     }
}) //instead of a callback we can have a promsise, it is a function which returns two types of callbacks, rejected or resolved. Initially the promise is pending, depending on our code either it gets rejected or it gets resolved, no matter what happens the resolved/rejected returns a value/reason which can be used using .then and .catch as done below
prom1
.then(key=>{
    console.log(key) //when a promise is resolved we can use .then to execute a function inside it, it is essentially a callback function which would run only if prom1 is resolved, the value returned is passed as a parameter to this function, we can also give an external function to .then as well but make sure to not use () because of callback functions principle
})
.catch(err=>{
    console.log(err) //when a promise is rejected we can use .catch to execute a function inside it, it is essentially a callback function which would run only if prom1 is rejected, the reason returned is passed as a parameter to this function, we can also give an external function to .catch as well but make sure to not use () because of callback functions principle
})
prom1
.then(value=>{
    console.log(value) //the value of the value parameter will be given by the resolve(value)
    return 2
})
.then(value=>{
    console.log(value)  //the value of the value parameter will be given by the previous function(.then) return
    return 1
})
.then(value=>{
    console.log(value) //the value of the value parameter will be given by the previous function(.then) return
    return 0
})
.then(value=>{
    console.log(value) //the value of the value parameter will be given by the previous(.then) function return
})
.catch(err=>{
    console.log(err) //any error/rejection will be caught here
}) //this is chaining of handlers
prom1.then(value=>{
    console.log("Independant 1") 
}) .catch(err=>{
    console.log(err)
})
prom1.then(value=>{
    console.log("Independant 2") 
})
.catch(err=>{
    console.log(err)
})
prom1.then(value=>{
    console.log("Independant 3") //these 3 are different handlers as they are not chained like above thus they act independently 
})
.catch(err=>{
    console.log(err)
})
const prom2= new Promise((resolve,reject)=>{
     let a=Math.random();
     if(a<0.5){
        resolve("Yayy resolved 2")
     }
     else{
        reject("Shit, rejected 2")
     }
})
const prom3= new Promise((resolve,reject)=>{
     let a=Math.random();
     if(a<0.5){
        resolve("Yayy resolved 3")
     }
     else{
        reject("Shit, rejected 3")
     }
})
let prom4 = Promise.all([prom1,prom2,prom3]) //we pass an array of promises inside the Promise.all if all the prom are resolved then only the promises.all will be considered fulfilled if any one of them throws error the .all will also be considered rejected and ignores all the other results given by successful promises
prom4
.then(value=>{
    console.log(value) //prints an array of the returned value of the promises fulfilled if all promises fulfilled
})
.catch(reason=>{
  console.log(reason) //prints the reason of the rejected promise
})
let prom5= Promise.allSettled([prom1,prom2,prom3])//we pass an array of promises inside the Promise.allSettled, once all the promises are settled i.e either rejected or fulfilled their status and value/reason will be returned as an array of object to prom5
prom5.then(value=>{
    console.log(value)
})
let prom6=Promise.race([prom1,prom2,prom3]) //we pass an array of promises inside the Promise.race, the first array to settle becomes our promise, its error will be prom6's error and its resolution value will be prom6's value
prom6.then(value=>{
    console.log(value)
})
.catch(err=>{
    console.log(err)
})
let prom6=Promise.race([prom1,prom2,prom3]) //