let busqueda="anime love";

let url=`http://api.giphy.com/v1/gifs/search?api_key=IYMZQYWmMdmGDWeWJONs0khps2rMkwsD&limit=15&q=${busqueda}`;

let botonBusqueda=document.getElementById("botonbusqueda");
let parametroBusqueda=document.getElementById("busqueda");

botonBusqueda.addEventListener("click",buscarDatos);



conectarGiphy(1);

function buscarDatos(){

        busqueda=parametroBusqueda.value;

        url=`http://api.giphy.com/v1/gifs/search?api_key=IYMZQYWmMdmGDWeWJONs0khps2rMkwsD&limit=15&q=${busqueda}`;
        
        conectarGiphy();
      
}

function conectarGiphy($condicion){

    if($condicion==1){

        fetch(url)
    .then(respuesta=>respuesta.json())
    .then(datos=>organizarDatos(datos));


    }else{
        fetch(url)
    .then(respuesta=>respuesta.json())
    .then(datos=>organizarbusqueda(datos));

    }

}

fetch(url)
.then(respuesta=>respuesta.json())
.then(datos=>organizarDatos(datos));

    function organizarDatos(datos){

       

    let contenedorpadre=document.getElementById("gifs");
    let arreglosDatos=datos.data;

    arreglosDatos.map(function(dato){

        let imagen=document.createElement("img");
        imagen.src=dato.images.downsized_medium.url;
        imagen.classList.add("p-2");
        contenedorpadre.appendChild(imagen);
    });
}

function organizarbusqueda(datos){

    let contenedorpadre=document.getElementById("gifs");
    while(contenedorpadre.firstChild){

        contenedorpadre.removeChild(contenedorpadre.firstChild)
        
    }

    let arreglosDatos=datos.data;

    arreglosDatos.map(function(dato){

        let imagen=document.createElement("img");
        imagen.src=dato.images.downsized_medium.url;
        imagen.classList.add("p-2");
        contenedorpadre.appendChild(imagen);
    });

}
   