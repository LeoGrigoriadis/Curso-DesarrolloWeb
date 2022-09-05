class Ejemplo{
    actualYear = 2022;
    
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    age(){ return this.actualYear - this.year; }
}

class Saludo extends Ejemplo{
    
    constructor(name, year, obs){
        super();    
        this.obs = obs;
    }

    show(){ return this.age()+"----->"+ this.obs; }
}

let ej = new Ejemplo("Leo", 2002);
console.log(ej.age());

let ej2 = new Saludo("Leo", 2002, "obs");
console.log(ej2.show());

import mensaje from "mensaje.js";
import {age, name} from "person.js";

console.log(mensaje);
console.log(age +" "+ name);
