function copy(){
    document.getElementById("copied").innerHTML="Elemento copiado.";
}
function cut(){
    document.getElementById("copied").innerHTML="Elemento cortado.";
}

function allowDrop(event){
    event.preventDefault();
}
function dropStart(event){
    event.dataTransfer.setData("Text", event.target.id);
}
function drop(event){
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
}
function changeColor(){
    document.getElementById("copy").style.backgroundColor="red";
}
document.getElementById("copy").addEventListener("focus",changeColor);
document.getElementById("copy").addEventListener("blur",changeColor);

function onkeyHandler(event){
    var key = event.keyCode || event.wich;
    console.log("Presionó "+key);
}