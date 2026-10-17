console.log(document.querySelector(".container").innerHTML); //.inner html will show all the html inside the particular selector including new lines and whitespaces
console.log(document.querySelector(".container").innerText); //.innerText will show all the text inside the particular selector including new lines and whitespace which means it won't show the html tags and other things aside from text.
console.log(document.querySelector(".container").outerHTML); //.outerHTML will show all the html inside the particular selector including new lines and whitespaces AND will also show the element itself in html
console.log(document.querySelector(".container").tagName); //tells what type of tag is the given element node
console.log(document.querySelector(".container").childNodes[0].nodeName); //tells what type of node is the given node, this tells us the type of node including text and comments which can't be done using tagName as it is for elements only
document.querySelector(".hidden").hidden=false; //we can manipulate the hidden attribute by setting it's boolean values
// document.querySelector(".container").innerHTML="This is inner HTML" we can change the innerHTML like this
console.log(document.querySelector(".container").hasAttribute("class")) //.hasAttribute returns a boolean value depending on whether the element has the attribute or not
console.log(document.querySelector(".container").getAttribute("style")) //.getAttribute returns the value the particular attribute has if the attribute doesn't exist null is returned
document.querySelector(".container").setAttribute("style", "display:inline") //.setAttribute("attribute","value") let us set the value of a particular attribute
console.log(document.querySelector(".container").attributes)//.attributes return a list containing all the attributes of a particular element
document.querySelector(".container").removeAttribute("style")//we can remove any attribute from an element using .removeAttribute("atr")
console.log(document.querySelector(".data").dataset) //.dataset gives us a key value pair where key are our custom attributes that are written after data- and value is the value assigned to them
let newEl=document.createElement("div");
newEl.setAttribute("class","inserted-el")
newEl.innerHTML="This is an inserted element"
document.querySelector(".container").append(newEl); //.append(element to be inserted) inserts a new element to the end of the selected element
document.querySelector(".container").prepend(newEl) //.prepend(element to be inserted) inserts a new element to the start of the selected element
document.querySelector(".container").before(newEl) //.before(element to be inserted) inserts a new element before the selected element
document.querySelector(".container").after(newEl) //.after(element to be inserted) inserts a new element after the selected element
// document.querySelector(".container").replaceWith(newEl) //.replaceWith(element to be inserted) replaces a new element with the selected element
document.querySelector(".container").insertAdjacentHTML("afterbegin","<div class=box>This is a new text</div>") //when we want to add a new html string we can use insertAdjacentHTML("where to insert i.e beforebegin afterbegin beforeend afterend")

