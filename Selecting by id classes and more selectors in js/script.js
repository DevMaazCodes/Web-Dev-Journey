console.log(document.getElementsByClassName("box")) //returns a html collection of all the elements with this class i.e box, can access each element via indexing which starts from 0 but ofc we can't simply style this as collections and lists can't be styled like strings and arrays
document.getElementsByClassName("box")[0].style.fontSize="40px"; //targeting using index
let x=document.getElementById("red-box") //.getElementById("ID") return a single element having the id="ID"/red-box in this case, if due to any error there are elements having same id it would return the first element ONLY
x.style.backgroundColor="red";
console.log(document.querySelectorAll(".box")) //.querySelectorAll("CSS selector") returns a nodelist of all the elements that will be targeted using the given selector, we can access each element using indexing as usual list does
document.querySelectorAll(".box")[4].style.backgroundColor="yellow"; //selects the 5th box i.e index 4
document.querySelector(".box").style.textDecoration="underline"; //.querySelector("Selector") is the shorthand for .querySelectorAll(Selector)[0], which means it simply returns the first element being targeted using the given selector
