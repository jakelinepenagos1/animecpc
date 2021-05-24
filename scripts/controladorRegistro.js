let boton=document.getElementById("botonEnvio");
let nombre=document.getElementById("nombreUsuraio");
let email=document.getElementById("correoUsuario");
let password=document.getElementById("passwordUsuario");

let llave1;
let llave2;
let llave3;


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

        nombre.classList.remove("is-invalid");
        email.classList.add("is-invalid");
        password.classList.add("is-invalid");
    
    }else if(nombreValor==""&&passwordValor==""){
        
        nombre.classList.add("is-invalid");
        email.classList.remove("is-invalid");
        password.classList.add("is-invalid");
    
    }else if(nombreValor==""&& emailValor==""){
        
        nombre.classList.add("is-invalid");
        email.classList.add("is-invalid");
        password.classList.remove("is-invalid");
    
    }else if(nombreValor==""){

        nombre.classList.add("is-invalid");
        email.classList.remove("is-invalid");
        password.classList.remove("is-invalid");
    
    }else if(emailValor==""){

        nombre.classList.remove("is-invalid");
        email.classList.add("is-invalid");
        password.classList.remove("is-invalid");
    
    }else if(passwordValor==""){

        nombre.classList.remove("is-invalid");
        email.classList.remove("is-invalid");
        password.classList.add("is-invalid");
    }
    else{

        nombre.classList.remove("is-invalid");
        email.classList.remove("is-invalid");
        password.classList.remove("is-invalid");

        llave1="nombre="+nombreValor
        llave2="correo="+emailValor
        llave3="password="+passwordValor

        conectarAPI();
    }
    
}

function conectarAPI(){

    let url="http://localhost/apicpc/public/usuarios/nuevo";

    let parametros={

        method:"POST",
        headers:{"Content-Type":'application/x-www-form-urlencoded'},
        body:llave1+"&"+llave2+"&"+llave3
    }

    fetch(url,parametros)

    .then(repuesta=>repuesta.json())
    .then(datos=>console.log(datos));
}


