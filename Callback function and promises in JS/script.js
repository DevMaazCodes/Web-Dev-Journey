console.log("I am a synchronous guy") //by synchronous function i mean the functions will will be initiated and completed one by one top to bottom.
console.log("I am synchronous guy 2")
setTimeout(()=>{
    console.log("I am inside setTimeout so I am asynchronous")
},(5000)) //by asynchronous i mean that no matter the delay even if it is 0ms the code inside setTimeout will run only after the script is finished, this is because js let async function be handled later regardless of its position in script