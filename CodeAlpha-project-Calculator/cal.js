let menuIcon = document.querySelector(".menuIcon");
let cross = document.querySelector(".cross");
let hamBurger = document.querySelector(".hamburger");

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
let body = document.querySelector("body");
let numericBtns = document.querySelectorAll(".num");
let lightmode = document.querySelector(".light-mode");
let display = document.getElementById("input-value");


darkmode.addEventListener("click", () => {
    body.classList.toggle("dark"); // Toggle dark class on body
    hamBurger.classList.toggle("dark"); // Toggle dark class on hamburger
    display.classList.toggle("dark")
    numericBtns.forEach(btn => {
        btn.classList.toggle("btn-dark"); // Toggle dark class on each numeric button
    });
});

lightmode.addEventListener("click", () => {
    body.classList.remove("dark"); // Remove dark class on body
    hamBurger.classList.remove("dark"); // Remove dark class on hamburger
    numericBtns.forEach(btn => {
        btn.classList.remove("btn-dark"); // Remove dark class on each numeric button
    });
});

// Calculator functionality
let allBtns = document.querySelectorAll("button");

// Initialize expression variable
let expression = "";

// Handle all button clicks
allBtns.forEach(element => {
    element.addEventListener("click", () => {
        let id = element.getAttribute("id");
        let value = element.innerHTML; // Get innerHTML for display

        // Handle special buttons (Clear, Delete, Result)
        switch (id) {
            case "C":
                expression = "";  // Clear expression
                display.value = "";  // Clear display
                break;
            case "del":
                expression = expression.slice(0, -1);  // Delete last character in expression
                display.value = expression;  // Update display
                break;
            case "result":
                try {
                    display.value = eval(expression);  // Evaluate expression
                    expression = display.value;  // Update expression with result
                } catch (error) {
                    display.value = "Error";  // Handle invalid expressions
                    expression = "";  // Reset expression
                }
                break;
            default:
                // Append button innerHTML to display and button ID to expression
                display.value += value;  // Update display with the button's inner HTML
                expression += id;  // For numbers and operators, just add the button's ID
        }
    });
});
