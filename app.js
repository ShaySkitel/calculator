// Add function
function add(num1, num2) {
    return num1 + num2;
}

// Subtract function
function subtract(num1, num2) {
    return num1 - num2;
}

// Multiply function
function multiply(num1, num2) {
    return num1 * num2;
}

// Divide function
function divide(num1, num2) {
    return num1 / num2;
}

// Return a calculation result based on the given operator
function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}

// Clear and reset everything
function clear() {
    display.textContent = "";
    num1 = "";
    num2 = "";
    operator = "";
}



const display = document.querySelector("main #info");
const allBtns = document.querySelectorAll("button");
let operator;
let num1 = "";
let num2 = "";

for (const btn of allBtns) {
    btn.addEventListener("click", displayPressedButtons);
}