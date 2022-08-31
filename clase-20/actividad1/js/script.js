var saludar = function (nombre){ return "Hola "+nombre; }
console.log(saludar('Leo'));
console.log("----------");

var nombre = nombre => `Nombre: ${nombre}`;
console.log(nombre('Leo'));
console.log("----------");

let saludo = ()=> `Hola a todos`;
console.log(saludo());
console.log("----------");

var dia = function(hora) {
    if(hora < 5) return "Es tarde...";
    else if(hora >= 6 && hora <= 11) return "Buen día...";
    else if(hora >= 12 && hora <= 18) return "Buenas tardes...";
    else return "Buenas noches...";
}

console.log(dia(12));
console.log("----------");

let dias = (hr)=>{
    if(hr < 5) return "Es tarde...";
    else if(hr >= 6 && hr <= 11) return "Buen día...";
    else if(hr >= 12 && hr <= 18) return "Buenas tardes...";
    else return "Buenas noches...";
}

console.log(dias(3));
console.log("----------");

var numero = [4,3,7,5];
 
//antes
numero.forEach(function(num){ console.log(num); });
console.log("----------");
//ahora
numero.forEach((num)=>{ console.log(num); });
console.log("----------");

var result = numero.map(num => num+1);
console.log("map: "+result);
console.log("----------");

result = numero.filter(num => num === 4 || num === 3);
console.log("filter: "+result);
console.log("----------");

result = numero.forEach(( element, index ) => { 
    console.log(`${element} se encuentra en el índice ${index}.`);  
});
console.log("----------");

result = numero.find(num => num > 3);
console.log("find: "+result);
console.log("----------");

result = numero.sort();
console.log("sort: "+result);
console.log("----------");

result = numero.sort((a,b) => a > b ? -1 : 1);
console.log("sort: "+result);
console.log("----------");

result = numero.some(num => num > 3);
console.log("some: "+result);
console.log("----------");
result = numero.some(num => num > 50);
console.log("some: "+result);
console.log("----------");

result = numero.every(num => num > 0);
console.log("every: "+result);
console.log("----------");

result = numero.every(num => num > 3);
console.log("every: "+result);
console.log("----------");

result = numero.join();
console.log("join: "+result);
console.log("----------");

result = numero.join(" - ");
console.log("join: "+result);
console.log("----------");

result = numero.reduce((acumulador, current) => acumulador + current);
console.log("reduce: "+result);
console.log("----------");

result = numero.findIndex(num => num===3);
console.log("findIndex: "+result);
console.log("----------");

result = numero.fill(12,1,2);
console.log("fill: "+result);
console.log("----------");

var flatArray = [1,5,3,2,5,[9,4,8]];

result = flatArray.flat();
console.log("flat: "+result);
console.log("----------");

result = Array.isArray(flatArray);
console.log("isArray: "+result);
console.log("----------");

result = Array.from(flatArray);
console.log("isArray: "+result);
console.log("----------");