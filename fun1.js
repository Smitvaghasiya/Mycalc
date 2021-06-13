function add(n){
	document.getElementById("ans").innerHTML = document.getElementById("ans").innerHTML + n;
}

function add1(n1){
	temp = document.getElementById("ans").innerHTML	;
	document.getElementById("ans").innerHTML = "";
	document.getElementById("ansdisplay").innerHTML = temp + n1;
	temp1 = n1; 
}

function total() {

	a = document.getElementById("ans");
	newTemp = a.innerHTML;
	if (temp1 == "+") {
		a.innerHTML = parseInt(temp) + parseInt(newTemp);
	}
	else if (temp1 == "-") {
		a.innerHTML = parseInt(temp) - parseInt(newTemp);
	}
	else if (temp1 == "*") {
		a.innerHTML = parseInt(temp) * parseInt(newTemp);
	}
	else if (temp1 == "/") {
		a.innerHTML = parseInt(temp) / parseInt(newTemp);
	}
}

function reset() {
	document.getElementById("ans").innerHTML = "0";
}