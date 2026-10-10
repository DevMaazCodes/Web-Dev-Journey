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
calc(1, "+", 5)