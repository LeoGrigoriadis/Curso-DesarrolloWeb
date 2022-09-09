const palabras = Array ("laberinto", "armario", "pileta", "carton", "libro", "alfombra", "esfera", "cerdo", "licuado");
const palabra = palabras[Math.floor(Math.random()*(palabras.length-1))];
var intentos = 6;

var nPalabra = "";
for(let x=0; x<palabra.length;x++){
    nPalabra+=" _ ";
}

document.getElementById("palabra").innerHTML = nPalabra;

function verificar(){
    let letra = document.querySelector("#char").value;
    if(palabra.indexOf(letra.toLowerCase()) == -1){
        --intentos;
        if(intentos == 0){ alert("PERDISTE"); }
        document.getElementById("intentos").innerHTML = intentos;
    }
    
}

function reiniciar(){
    intentos = location.reload();
}

