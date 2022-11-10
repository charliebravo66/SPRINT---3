
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

	let validaMail = RegExp(/^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i);
	let validaPass = RegExp(/^(?=.*[0-9])(?=.*[a-z]).{3,8}/);
	let validaPhone = RegExp(/^[0-9]{3,}$/);

	
	// validación input nombre
	if(valNombre == null || valNombre.length == 0 || /^\s+$/.test(valNombre)) {	
	  	alert("primera validación");
			fName.focus();
			alert("mal");
			errorName;
			
			fName.classList.remove("is-invalid");
			fName.classList.add("is-valid");

			return false;
			
	} else {
		//alert("bien nombre");
        fName.classList.add("is-invalid");
        fName.classList.remove("is-valid");

		return valNombre;
	}

}
	// validación input apellido
	if(valApellido == null || valApellido.length == 0 || /^\s+$/.test(valApellido)) {	
		alert("primera validación");
		fLastN.focus();
		errorLastN;
		  alert("mal");
		  fLastN.classList.add("is-valid");
		  fLastN.classList.remove("is-invalid");
		  return false;
		  
  } else {
	  alert("bien");
	  fLastN.classList.add("is-invalid");
	  fLastN.classList.remove("is-valid");
	  return fLastN;
	  
  }


	// validación input mail
	let validaMail = RegExp(/^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i);
	
	if (!validaMail.test(fEmail)){
		//error = 1;
		document.formulario_registro.fEmail.focus();

		fEmail.classList.add("is-valid");
		fEmail.classList.remove("is-invalid");
		return false;

	}  else {
		fEmail.classList.add("is-invalid");
		fEmail.classList.remove("is-valid");
		return fEmail;
	}

	if(fEmail.value == ""){

		fEmail.focus();
		fEmail.classList.add("is-valid");
		fEmail.classList.remove("is-invalid");
		return false;

	} else{	
		fPhone.classList.add("is-invalid");
		fPhone.classList.remove("is-valid");
		return fEmail;
	}

	// validación input password
	if(!validaPass.test(fPassword)){
		fPassword.classList.add("is-valid");
		fPassword.classList.remove("is-invalid");
		return false;

	} else{

		fPassword.classList.add("is-invalid");
		fPassword.classList.remove("is-valid");
		return fPassword;
	}

	// validación input phone
	if(isNaN(fPhone) || !validaPhone.test(fPhone)) {

		fPhone.classList.add("is-valid");
		fPhone.classList.remove("is-invalid");
		return false;
	} else{
		alert("bien");
		fPhone.classList.add("is-invalid");
		fPhone.classList.remove("is-valid");
		return fPhone;	
	}

enviado();








/*limpiarForm(){
	document.getElementById('formulario_registro').reset();
}*/
function enviado(){
	alert("Formulario Completo enviado !!")
	document.location.href="checkout.html";
}
	