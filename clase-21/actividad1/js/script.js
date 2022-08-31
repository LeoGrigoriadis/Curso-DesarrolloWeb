var arr = new Array();
arr['name'] = "Leo";

var personas = {
    nombre:['Juan', 'Pedro'],
    edad:32,
    genero:"masculino",
    saludo:function(){
        //alert("Hola, soy "+this.nombre[0]);
    }
};

console.log(personas.saludo());
console.log(personas.edad);
console.log(personas['edad']);
console.log(personas.edad = 40);

personas = {
    nombres:{
        nombre:'Juan',
        apellido: 'Perez'
    },
    edad:30,
    genero: "masculino"
};
personas.nombres.nombre;

personas=[{},{},{}];

var nombre = "Juan";
var apellido = "Perez";
var edad = 31;

personas = {
    nombre, 
    apellido,
    edad
};

var obj = '{"name":"Leo", "apellido": "Grigoriadis"}';
JSON.parse(obj);
obj = '["name":"Leo", "apellido": "Grigoriadis"]';
JSON.stringify(personas);
console.log(personas);

//Java Script Object Notation - JSON

