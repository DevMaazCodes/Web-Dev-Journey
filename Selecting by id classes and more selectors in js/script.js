console.log(document.getElementsByClassName("box")) //returns a html collection of all the elements with this class i.e box, can access each element via indexing which starts from 0 but ofc we can't simply style this as collections and lists can't be styled like strings and arrays
document.getElementsByClassName("box")[0].style.fontSize="40px"; //targeting using index
