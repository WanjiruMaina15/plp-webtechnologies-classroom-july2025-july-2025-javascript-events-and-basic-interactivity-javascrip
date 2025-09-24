// ====================
// Part 1: Event Handling Basics
// ====================

// Button click events
const button = document.getElementById('myButton');
button.onclick = function () {
    alert('Button Clicked - DOM Property Method');
};

let btn = document.getElementById('thirdButton');
let output = document.getElementById('output');

btn.addEventListener('click', function () {
    output.textContent = 'Button Clicked - addEventListener Method';
});

// Input field events
let input = document.getElementById('inputBox');

// keydown event
input.addEventListener('keydown', function (event) {
    console.log("You pressed this key: ", event.key);
});

// focus event
input.addEventListener('focus', function () {
    input.style.backgroundColor = 'lightblue';
});

// blur event
input.addEventListener('blur', function () {
    input.style.backgroundColor = 'lightyellow';
});


// ====================
// Part 2: Interactive Elements
// ====================

// Theme toggle (light/dark mode)
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

// Counter button example
let counterBtn = document.getElementById('counterBtn');
let counterDisplay = document.getElementById('counterDisplay');
let count = 0;

counterBtn.addEventListener('click', function () {
    count++;
    counterDisplay.textContent = "Count: " + count;
});

// Drag and drop example
let dragItem = document.getElementById('dragItem');
let dropzone = document.getElementById('dropzone');

dragItem.addEventListener('dragstart', function (event) {
    event.dataTransfer.setData('id', event.target.id);
});

dropzone.addEventListener('dragover', function (event) {
    event.preventDefault(); // allow drop
});

dropzone.addEventListener('drop', function (event) {
    event.preventDefault();
    let id = event.dataTransfer.getData('id');
    dropzone.appendChild(document.getElementById(id));
    dropzone.style.backgroundColor = 'lightgreen';
});


// ====================
// Part 3: Form Validation
// ====================

// Email validation
function validateEmail(email) {
    let format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return format.test(email);
}

// Password validation
function validatePassword(password) {
    // Minimum 8 chars, at least 1 uppercase, 1 lowercase, 1 number, 1 special char
    let format = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return format.test(password);
}

// Sign-up form validation
function validateSignUp() {
    let username = document.getElementById('username').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();

    // not empty
    if (!username || !email || !password) {
        alert('All fields are required!');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (!validatePassword(password)) {
        alert('Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.');
        return false;
    }

    alert('Form submitted successfully!');
    return true;
}

