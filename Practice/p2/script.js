// peekaboo.js
// Display a picture when the mouse button is pressed,
// no matter where it is on the screen

// The event handler function to display the picture
document.onmousedown = userClicked;
document.onmouseup = hideImage;


function onMouseClick() {
	var x = event.clientX;
	var y = event.clientY;
	var picObject = document.getElementById("picture");
	picObject.style.display = '';
	picObject.style.position = 'absolute';
	picObject.style.left = x + 'px';
	picObject.style.top = y + 'px';
	picObject.style.visibility = "visible";
}


function hideIt() {
	document.getElementById("picture").style.visibility = "hidden";
};
