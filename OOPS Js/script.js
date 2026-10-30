let human = {
    eats: true,
    breathe: true
}
let maaz = {
    workout: true,
    study: true
}
maaz.__proto__ = human; //this the way of setting the prototype object which helps us to give additional properties (key,value pair) to our object
class animal {
    constructor(name) {
        this.name = name //the constructor is automatically ran upon creating a new object
    }
    eats() {
        console.log("He eats a lot")
    }
    run() {
        console.log("He runs a lot")
    }
} //this is the syntax of creating a class and its related member functions, we use this keyword to assign properties to different objects

let Tiger = new animal("Tiger") //this is how we create 
console.log(Tiger)

class birds extends animal { //we use the extends keyword for using inheritance in js the class x extend y means x inherits y's properties
    constructor(name) {
        super(name) //we need to call super() to run the parent class constructor before accessing this.xyz in our child constructor
        console.log("This is a parrot")
    }
    eats(){ //if two function have the same name in parent and child class then the child class would simply override the parent method
        console.log("This is a parrot eating")
        super.eats(); //we can also use the super keyword to use the eats function of parent class
    }
    static auto(){
        console.log("I need no object creation i can be called from class itself without creating an object like done below")
    }
}
let b = new birds("Parrot");
console.log(b)
birds.auto() //calling static function without the need of objects
console.log(b instanceof birds) //if we want to check if some object is the part of x class we can use instanceof operator example syntax is obj instanceof x, obj is also inside the parent class of its class 