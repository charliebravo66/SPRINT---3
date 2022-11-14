
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
	let valDireccion = document.getElementById("fAddress").value;
	let valMail = document.getElementById("fEmail").value;
	let valPassword = document.getElementById("fPassword").value;
	let valPhone = document.getElementById("fPhone").value;

    var NumeroValido="012346789";

    let valNumerico = RegExp(/^[0-9]$/);
	let validaMail = RegExp(/^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i);
	let validaPass = RegExp(/^(?=.*[0-9])(?=.*[a-z]).{3,8}/);
	let validaPhone = RegExp(/^[0-9]{3,}$/);
	let validaLetras = RegExp('^[A-Z]+$', 'i');

    
	// validación input nombre
	if(valNombre == null || valNombre.length == 0 || /^\s+$/.test(valNombre)) {	

			fName.focus();	
				
			fName.classList.remove("is-valid");
			fName.classList.add("is-invalid");	
            errorName.classList.remove("valid-feedback");
            errorName.classList.remove("invalid-feedback");

			//errorName;

		return false;

	} else if(!validaLetras.test(valNombre)){

		return false;

	
			
	} else if (valNombre.length<3){  

            fName.focus();
            //errorName;
            //errorName.classList.remove("valid-feedback");
            //errorName.classList.remove("invalid-feedback");
			fName.classList.remove("is-valid");
			fName.classList.add("is-invalid");	
			fName.focus();
        return false;  

	} else if (NumeroValido.match(valNumerico)!=null){  
        alert("El campo no puede ser numérico");  
            //fName.focus();
            //errorName;
            //errorName.classList.remove("valid-feedback");
            //errorName.classList.remove("invalid-feedback");
			fName.classList.remove("is-valid");
			fName.classList.add("is-invalid");	
			fName.focus();
        return false;  

	} else {
            
			//errorName.classList.remove("valid-feedback");
            //errorName.classList.add("invalid-feedback");
          	//errorName;
			  fName.classList.add("is-valid");
			  fName.classList.remove("is-invalid");	
		     fLastN.focus();
		   

    }

	// validación input apellido
	if(valApellido == null || valApellido.length == 0 || /^\s+$/.test(valApellido)) {	
	
		  //errorLastN.classList.remove("valid-feedback");
		  //errorLastN.classList.remove("invalid-feedback");
		  fLastN.classList.remove("is-valid");
		  fLastN.classList.add("is-invalid");
		  
	  return false;

	} else if(!validaLetras.test(valApellido)){

		return false;	  
		  
  } else if (valApellido.length<3){  

	  fLastN.focus();
		  errorLastN;
		  fLastN.classList.remove("is-valid");
		  fLastN.classList.add("is-invalid");
		  //errorLastN.classList.remove("valid-feedback");
		  //errorLastN.classList.remove("invalid-feedback");
   
	  return false;  

  } else if (NumeroValido.match(valNumerico)!=null){  
	  alert("El campo no puede ser numérico");  
	  fLastN.focus();
		  errorLastN;
		  fLastN.classList.remove("is-valid");
		  fLastN.classList.add("is-invalid");
		  //errorLastN.classList.remove("valid-feedback");
		  //errorLastN.classList.remove("invalid-feedback");
		  fLastN.focus();	
	  return false;  

  } else {
		
		  //errorLastN.classList.remove("invalid-feedback");
		  //errorLastN.classList.add("valid-feedback");

		  fLastN.classList.add("is-valid");
		  fLastN.classList.remove("is-invalid");
		  
		  fEmail.focus();

  }
    
	// validación input mail

	if (valMail == null || valMail.length == 0 || /^\s+$/.test(valMail)) {	
		
		fEmail.focus();
		fEmail.classList.remove("is-valid");
		fEmail.classList.add("is-invalid");
		  //errorEmail.classList.remove("valid-feedback");
		  //errorEmail.classList.remove("invalid-feedback");
		  
	  return false;

	} else if (valMail.length<3){  

		fEmail.focus();
		fEmail.classList.remove("is-valid");
		fEmail.classList.add("is-invalid");
		//errorEmail;
		//errorEmail.classList.remove("valid-feedback");
		//errorEmail.classList.remove("invalid-feedback");
	 
		return false;   
		
	}  else if (!validaMail.test(valMail)){
			
		fEmail.classList.remove("is-valid");
		fEmail.classList.add("is-invalid");
		fEmail.focus();
		return false; 
		//errorEmail;
		//errorEmail.classList.remove("invalid-feedback");
		//errorEmail.classList.remove("valid-feedback");

	} else {

		//errorEmail.classList.remove("invalid-feedback");
		//errorEmail.classList.add("valid-feedback");
		fEmail.classList.add("is-valid");
		fEmail.classList.remove("is-invalid");
		fPassword.focus();

	}

	// validación input password
	if (valPassword == null || valPassword.length == 0 || /^\s+$/.test(valPassword)) {	

		  fPassword.focus();
  		  fPassword.classList.remove("is-valid");
		  fPassword.classList.add("is-invalid");
		  
	  return false;

	} else if (valPassword.length<3){  
	
		fPassword.focus();
				
		fPassword.classList.remove("is-valid");
		fPassword.classList.add("is-invalid");
		fPassword.focus();
		
		return false;

	}else if(!validaPass.test(valPassword)){
		fPassword.classList.remove("is-valid");
		fPassword.classList.add("is-invalid");
		return false;

	} else {

		fPassword.classList.add("is-valid");
		fPassword.classList.remove("is-invalid");

		fAddress.focus();
	}

	// validación dirección
	if(valDireccion == null || valDireccion.length == 0 || /^\s+$/.test(valDireccion)) {	
		
	     fAddress.focus();
		 fAddress.classList.remove("is-valid");
		 fAddress.classList.add("is-invalid"); 

	  return false;
		  
  } else if (valDireccion.length<3){  

	    fAddress.focus();
	  	fAddress.classList.remove("is-valid");
	  	fAddress.classList.add("is-invalid");
	
	  return false;  

	} else{

		fAddress.classList.add("is-valid");
		fAddress.classList.remove("is-invalid");
		fPhone.focus();
	}


	// validación input phone
	if(valPhone == null || valPhone.length == 0 || /^\s+$/.test(valPhone)) {	

		fPhone.focus();
		  fPhone.classList.remove("is-valid");
		  fPhone.classList.add("is-invalid");
	  return false;
	}
	//if(isNaN(fPhone) || !valPhone.test(fPhone)) {
	if(isNaN(parseInt(fPhone.value))) {
		alert("debe ser campo numérico");
		fPhone.classList.remove("is-valid");
		fPhone.classList.add("is-invalid");
		return false;
	} else{
		alert("final");
		fPhone.classList.add("is-valid");
		fPhone.classList.remove("is-invalid");
		return true;	

	}

}





limpiarForm(){
	alert("limpia");
	document.getElementById('formulario_registro').reset();
}
/*function enviado(){
	alert("Formulario Completo enviado !!")
	document.location.href="checkout_2.html";
}*/
	