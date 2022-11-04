
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

}

function enviado(){
	alert("Formulario Completo enviado !!")
}
	