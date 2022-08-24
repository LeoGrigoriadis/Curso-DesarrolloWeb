function tabs(){
    var a=parseInt(prompt("Ingrese el primer valor: "));
    var b=parseInt(prompt("Ingrese el segundo valor: "));
    var tabla = "";

    console.log("El primer valor es: "+a);
    console.log("El segundo valor es: "+b);

    if(a>b){
        alert("El primer valor es mayor al segundo. No puede realizarse.");
    }
    console.log("-------");
    while(a<=b){
        for(let x=1;x<=10;x++){
            tabla += x+" x "+a+" = "+x*a+"<br>";
            tabla=tabla.toString();
        }
        tabla += "<br>";
        a++;
    }
    document.getElementById("tabla").innerHTML = tabla;
}