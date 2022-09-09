const person = {
    firstName : "nombre",
    lastName : "apellido",
    age : 22
};

var keys = Object.keys(person);
//["firstName", "lastName", age];

keys.forEach((key) =>{
    let value = person[key];
    console.log(`${key}: ${value}`);
});

var values = Object.values(person);
//obtengo valores

var entries = Object.entries();
//obtengo clave - valor

const details = {
    job : "Delivery",
    empoyer : "employer"
};

var assign = Object.assign(person, details);
//copia valores de un objeto a otro

//var assign {...person, ...details};

var freeze = Object.freeze();
//bloquea la modificación de este objeto.

var seal = Object.seal();
//No permite agregar nuevos atributos, si permite modificar los existentes.

var create = Object.create(person);
//Inicializa una instancia del objeto.

//Accesos al DOM
document.getElementById();
document.getElementsByClassName();
document.getElementsByTagName();

//realizar una función de forma automática
//setTimeout(función, tiempo);

//realizar una función de forma automática en bucle
//algo de intervalo

    //mirar clase 7 para animaciones javascript

    



