// script.js

// Function to handle the "Login" button click
function openLoginPage() {
    // Redirect to the login.html page
    window.location.href = 'login.html';
}

// Function to handle the "Create a new account" link click
function goToHomePage() {
    // Smoothly scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Function to handle the "Login" button click on the login.html page
function goBackToHomePage() {
    // Redirect to the index.html (home) page
    window.location.href = 'index.html';
}

// Function to handle the "Contact Us" link click
function scrollToContactSection() {
    const contactSection = document.querySelector('.contact-section');
    if (contactSection) {
        // Calculate the offset position of the contact section
        const offsetPosition = contactSection.offsetTop;

        // Smoothly scroll to the contact section
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Attach click event listeners to the elements
document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('.login-button');
    const registerLink = document.querySelector('.register');
    const loginButtonOnLoginPage = document.querySelector('.login-btn');
    const homeLink = document.querySelector('.nav-links li:first-child a'); // Change this selector to target the "Home" link
    const contactLink = document.querySelector('.nav-links li:nth-child(3) a'); // Change this selector to target the "Contact Us" link

    if (loginButton) {
        loginButton.addEventListener('click', openLoginPage);
    }

    if (registerLink) {
        registerLink.addEventListener('click', goToHomePage);
    }

    if (loginButtonOnLoginPage) {
        loginButtonOnLoginPage.addEventListener('click', goBackToHomePage);
    }

    if (homeLink) {
        homeLink.addEventListener('click', goToHomePage);
    }

    if (contactLink) {
        contactLink.addEventListener('click', scrollToContactSection);
    }
});
