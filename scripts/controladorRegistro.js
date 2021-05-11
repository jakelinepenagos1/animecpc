let boton=document.getElementById("botonEnvio");
let nombre=document.getElementById("nombreUsuraio");
let email=document.getElementById("correoUsuario");
let password=document.getElementById("passwordUsuario");


boton.addEventListener("click",recibirDatos);
function recibirDatos(){
  
    let nombreValor=nombre.value;
    let emailValor=email.value;
    let passwordValor=password.value;


    validarCaminos(nombreValor,emailValor,passwordValor)
    
}
function validarCaminos(nombreValor,emailValor,passwordValor){

    if(nombreValor==""&& emailValor==""&&passwordValor==""){

    nombre.classList.add("is-invalid");
    email.classList.add("is-invalid");
    password.classList.add("is-invalid");

    }else if(emailValor==""&&passwordValor==""){

    nombre.classList.add("is-invalid");
    email.classList.add("is-invalid");
    password.classList.add("is-invalid");
    
    }else if(nombreValor==""&&passwordValor==""){
        
    nombre.classList.add("is-invalid");
    email.classList.add("is-invalid");
    password.classList.add("is-invalid");
    
    }else if(nombreValor==""&& emailValor==""){
        
    nombre.classList.add("is-invalid");
    email.classList.add("is-invalid");
    password.classList.add("is-invalid");
    
    }else if(nombreValor==""){

    nombre.classList.add("is-invalid");
    email.classList.add("is-invalid");
    password.classList.add("is-invalid");

    
    }else if(emailValor==""){

    nombre.classList.add("is-invalid");
    email.classList.add("is-invalid");
    password.classList.add("is-invalid");
    
    }else if(passwordValor==""){
        
    nombre.classList.add("is-invalid");
    email.classList.add("is-invalid");
    password.classList.add("is-invalid");
    }
    
}


