console.log("I am a synchronous guy") //by synchronous function i mean the functions will will be initiated and completed one by one top to bottom.
setTimeout(()=>{
    console.log("I am inside setTimeout so I am asynchronous")
},(0)) //by asynchronous i mean that no matter the delay even if it is 0ms the code inside setTimeout will run only after the script is finished, this is because js let async function be handled later regardless of its position in script
const callback=(arg)=>{
    console.log(arg)
}
const loadScript=(src,callback)=>{
    let sc= document.createElement("script")
    sc.setAttribute("src",src)
    sc.onload=callback("hey everyone"); //this is a callback function
    document.head.append(sc)
} //this is a callback function example, callback fucntions are functions whihc can be run on demand whenever the function task is completed
loadScript("script.js",callback)
console.log("I am synchronous guy 2")
// const LoadScript=(src,callback)=>{
//  const calling=(src,called)=>{
//     const called=()=>{
//     }
//  }
// } This is known as callback hell or pyramid of doom which means nesting of callback functions making it difficult to manage. To solve this we use promises