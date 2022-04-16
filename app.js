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

// Calculate and display results
function calculateAndDisplay(value) {
    if (num2 === "0") {
        display.textContent = num1;
        num2 = "";
        operator = value;
        display.textContent += value;
    } else {
        display.textContent = operate(operator, +num1, +num2);
        num1 = display.textContent;
        num2 = "";
        operator = value;
        display.textContent += value;
    }
}

// Display the user's button presses
function displayPressedButtons(e) {
    const value = e.target.textContent === "X" ? "*" : e.target.textContent;

    // If the user didn't choose to clear or calculate
    if (value !== "C" && value !== "=") {

        // if the user chose an operator
        if (value === "+" || value === "-" || value === "*" || value === "/") {

            // display calculation if right side number exists
            if (operator) {
                if (num2) {
                    calculateAndDisplay(value);
                }

                // Otherwise, display the chosen operator and assign it to the operator variable
            } else if (num1) {
                operator = value;
                display.textContent += value;
            }

            // Otherwise, if there is no operator
        } else {

            // Keep adding the pressed numbers values to num1 or num2 if an operator exists
            if (!operator) {
                num1 += value;
            } else {
                num2 += value;
            }
            display.textContent += value;

        }

    } else {
        // If user clicked on C, clear and reset everything
        if (value === "C") {
            clear();

            // Otherwise if the user pressed equals
        } else {

            // if the user tries to divide by 0, display num1.
            // otherwise display the calculation
            if (num2 === "0") {
                display.textContent = num1;
                num2 = "";
                operator = "";
            } else if (num2) {
                display.textContent = operate(operator, +num1, +num2);
                num1 = display.textContent;
                num2 = "";
                operator = "";
            }

        }

    }
}

const display = document.querySelector("main #info");
const allBtns = document.querySelectorAll("button");
let operator;
let num1 = "";
let num2 = "";

for (const btn of allBtns) {
    btn.addEventListener("click", displayPressedButtons);
}