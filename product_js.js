// Custom JavaScript for carousel controls
$('.carousel').carousel({
    interval: 1000,  // Set the interval time in milliseconds (adjust as needed)
});
#pi4 .carousel-item,
#pi5 .carousel-item {
    font-family: 'Quicksand', sans-serif;
    height: auto; /* Adjust the height as needed */
}

function showPopup() {
    const popup = document.getElementById('popup-container');
    popup.style.display = 'flex';
}

// Function to close the popup
function closePopup() {
    const popup = document.getElementById('popup-container');
    popup.style.display = 'none';
}
