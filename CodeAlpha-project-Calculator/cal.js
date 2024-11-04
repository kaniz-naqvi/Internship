let body = document.querySelector("body");
let allBtns = document.querySelectorAll("button");
let display = document.getElementById("input-value");
let result = document.querySelector(".result");
let toggleIcon = document.querySelector(".ri-toggle-line");
const inputField = document.getElementById("input-value");
let numaricNumbers = document.querySelectorAll(".num");

// Prevent keyboard from opening on mobile
inputField.addEventListener("focus", function() {
    this.blur();
});

// Toggle light and dark themes
toggleIcon.addEventListener("click", () => {
    body.classList.toggle("dark");
    display.classList.toggle("btn-dark");
    toggleIcon.classList.toggle("rotate");
    toggleIcon.classList.toggle("theme");
    toggleIcon.classList.toggle("ri-toggle-fill");
    toggleIcon.classList.toggle("ri-toggle-line");
    numaricNumbers.forEach(btn => btn.classList.toggle("btn-dark"));
});

// Calculator Functionality
let expression = "";
let lastResultDisplayed = false;

// Add event listener to all buttons
allBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        let buttonId = btn.getAttribute("id");

        // Clear all inputs and reset
        if (buttonId === "C") {
            expression = ""; 
            display.value = ""; 
            result.innerHTML = ""; 
            lastResultDisplayed = false;
        } 
        // Delete last character from expression
        else if (buttonId === "del") {
            expression = expression.slice(0, -1); 
            display.value = display.value.slice(0, -1);  
        } 
        // Calculate and display result
        else if (buttonId === "result") {
            try {
                if (isValidExpression(expression)) {
                    let evalResult = eval(expression);
                    display.value = evalResult;
                    result.innerHTML = "";
                    expression = "";
                    lastResultDisplayed = true;
                } else {
                    display.value = "Invalid Input";
                    result.innerHTML = "";
                    expression = "";
                    lastResultDisplayed = true;
                }
            } catch (error) {
                display.value = "Error";
                result.innerHTML = "";
                expression = "";
                lastResultDisplayed = true;
            }
        } 
        // Handle input for numbers and operators
        else {
            if (lastResultDisplayed) {
                display.value = ""; 
                expression = ""; 
                lastResultDisplayed = false; 
            }
            expression += buttonId; 
            display.value += btn.innerHTML; 
            
            // Evaluate expression and show result
            if (expression.length >= 3) {
                const validExpressionPattern = /(\d+[\+\-\*\/]\d+)/;

                if (validExpressionPattern.test(expression)) {
                    if (expression.includes("*100/") && expression.length >= 7) {
                        result.innerHTML = eval(expression);
                    } else if (isValidExpression(expression)) {
                        result.innerHTML = eval(expression); 
                    }
                } else {
                    result.innerHTML = ""; 
                }
            }
        }
    });
});

// Validate expression
function isValidExpression(expr) {
    // Pattern checks if the expression has only digits, operators, or parentheses
    const validChars = /^[0-9+\-*/()]*$/;
    const validSyntax = /^(\d+(\.\d+)?)([+\-*/](\d+(\.\d+)?))*$/;
    return validChars.test(expr) && validSyntax.test(expr);
}
