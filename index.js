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
