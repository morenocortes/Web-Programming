/*

This program will calulate the total cost for the amount of
items "purchased" with tax included.

*/

function checkIfValidNumber(number){

	if(isNaN(number) || number < 0 || number > 99 ){
		alert("Please Enter a number between 0-99");
	}else{
		return true;
	}

}


function computeCost(){
// set the price of our items
var applePrice = 0.59;
var orangePrice = 0.49;
var bananaPrice = 0.39;
var salesTax = 0.05;

// get the value of the users entered input
var appleAmt = document.getElementById("apples").value;
var orangeAmt = document.getElementById("oranges").value;
var bananaAmt = document.getElementById("bananas").value;

// compute the cost
var totalCost = ((applePrice * appleAmt) + (orangePrice * orangeAmt) + (bananaPrice * bananaAmt));

// compute the tax
var taxTotal = totalCost * salesTax;

// round to only display two decimals
var roundedPrice = Math.round((totalCost + taxTotal)*100)/100;


// set the price to show the user the total amt
document.getElementById("cost").value = roundedPrice;

alert("Total Price is: " + roundedPrice);

return true;

}

function clearForm(){

var appleAmt = document.getElementById("apples").value('');
var orangeAmt = document.getElementById("oranges").value('');
var bananaAmt = document.getElementById("bananas").value('');
}
