let boton=document.getElementById("botonEnvio");
let nombre=document.getElementById("nombreUsuraio");
let email=document.getElementById("correoUsuario");
let password=document.getElementById("passwordUsuario");


boton.addEventListener("click",recibirDatos);
function recibirDatos(){
  
    let nombreValor=nombre.value;
    let emailValor=email.value;
    let passwordValor=password.value;


    validarFormulario(nombreValor,emailValor,passwordValor)
    
}
function validarFormulario(nombreValor,emailValor,passwordValor){

    if(nombreValor==""&& emailValor==""&&fechaValor==""&&contactoValor==""&&passwordValor==""&&password2Valor=="")

    nombre.classList.add("is-invalid");
    email.classList.add("is-invalid");
    password.classList.add("is-invalid");
}
