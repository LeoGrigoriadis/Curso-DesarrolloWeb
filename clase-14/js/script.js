function nombre(){
    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
}

let button = document.getElementById("elem");
button.onclick = nombre;

$(document).ready(function(){
    $("#elementSelect").select2();

    $("#elementSelect").click()
});