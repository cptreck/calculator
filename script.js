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
const point = document.querySelector(".btnPoint");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttonPress = button.value;
        
        if ((buttonPress === "+" || buttonPress === "-" || buttonPress === "*" || buttonPress === "/") && num1 === undefined) {
            topDisplay.textContent = display.textContent + buttonPress;
            num1 = display.textContent;
            operator = buttonPress;
            display.textContent = ""; 
            buttonPress = "";
            console.log("im in the first if");
        }
        
        if ((buttonPress === "+" || buttonPress === "-" || buttonPress === "*" || buttonPress === "/") && num2 === undefined) {
            num2 = display.textContent;
            topDisplay.textContent = operate(num1, operator, num2) + buttonPress;
            display.textContent = "";
            operator = buttonPress;
            buttonPress = "";
            num1 = operate(num1, operator, num2);      
            num2 = undefined;
            console.log("Im in the second if statment");
        }

        if (buttonPress === "=") {
            num2 = display.textContent;
            display.textContent = operate(num1, operator, num2);
            num1 = undefined;
            num2 = undefined;
            operator = undefined;
            buttonPress = "";
        }

        if (button.value === "reset"){
            topDisplay.textContent = "";
            display.textContent = "";
            num1 = undefined;
            num2 = undefined;
            operator = undefined;
            buttonPress = "";
        }

        if (display.textContent.includes('.')) {
            point.disabled = true;
        } else {
            point.disabled = false;
        }
        
        display.textContent += buttonPress;
    })
})

point.addEventListener('click', () => {         
    if (display.textContent.includes('.')) {
        point.disabled = true;
    } else {
        point.disabled = false;
    }
})