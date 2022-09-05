class Perro{
    constructor(nombre, raza, color, peso, estado){
        this.nombre = nombre;
        this.raza = raza;
        this.color = color;
        this.peso = peso;
        this.estado = estado;
    }
    modificarEstado(estado){
        this.estado = estado;
        console.log("Estado modificado.");
    }
    informarEstado(){
        return this.estado;
    }
}

let perros = new Array();
let flag = true;
do{
    var nombre = prompt("Ingrese el nombre del perro: ");
    var raza = prompt("Ingrese la raza: ");
    var color = prompt("Ingrese el color: ");
    var peso = prompt("Ingrese el peso (kg): ");
    var estado = prompt("Ingrese el estado actual: ");
    
    let perro = new Perro(nombre, raza, color, peso, estado);
    
    perros.push(perro);
    if(!window.confirm("¿Desea cargar otro registro?")){
        flag = false;
    }
}while(flag);

console.log("Todos los perros: ");
perros.forEach(perro => console.log(perro.nombre));

console.log("\nTodos los perros en adopción: ");
perros.forEach(perro => {
    if(perro.estado=="En adopción")
        { console.log(perro.nombre) }
});

console.log("\nTodos los perros en proceso de adopción: ");
perros.forEach(perro => {
    if(perro.estado=="Proceso de adopción")
        { console.log(perro.nombre) }
});

console.log("\nTodos los perros adoptados: ");
perros.forEach(perro => {
    if(perro.estado=="Adoptado")
        { console.log(perro.nombre) }
});