 // Create a webpage that prompts the user for their name and age, then displays an alert with a
 // personalized message indicating whether they are an adult or a minor

// JavaScript function to prompt for the user's name and age, and display a personalized message
function checkAge() {
    // Prompt the user for their name
    let userName = prompt("What is your name?");
    
    // Prompt the user for their age
    let userAge = prompt("How old are you?");
    
    // Check if both name and age are provided
    if (userName && userAge) {
        // Convert the user-provided age from a string to a number
        userAge = parseInt(userAge);

        // Validate if the age is a valid number
        if (isNaN(userAge)) {
            // Alert the user if the input is not a number
            alert("Please enter a valid number for your age.");
        } else {
            // Check if the user is an adult (age 18 or above)
            if (userAge >= 18) {
                alert("Hello, " + userName + "! You are an adult.");
            } else {
                // If age is below 18, the user is a minor
                alert("Hello, " + userName + "! You are a minor.");
            }
        }
    } else {
        // Alert the user if either name or age is missing
        alert("Please provide both your name and age.");
    }
}

// Add an event listener to run the code when the page is fully loaded - for user experience
window.addEventListener('load', checkAge);

