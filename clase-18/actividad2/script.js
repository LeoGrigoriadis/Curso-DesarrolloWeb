var i = 0;
const lim = 10;
function cont(){
    if(i<lim){
        i++;
        document.getElementById("res").innerHTML = i;
    } else {
        document.getElementById("cont").setAttribute("disabled", "disabled");
    }
}