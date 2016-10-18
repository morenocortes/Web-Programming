document.onmousedown = onMouseClick;
document.onmouseup = hideImage;


function onMouseClick() {
	var x = event.clientX;
	var y = event.clientY;
	var pic = document.getElementById("picture");

	pic.style.position = 'absolute';
	pic.style.left = (x-90) + 'px';
	pic.style.top = (y-110) + 'px';
	pic.style.visibility = "visible";

}


function hideImage() {
	document.getElementById("picture").style.visibility = "hidden";
};
