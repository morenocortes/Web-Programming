var applePrice = 0.59;
var orangePrice = 0.49;
var bananaPrice = 0.39;
var salesTax = 0.05;

function checkIfValidNumber(number, id){

	if(isNaN(number) || number < 0 || number > 99 ){
		alert("Please Enter a number between 0-99");

	}else{
		return true;
	}

}

function computeCost(){

// get the value form input boxes
var appleAmt = document.getElementById("apples").value;
var orangeAmt = document.getElementById("oranges").value;
var bananaAmt = document.getElementById("bananas").value;

// calculate subtotal
var subTotalCost = ((applePrice * appleAmt) + (orangePrice * orangeAmt) + (bananaPrice * bananaAmt));

// calculate total cost including tax
var totalCost = subTotalCost * (1 + salesTax);

// round cost to two decimal point
var roundedPrice = Math.round(totalCost * 100)/100;

document.getElementById("cost").value = roundedPrice;

alert("Total Price is: " + roundedPrice);

return false;

}
