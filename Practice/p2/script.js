// peekaboo.js
// Display a picture when the mouse button is pressed,
// no matter where it is on the screen

// The event handler function to display the picture
document.onmousedown = userClicked;

function userClicked() {
	var x = event.clientX;
	var y = event.clientY;
	var picObject = document.getElementById("picture");
	picObject.style.display = '';
	picObject.style.position = 'absolute';
	//picObject.style.left = x + 'px';
	//picObject.style.top = y + 'px';
	picObject.style.visibility = "visible";
}

// The event handler function to hide the picture
document.onmouseup = hideIt;

function hideIt() {
	document.getElementById("picture").style.visibility = "hidden";
};
