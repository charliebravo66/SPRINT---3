
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fLastN = document.getElementById("fLastN");
	var fEmail = document.getElementById("fEmail");
	var fPassword = document.getElementById("fPassword");
	var fAddress = document.getElementById("fAddress");
	var fPhone = document.getElementById("fPhone");

	let validaTodo = document.forms["formulario_registro"].value;
	if (validaTodo == "") {
	  alert("Debes rellenar todos los campos del formulario");	  
	  return false;
	}

	//let x = document.forms["myForm"]["fname"].value;
	//if (fName.value == "") {
	let valor = document.getElementById("fName").value;
		if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {	
	  alert("Debes rellenar el campo Nombre");
	  fName.focus();
	  //document.getElementById("fName").style.backgroundColor = "red";
	  return false;
	}
	
	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorLastN = document.getElementById("errorLastN"); 
	var errorEmail = document.getElementById("errorEmail");
	var errorPassword = document.getElementById("errorPassword"); 
	var errorAddress = document.getElementById("errorAddress"); 
	var errorPhone = document.getElementById("errorPhone");   
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == ""){
		//alert("falta rellenar pesau");
		return true;
	}

	if(fName.value.length >= 3 ){
		document.formulario_registro.fName.focus();
		errorName;
		return true;
	}else{
		return false;
	}

	var validaLetras = /^[A-Za-z]+$/i;
	if(!validaLetras.test(fName)){
		error = 1;
		document.formulario_registro.fName.focus();

	}

/*	if(fName.value == ""){
		error++;
	}*/
	// validar formato correcto Email 
	var validaMail = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;

	if (!validaMail.test(fEmail)){
		error = 1;
		document.formulario_registro.fEmail.focus();
	}
	if(fEmail.value == ""){
		alert("Falta rellenar Email");
		fEmail.focus();
		document.getElementById("fName").style.backgroundColor = "red";
		error++;
	}

	//validar numeros en Phone
   if(isNaN(fPhone)) {
    alert("El teléfono ingresado no es un número");
    return false;
   }


   if( !(/^\d{9}$/.test(fPhone)) ) {
	 return false;
   }

 
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

	if(fPhone.value == ""){
		let valorTelefono = document.getElementById("campo").value;if( !(/^\d{10}$/.test(valor)) ) 
		{ return false;}	
		error++;
	}



}

function enviado(){
	alert("Formulario Completo enviado !!")
}
	