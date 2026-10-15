console.log( document.body.childNodes) //we use .childNodes to access all the child nodes of an element
console.log(document.body.childNodes[1]) //gives the second childNodes of the child node collection(the indexing of collection is just like array), note that collection is like an array but not actually an array , we need to use array.from(collection)  to convert to arrray
console.log(document.body.firstChild) //gives us the first child of the body
console.log(document.body.lastChild) //gives us the last child of the body
console.log(document.body.firstElementChild) //gives us the first child that's not a text node i.e AN ELEMENT of the body
console.log(document.body.lastElementChild) //gives us the last child that's not a text node i.e AN ELEMENT of the body
console.log(document.body.childNodes[5].childNodes[1].parentElement) //gives us the parentElement of the childnode
console.log(document.body.childNodes[5].childNodes[3].previousElementSibling) //previousElementSibling gives us the closest sibling THAT IS AN ELEMENT not a text
console.log(document.body.children) //.children tells us the HTML elements of the body or whatever the selector is unlike child nodes which gives the text and comment nodes along with the elements
console.log(document.body.firstElementChild.children[1]) //we can also use indexing for children as well
let cont=document.body.firstElementChild //stored container as a varible for easier targeting
console.log(cont.children[2].nextElementSibling) //gives the next sibling i.e an element
console.log(cont.previousSibling) //gives the previous sibling regardless of its type means it can show a text or comment as well
console.log(cont.nextSibling) //gives the next sibling regardless of its type means it can show a text or comment as well
