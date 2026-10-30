let human={
    eats:true,
    breathe:true
}
let maaz={
    workout:true,
    study:true
}
maaz.__proto__=human; //this the way of setting the prototype object which helps us to give additional properties (key,value pair) to our object
class animal{
    constructor(name){
        this.name=name //the constructor is automatically ran upon creating a new object
    }
    eats(){
        console.log("He eats a lot")
    }
    run(){
        console.log("He runs a lot")
    }
} //this is the syntax of creating a class and its related member functions, we use this keyword to assign properties to different objects

let Tiger= new animal("Tiger") //this is how we create 
console.log(Tiger)

class birds extends animal{ //we use the extends keyword for using inheritance in js the class x extend y means x inherits y's properties

}
let b=new birds("Parrot");
console.log(b)