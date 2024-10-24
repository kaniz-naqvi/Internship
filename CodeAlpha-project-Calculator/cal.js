let body = document.querySelector("body");
let allBtns = document.querySelectorAll("button");
let display = document.getElementById("input-value");
let result = document.querySelector(".result");
let toggleIcon= document.querySelector(".ri-toggle-line")
const inputField = document.getElementById("input-value");

// Prevent keyboard from opening on mobile by blurring input on focus
inputField.addEventListener("focus", function() {
    this.blur();
});


// Toggle dark mode functionality
toggleIcon.addEventListener("click", () => {
    body.classList.toggle("dark"); 
    display.classList.toggle("btn-dark"); 
    toggleIcon.style.transform = "rotate(360deg)";
    toggleIcon.style.transition = "transform 0.5s";
    allBtns.forEach(btn => btn.classList.toggle("btn-dark"));
});


// Calculator Functionality
let expression = ""; // Initialize an empty expression for calculations
let lastResultDisplayed = false; // Track if the last action was a result display

// Add event listener to all buttons
allBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        let buttonId = btn.getAttribute("id");        
        
        // Clear all inputs and reset
        if (buttonId === "C") {
            expression = "";
            display.value = ""; 
            result.innerHTML = ""; 
            lastResultDisplayed = false; // Reset last result state
        } 
        // Delete last character from the expression
        else if (buttonId === "del") {
            expression = expression.slice(0, -1); 
            display.value = display.value.slice(0,-1);  
        } 
        // Calculate and display the result
        else if (buttonId === "result") {
            try {
                let evalResult = eval(expression);
                display.value = evalResult; // Display the calculated result
                result.innerHTML = ""; // Clear result display
                expression = ""; // Reset expression after calculation
                lastResultDisplayed = true; // Mark that result was displayed
            } catch (error) {
                display.value = "Error"; 
                result.innerHTML = ""; 
                expression = ""; // Reset expression on error
            }
        } 
        // Handle input for numbers and operators
        else {
            // Clear result if it was displayed previously
            if (lastResultDisplayed) {
                display.value = ""; // Clear input display
                expression = ""; // Clear expression
                lastResultDisplayed = false; // Reset last result state
            }
            
            expression += buttonId; // Append button ID to the expression
            display.value += btn.innerHTML; // Update the display with the input value
            
            // Evaluate the current expression and show the result
            if (expression.length >= 3) {
                
                    if (expression.includes("*100/") && expression.length >= 7) {
                        result.innerHTML = eval(expression); // Show the result if valid
                    } else {
                        // Check if expression is valid before evaluation
                        if (isValidExpression(expression)) {
                            result.innerHTML = eval(expression); // Evaluate and show the result
                        }
                        else{
                            result.innerHTML ="";
                        }
                    }
                
            }
        }
    });
});

// Helper function to validate expression
function isValidExpression(expr) {
    // Add conditions to check for valid characters, balance of operators, etc.
    const validChars = /^[0-9+\-*/().]*$/; // Allow only digits and operators
    return validChars.test(expr); // Test against valid characters
}
