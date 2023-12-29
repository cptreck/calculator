function add(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2); 
    return num1 + num2;
}

function minus(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2); 
    return num1 - num2;
}

function multiply(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2); 
    return num1 * num2;
}

function divide(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2); 
    return num1 / num2;
}

let num1;
let num2;
let operator;

function operate(num1, operator, num2) {
    if (operator === "+") {
       return add(num1, num2);
    }

    if (operator === "-") {
        return minus(num1, num2);
    }

    if (operator === "*") {
        return multiply(num1, num2);
    }
    
    if (operator === "/") {
        return divide(num1, num2);
    }
}