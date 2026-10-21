let button= document.getElementById("btn")
button.addEventListener("keydown",(e)=>{
    alert("clicked")
    console.log(e)
}) //this is the syntax of event listener the first argument is event type and second is the event object which gives info about the event e.key is a very useful property because it tells the key pressed or event happened. There are multiple event types for mouse itself like click dblclick contextMenu etc.. we can get them from google
setInterval(()=>{
    document.querySelector(".box").style.backgroundColor="red";
    let y=Math.random();
    document.querySelector(".box").insertAdjacentHTML("beforeend",` ${y} `)
},(3000)) //setInterval(function,(time in ms)) let us set a function and time in ms and after every time passed the code will execute
clearInterval(1); //clearInterval(intervalID) let us stop the interval of the particular intervalID found from console.log() of the setInterval as it returns the id of the interval