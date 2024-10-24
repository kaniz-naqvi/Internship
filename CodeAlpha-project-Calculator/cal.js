let menuIcon = document.querySelector(".menuIcon");
let cross = document.querySelector(".cross");
let hamBurger = document.querySelector(".hamburger");
let body = document.querySelector("body");
let allBtns = document.querySelectorAll("button");
let display = document.getElementById("input-value");
let result = document.querySelector(".result");

// Show hamburger menu and cross icon when menu is clicked
menuIcon.addEventListener("click", () => {
    menuIcon.style.display = "none";  // Hide menu icon
    cross.style.display = "block";     // Show cross icon
    hamBurger.style.display = "block"; // Show hamburger menu
});

// Hide hamburger menu and show menu icon when cross is clicked
cross.addEventListener("click", () => {
    cross.style.display = "none";      // Hide cross icon
    hamBurger.style.display = "none";  // Hide hamburger menu
    menuIcon.style.display = "block";  // Show menu icon again
});

// Toggle dark mode functionality
let darkmode = document.querySelector(".dark-mode");
let numericBtns = document.querySelectorAll(".num");
let lightmode = document.querySelector(".light-mode");

// Dark mode activation
darkmode.addEventListener("click", () => {
    body.classList.toggle("dark"); // Toggle dark mode for body
    hamBurger.classList.toggle("dark"); // Toggle dark mode for hamburger menu
    display.classList.toggle("dark"); // Toggle dark mode for display
    numericBtns.forEach(btn => {
        btn.classList.toggle("btn-dark"); // Toggle dark mode for each numeric button
    });
});

// Light mode activation
lightmode.addEventListener("click", () => {
    body.classList.remove("dark"); // Remove dark mode from body
    hamBurger.classList.remove("dark"); // Remove dark mode from hamburger menu
    numericBtns.forEach(btn => {
        btn.classList.remove("btn-dark"); // Remove dark mode from each numeric button
    });
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
                try {
                    if (expression.includes("*100/") && expression.length >= 7) {
                        result.innerHTML = eval(expression); // Show the result if valid
                    } else {
                        // Check if expression is valid before evaluation
                        if (isValidExpression(expression)) {
                            result.innerHTML = eval(expression); // Evaluate and show the result
                        }
                    }
                } catch (error) {
                    result.innerHTML = "Error"; // Show error if evaluation fails
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
