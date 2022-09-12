const palabras = Array ("laberinto", "armario", "pileta", "carton", "libro", "alfombra", "esfera", "cerdo", "licuado");
var palabra = palabras[Math.floor(Math.random()*(palabras.length-1))];
var intentos = 6;
var fallos = Array();

var nPalabra = "";
for(let x=0; x<palabra.length;x++){
    nPalabra+="-";
}

document.getElementById("palabra").innerHTML = nPalabra;

function verificar(){
    let letra = document.querySelector("#char").value;
    if(letra != ""){
        if(fallos.indexOf(letra.toLowerCase()) == -1){
            let pos = palabra.indexOf(letra.toLowerCase());
            if(pos == -1){
                --intentos;
                fallos.push(letra);
                document.getElementById("fallos").innerHTML = fallos;
                if(intentos == 0){ alert("PERDISTE :("); }
                document.getElementById("intentos").innerHTML = intentos;
            }else{
                nPalabra = nPalabra.reemplazar(pos,letra);
                palabra = palabra.reemplazar(pos,'-');
                document.getElementById("palabra").innerHTML = nPalabra;
            }
        }else{
            alert("Letra ya ingresada.");
        }
    }else{ 
        document.getElementById("char").style= "border: 1px solid red; border-radius: 3px";  
        alert("Letra requerida.");
    }
    if(!nPalabra.includes('-')){
        alert("GANASTE!");
        document.getElementById("btn").disabled="disabled";
    }
}

function reiniciar(){
    intentos = location.reload();
}

String.prototype.reemplazar = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
 
    var chars = this.split('');
    chars[index] = replacement;
    return chars.join('');
}