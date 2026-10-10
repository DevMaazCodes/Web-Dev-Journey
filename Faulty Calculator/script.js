
const calc = (a, op, c) => {
    let rand = Math.random()
    if (rand < 0.1 && op == "+") {
        console.log(a - c);
    }
    else if (rand < 0.1 && op == "-") {
        console.log(a + c);
    }
    else if (rand < 0.1 && op == "*") {
        console.log(a / c);
    }
    else if (rand < 0.1 && op == "/") {
        console.log(a * c);
    }
    else if (op == "-") {
        console.log(a - c);
    }
    else if (op == "+") {
        console.log(a + c);
    }
    else if (op == "*") {
        console.log(a * c);
    }
    else if (op == "/") {
        console.log(a / c);
    }
    else {
        console.log("Bad operator")
    }
}
let a,b,c;
a=Number(prompt("Enter first number"))
b=prompt("Enter operator")
c=Number(prompt("Enter second number"))
calc(a,b,c)