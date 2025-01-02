// Mobile toggle
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLink');
    navLinks.classList.toggle('active');
}


// Open the Popup
function openPopup(content) {
    const popup = document.getElementById("popup");
    const popupDetails = document.getElementById("popup-details");

    popupDetails.innerHTML = content; 
    popup.style.display = "flex"; 
}

// Close the Popup
function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none"; 
}


// When the form is submitted
document.getElementById('portfolioContactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Get form elements
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    let isValid = true;

    // Checks if name is empty
    if (name.value.trim() === "") {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('nameError').style.display = 'none';
    }

    // Checks if email is valid
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email.value)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    // Checks if message is empty
    if (message.value.trim() === "") {
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('messageError').style.display = 'none';
    }

    
    if (isValid) {
        localStorage.setItem('name', name.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('message', message.value);

        alert('Form submitted successfully!');

        
        name.value = "";
        email.value = "";
        message.value = "";

        
        displayStoredData();
    }
});

// Function to display the stored data
function displayStoredData() {
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const message = localStorage.getItem('message');

    const dataContainer = document.getElementById('storedDataContainer');
    
    if (name && email && message) {
        dataContainer.innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>
        `;
    } else {
        dataContainer.innerHTML = `<p>No data submitted.</p>`;
    }
}


