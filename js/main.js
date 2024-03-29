// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var button = document.getElementById("mustWork");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Prevents scroll when Modal is active
var screen = document.querySelector('body');

// When the user clicks the button, open the modal 
button.onclick = function() {
    modal.style.display = "block";
    screen.style.overflowY = 'hidden';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    screen.style.overflowY = 'initial';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}