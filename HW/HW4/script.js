var applePrice = 0.59;
var orangePrice = 0.49;
var bananaPrice = 0.39;
var salesTax = 0.05;
var isValidInputs = 1;

function isApplesNumberValid(number){

	if(isNaN(number) || number < 0 || number > 99 ){
		alert("Please Enter a number between 0-99 in Apples input");
		isValidInputs = 0;
		return false;
	}else{
			isValidInputs = 1;
		return true;
	}
}

function isOrangesNumberValid(number){

	if(isNaN(number) || number < 0 || number > 99 ){
		alert("Please Enter a number between 0-99 in Oranges Input");
		isValidInputs = 0;
		return false;
	}else{
		isValidInputs = 1;
		return true;
	}
}
function isBananasNumberValid(number){
	if(isNaN(number) || number < 0 || number > 99 ){
		alert("Please Enter a number between 0-99 in Bananas Input");
		isValidInputs = 0;
		return false;
	}else{
		isValidInputs = 1;
		return true;
	}
}

function computeCost(){

	// get the value form input boxes
	var appleAmt = document.getElementById("apples").value;
	var orangeAmt = document.getElementById("oranges").value;
	var bananaAmt = document.getElementById("bananas").value;


	if(isValidInputs)
	{
		// calculate subtotal
		var subTotalCost = ((applePrice * appleAmt) + (orangePrice * orangeAmt) + (bananaPrice * bananaAmt));

		// calculate total cost including tax
		var totalCost = subTotalCost * (1 + salesTax);

		// round cost to two decimal point
		var roundedPrice = totalCost.toFixed(2);

		document.getElementById("cost").value = roundedPrice;

		alert("Total Price is: " + roundedPrice);
	}
	else {
		alert("Please Enter Valid Inputs. Values in Range 0-99 are only accepted");
		//clear the form
		var appleAmt = document.getElementById("apples").value('');
		var orangeAmt = document.getElementById("oranges").value('');
		var bananaAmt = document.getElementById("bananas").value('');
	}
	return false;

}
