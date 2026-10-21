let button= document.getElementById("btn")
button.addEventListener("keydown",(e)=>{
    alert("clicked")
    console.log(e)
}) //this is the syntax of event listener the first argument is event type and second is the event object which gives info about the event e.key is a very useful property because it tells the key pressed or event happened. There are multiple event types for mouse itself like click dblclick contextMenu etc.. we can get them from google