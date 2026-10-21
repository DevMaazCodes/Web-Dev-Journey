let button= document.getElementById("btn")
button.addEventListener("keydown",(e)=>{
    alert("clicked")
    console.log(e)
}) //this is the syntax of event listener the first argument is event type and second is the event object which gives info about the event e.key is a very useful property because it tells the key pressed or event happened. There are multiple event types for mouse itself like click dblclick contextMenu etc.. we can get them from google
setInterval(()=>{
    document.querySelector(".box").style.backgroundColor="red";
    let y=Math.random();
    document.querySelector(".box").insertAdjacentHTML("beforeend",` ${y} `)
},(3000)) //setInterval(function,(time in ms)) let us set a function and time in ms and after every time passed the code will execute until it is cleared using clearInterval
clearInterval(1); //clearInterval(intervalID) let us stop the interval of the particular intervalID found from console.log() of the setInterval as it returns the id of the interval
setTimeout(()=>{
    document.querySelector(".box").style.backgroundColor="red";
    let y=Math.random();
    document.querySelector(".box").insertAdjacentHTML("beforeend",` ${y} `)
},(3000)) //settimeout(function,(time in ms)) let us set a function and time in ms and after the time (in ms) has passed the code will execute just once, i.e since reload in this case when 3s will be passed the code will be executed once and will never run again
clearTimeout(2); //clearTimeout(timeoutID) let us stop the timeout of the particular timeoutID found from console.log() of the setTimeout as it returns the id of the timeout