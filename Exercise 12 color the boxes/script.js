let color={
    0:"red",
    1:"blue",
    2:"white",
    3:"aqua",
    4:"orange"
}
let backgroundColor={
    0:"red",
    1:"blue",
    2:"white",
    3:"aqua",
    4:"orange"
}
let c_box1=Math.floor((Math.random()*100))%5;
let bg_box1=Math.floor((Math.random()*100))%5;
let c_box2=Math.floor((Math.random()*100))%5;
let bg_box2=Math.floor((Math.random()*100))%5;
let c_box3=Math.floor((Math.random()*100))%5;
let bg_box3=Math.floor((Math.random()*100))%5;
let c_box4=Math.floor((Math.random()*100))%5;
let bg_box4=Math.floor((Math.random()*100))%5;
let c_box5=Math.floor((Math.random()*100))%5;
let bg_box5=Math.floor((Math.random()*100))%5;
document.getElementById("box-1").style.color=color[c_box1]
document.getElementById("box-1").style.backgroundColor=backgroundColor[bg_box1]
document.getElementById("box-2").style.color=color[c_box2]
document.getElementById("box-2").style.backgroundColor=backgroundColor[bg_box2]
document.getElementById("box-3").style.color=color[c_box3]
document.getElementById("box-3").style.backgroundColor=backgroundColor[bg_box3]
document.getElementById("box-4").style.color=color[c_box4]
document.getElementById("box-4").style.backgroundColor=backgroundColor[bg_box4]
document.getElementById("box-5").style.color=color[c_box5]
document.getElementById("box-5").style.backgroundColor=backgroundColor[bg_box5]

