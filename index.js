// Mobile toggle
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLink');
    navLinks.classList.toggle('active');
}

// Open the Popup
function openPopup(content) {
    const popup = document.getElementById("popup");
    popup.style.display = "flex"; 
    const popupContent = document.getElementById('popupContent');
}
// Close Popup
function closePopup() {
    const popup = document.getElementById('popup');
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

    // Check if name is empty
    if (name.value.trim() === "") {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('nameError').style.display = 'none';
    }

    // Check if email is valid
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email.value)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    // Check if message is empty
    if (message.value.trim() === "") {
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('messageError').style.display = 'none';
    }

    // If all fields are valid, stores the data in local storage 
    if (isValid) {
        localStorage.setItem('name', name.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('message', message.value);

        alert('Your form has been submitted successfully!');

        
        name.value = "";
        email.value = "";
        message.value = "";

       
        displayStoredData();
    }
});


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
        dataContainer.innerHTML = `<p>No data submitted yet.</p>`;
    }
}



