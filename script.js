const container = document.getElementById('container');
const signInButton = document.getElementById('signIn');
const signUpButton = document.getElementById('signUp');

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

// Sample credentials for demonstration
const correctEmail = "laibatahir@gmail.com";
const correctPassword = "laiba156";

document.querySelector(".sign-in-container form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    const emailInput = document.querySelector(".sign-in-container input[type='text']").value;
    const passwordInput = document.querySelector(".sign-in-container input[type='password']").value;
    
    const messageContainer = document.getElementById('message');

    // Check credentials
    if (emailInput === correctEmail && passwordInput === correctPassword) {
        // Success message
        messageContainer.textContent = "Login successful! Redirecting...";
        messageContainer.style.color = "green";
        setTimeout(() => {
            messageContainer.textContent = ""; // Clear message after delay
            // You can add a redirect here if needed
        }, 2000);
    } else {
        // Error message
        messageContainer.textContent = "Incorrect credentials. Please try again.";
        messageContainer.style.color = "red";
        setTimeout(() => {
            messageContainer.textContent = ""; // Clear message after delay
        }, 2000);
    }
});
