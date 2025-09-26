// Get the button and the body element
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Function to apply the saved theme on page load
const applySavedTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    // If there's a saved theme and it's 'light', add the light-mode class
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
    }
};

// Function to handle the theme toggle
const toggleTheme = () => {
    // Toggle the .light-mode class on the body
    body.classList.toggle('light-mode');
    
    // Check if the body now has the light-mode class
    if (body.classList.contains('light-mode')) {
        // If yes, save 'light' to localStorage
        localStorage.setItem('theme', 'light');
    } else {
        // If no, save 'dark' to localStorage
        localStorage.setItem('theme', 'dark');
    }
};

// Add a click event listener to the button
themeToggle.addEventListener('click', toggleTheme);

// Apply the saved theme when the page loads
document.addEventListener('DOMContentLoaded', applySavedTheme);