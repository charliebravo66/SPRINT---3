
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");

	let validaTodo = document.forms["formulario_registro"].value;
	if (validaTodo == "") {
	  alert("Debes rellenar todos los campos del formulario");	  
	  return false;
	}

	//let x = document.forms["myForm"]["fname"].value;
	if (fName.value == "") {
	  alert("Debes rellenar el campo Nombre");
	  fName.focus();
	  document.getElementById("fName").style.backgroundColor = "red";
	  return false;
	}else{
		alert("muy bien");
		document.getElementById("fName").style.backgroundColor = "";	
		return false;
	}

	
	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == ""){

		error++;
	}

	if(fEmail.value == ""){
		alert("Falta rellenar Email");
		fEmail.focus();
		error++;
	}
	 
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

}
