// script.js

// Function to go back one page in the browser history
function goBack() {
    window.history.back();
}

// Add event listener to the button after the DOM is loaded
window.onload = function() {
    document.getElementById("goBackButton").addEventListener("click", goBack);
};
