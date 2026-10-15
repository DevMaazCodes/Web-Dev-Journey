console.log(document.getElementsByClassName("box")) //returns a html collection of all the elements with this class i.e box, can access each element via indexing which starts from 0 but ofc we can't simply style this as collections and lists can't be styled like strings and arrays
document.getElementsByClassName("box")[0].style.fontSize="40px"; //targeting using index
let x=document.getElementById("red-box") //.getElementById("ID") return a single element having the id="ID"/red-box in this case, if due to any error there are elements having same id it would return the first element ONLY
x.style.backgroundColor="red";
console.log(document.querySelectorAll(".box")) //.querySelectorAll("CSS selector") returns a nodelist of all the elements that will be targeted using the given selector, we can access each element using indexing as usual list does
document.querySelectorAll(".box")[4].style.backgroundColor="yellow"; //selects the 5th box i.e index 4
document.querySelector(".box").style.textDecoration="underline"; //.querySelector("Selector") is the shorthand for .querySelectorAll(Selector)[0], which means it simply returns the first element being targeted using the given selector
//to target any nodelist we can use simple foreach loop, for html collection we can't use a foreach loop though we can use forof/classic for
document.querySelectorAll(".box").forEach(element => {
    element.style.backgroundColor="aqua";
});
console.log(document.getElementsByTagName("div"))//.getElementsByTagName("tag") returns a HTML collection of all elements with given tag
console.log(document.getElementsByName("number-box"))//.getElementsByName("name") returns a node list of all elements with given name attribute.
let y=document.getElementsByName("number-box");
console.log(y[2].matches("#red-box")) //element.matches("css selector"), if element can be targeted by the css selector the output would be true else false
console.log(y[0].closest("body")) //.closest(css selector) showcases the closest ancestor that can be targeted by the given selector, if the element itself can be targeted by the selector then the closest function would return the element itself
let z=document.querySelector(".container")
console.log(z.contains(y[1])) //if z contains y[1] it would show true, el1.contains(el2) if el2 is a descendant of el1 it would output true else false, but if el1==el2 i.e z.contains(z) the output would be true because one is said to contain itself in js