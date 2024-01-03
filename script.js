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
let buttonPress;

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

const topDisplay = document.querySelector(".calc-top-display");
const display = document.querySelector('.calc-display');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttonPress = button.value;
        topDisplay.textContent += display.textContent;
        // possibly change the num1 & num2 variable from taking from the display and get the values from another variable. Gather variable while 
        if ((buttonPress === "+" || button.textContent === "-" || buttonPress === "*" || buttonPress === "/") && num1 === undefined) {
            num1 = display.textContent;
            operator = buttonPress;
            display.textContent = ""; //this might need to change 
            buttonPress = "";
            console.log("im in the first if");
        }
        
        if ((buttonPress === "+" || button.textContent === "-" || buttonPress === "*" || buttonPress === "/" || buttonPress === "=") && num2 === undefined) {
            num2 = display.textContent;
            display.textContent = operate(num1, operator, num2);
            operator = buttonPress;
            buttonPress = "";
           // num1 = display.textContent;
            num2 = undefined;
            console.log("Im in the second if statment");
        }

        if (button.value === "reset"){
            topDisplay.textContent = "";
            display.textContent = "";
            num1 = undefined;
            num2 = undefined;
            operator = undefined;
            buttonPress = "";
        }
        
        display.textContent += buttonPress;
    })
})