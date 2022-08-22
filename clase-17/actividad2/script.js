var a=parseInt(prompt("Ingrese el primer valor: "));
var b=parseInt(prompt("Ingrese el segundo valor: "));

console.log("El primer valor es: "+a);
console.log("El segundo valor es: "+b);

if(a>b){
    console.log("El primer valor es mayor al segundo. No puede realizarse.");
}
console.log("-------");
while(a<=b){
    for(let x=1;x<=10;x++){
        console.log(x+" x "+a+" = "+x*a);
    }
    console.log("-------");
    a++;
}