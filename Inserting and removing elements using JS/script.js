console.log(document.querySelector(".container").innerHTML); //.inner html will show all the html inside the particular selector including new lines and whitespaces
console.log(document.querySelector(".container").innerText); //.innerText will show all the text inside the particular selector including new lines and whitespace which means it won't show the html tags and other things aside from text.
console.log(document.querySelector(".container").outerHTML); //.outerHTML will show all the html inside the particular selector including new lines and whitespaces AND will also show the element itself in html
console.log(document.querySelector(".container").tagName); //tells what type of tag is the given element node
console.log(document.querySelector(".container").childNodes[0].nodeName); //tells what type of node is the given node, this tells us the type of node including text and comments which can't be done using tagName as it is for elements only
document.querySelector(".hidden").hidden=false; //we can manipulate the hidden attribute by setting it's boolean values
// document.querySelector(".container").innerHTML="This is inner HTML" we can change the innerHTML like this
console.log(document.querySelector(".container").hasAttribute("class")) //.hasAttribute returns a boolean value depending on whether the element has the attribute or not
console.log(document.querySelector(".container").getAttribute("style")) //.getAttribute returns the value the particular attribute has if the attribute doesn't exist null is returned
