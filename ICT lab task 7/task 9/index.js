 // Create a webpage that prompts the user for their name and age, then displays an alert with a
 // personalized message indicating whether they are an adult or a minor

// Prompt the user for their age and store the input in the variable 'userAge'
let userAge = prompt("How old are you?");

// Convert the user input (which is a string) to a number using parseInt. if the user enters non numeric value , parseint will return Nan and we can check that with isNan
userAge = parseInt(userAge); // Convert to a number

// Check if the input is not a number using isNaN
if (isNaN(userAge)) {
    // If input is not a valid number, show an alert message
    alert("Please enter a valid number.");
} else if (userAge >= 18) {
    // If the input is a number and greater than or equal to 18, they are an adult
    alert("You are an adult.");
} else {
    // If the input is a number and less than 18, they are a minor
    alert("You are a minor.");
}
