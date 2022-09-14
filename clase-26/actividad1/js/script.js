// document.getElementById("action").addEventListener("click", clickDocument);

//localStorage.setItem("nombre", "nombres");
// function saveLocalStorage(){
//     var nombre = document.getElementById("nombre").value;
//     localStorage.setItem("nombre", nombre);
// }

// function getLocalStorage(){
//     alert(localStorage.getItem("nombre"));
// }

function remove(){
    localStorage.removeItem("nombre");
}

function removeAll(){
    localStorage.clear();
}
var obj = [{
    name:"Leo",
    apellido:"Grigoriadis"
}];

function save(){
    localStorage.setItem("obj", JSON.stringify(obj));
}
function get(){
    alert(JSON.parse(localStorage.getItem("obj")));
}
// --------------------------------------------

function saveLocalStorage(){
    var listado = localStorage.getItem("listado");
    var nombre = document.getElementById("nombre").value;
    nombre = nombre.toLowerCase();
    if(listado === null){
        let data = [{ nombre }];
        localStorage.setItem("listado", JSON.stringify(data));
    }else{
        listado = JSON.parse(listado);
        listado.push({ nombre });
        localStorage.setItem("listado", JSON.stringify(listado));
    }
}

function getLocalStorage(){

}

function deleteLocalStorage(){
    var nombre = document.getElementById("nombre").value;
    nombre = nombre.toLowerCase();
    var listado = localStorage.getItem("listado");
    listado = JSON.parse(listado);
    var counts = listado.find((element) => element.nombre === nombre);
    var indexFind = listado.findIndex((element) => element.nombre === nombre)
    if(counts == undefined){
        alert("No existe.");
    }else{
        listado.splice(indexFind,1);
        localStorage.setItem("listado", JSON.stringify(listado));
    }
}

document.cookie = "name=Duglas;expires=Thu, 20 Sep 2022 05:00:00 UTC";