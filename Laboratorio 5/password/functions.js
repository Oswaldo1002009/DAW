function validate(){
	var p1= document.getElementById("psw");
	var p2= document.getElementById("psw2");

	if ( p1.value === p2.value ){
	  alert("Valid User");
	}
	else {
		alert("Invalid User. Passwords must match.");
	}
}