
// Exercise 6
// Example starter JavaScript for disabling form submissions if there are invalid fields

function validar() {
	var error = 0;
	// Get the input fields
	// crear variables de los inputs 
	let fName = document.getElementById("fName");
	let fLastN = document.getElementById("fLastN");
	let fEmail = document.getElementById("fEmail");
	let fPassword = document.getElementById("fPassword");
	let fAddress = document.getElementById("fAddress");
	let fPhone = document.getElementById("fPhone");


	// Get the error elements
	let errorName = document.getElementById("errorName");
	let errorLastN = document.getElementById("errorLastN"); 
	let errorEmail = document.getElementById("errorEmail");
	let errorPassword = document.getElementById("errorPassword"); 
	let errorAddress = document.getElementById("errorAddress"); 
	let errorPhone = document.getElementById("errorPhone");   
	
	let valNombre = document.getElementById("fName").value;
	let valApellido = document.getElementById("fLastN").value;
	let validaMail = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
	let validaPass = /^(?=.*[0-9])(?=.*[a-z]).{3,8}/;
	let validaPhone = /^[0-9]{3,}$/;

	// validación input nombre
	if(valNombre == null || valNombre.length == 0 || /^\s+$/.test(valNombre)) {	
	  	alert("primera validación");
			fName.focus();
		   errorName;
			alert("mal");
			fName.classList.add("is-valid");
			fName.classList.remove("is-invalid");
			
	} else {
		alert("bien");
        fName.classList.add("is-invalid");
        fName.classList.remove("is-valid");
		
    }

	// validación input apellido
	if(valApellido == null || valApellido.length == 0 || /^\s+$/.test(valApellido)) {	
		alert("primera validación");
		fLastN.focus();
		 errorName;
		  alert("mal");
		  fLastN.classList.add("is-valid");
		  fLastN.classList.remove("is-invalid");
		  
  } else {
	  alert("bien");
	  fLastN.classList.add("is-invalid");
	  fLastN.classList.remove("is-valid");
	  
  }

	// validación input mail
	if (!validaMail.test(fEmail)){
		error = 1;
		document.formulario_registro.fEmail.focus();
		alert("mal");
		fEmail.classList.add("is-valid");
		fEmail.classList.remove("is-invalid");
	}  else {
		alert("bien");
		fEmail.classList.add("is-invalid");
		fEmail.classList.remove("is-valid");
	}

	if(fEmail.value == ""){
		alert("Falta rellenar Email");
		fEmail.focus();
		alert("mal");
		fEmail.classList.add("is-valid");
		fEmail.classList.remove("is-invalid");
		//error++;
	} else{	
		alert("bien");
		fPhone.classList.add("is-invalid");
		fPhone.classList.remove("is-valid");
	}

	// validación input password
	if(!validaPass.test(fPassword)){
		alert("El password no es correcto");
		fPassword.classList.add("is-valid");
		fPassword.classList.remove("is-invalid");
		return false;
	} else{
		alert("bien");
		fPassword.classList.add("is-invalid");
		fPassword.classList.remove("is-valid");

	}

	// validación input phone
	if(isNaN(fPhone) || !validaPhone.test(fPhone)) {
		alert("El teléfono ingresado no es un número");
		fPhone.classList.add("is-valid");
		fPhone.classList.remove("is-invalid");
		return false;
	} else{
		alert("bien");
		fPhone.classList.add("is-invalid");
		fPhone.classList.remove("is-valid");

	}

}





 
	/*if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}*/

	/*if(fPhone.value == ""){
		let valorTelefono = document.getElementById("campo").value;if( !(/^\d{10}$/.test(valor)) ) 
		{ return false;}	
		error++;
	}*/





/*limpiarForm(){
	document.getElementById('formulario_registro').reset();
}*/
/*function enviado(){
	alert("Formulario Completo enviado !!")
}*/
	