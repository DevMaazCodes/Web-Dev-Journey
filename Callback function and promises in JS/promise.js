const prom1= new Promise((resolve,reject)=>{
     let a=Math.random();
     if(a<0.5){
        resolve("Yayy resolved")
     }
     else{
        reject("Shit, rejected")
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