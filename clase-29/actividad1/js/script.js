var url="";
var result;
// fetch(url).then()

function mostrarResult(result){
    let data = result.response;
    data.forEach((element) =>{
        console.log(element.category);
    });
    // console.log(element.category);
}
// loadUrl();

function loadTxt(){
    var xhttp = new XMLHttpRequest();
    xhttp.onload(function(){
        document.getElementById("example").innerHTML = this.response;
    });
    xhttp.open("GET", "/archivo.txt");
    xhttp.send();
}
loadTxt();
