function buy(){
	var pizza = document.getElementById("pizza").value;
	var burger = document.getElementById("burger").value;
	var chicken = document.getElementById("chicken").value;

	var bill = "";
	if (pizza + burger + chicken == 0){
		bill += "Please purchase something first.";
		alert(bill);
	}else{
		bill += "List of items\n";
		var vPizza = pizza*6.99;
		var vBurger = burger*1.99;
		var discount = -Math.floor(burger/3) * 1.99;
		var vChicken = chicken*4.49;

		if(pizza > 0){
			bill += "Pizza:		" + pizza + "		+" + vPizza + "\n"; //Tabs neccesary to have a format
		}
		if(burger > 0){
			bill += "Burger:		" + burger + "		+" + vBurger + "\n";
			bill += "Discount: 			" + discount + "\n";

		}
		if(chicken > 0){
			bill += "Chicken:	" + chicken + "		+" + vChicken + "\n";

		}
		var total = Math.floor((0+vPizza+vBurger+discount+vChicken)*100)/100; //Neccesary to erase errors
		bill += "\n" + "Total: 			" + total+"\n\nClic accept to confirm\nThanks for your purchase!";
	confirm(bill);
	}
}