let x=0;
const max=3;
let registers=[];

function save(){
    if(x < max) {
        const name = document.querySelector("#name").value;
        const lastname = document.querySelector("#lastname").value;
        const tel = document.querySelector("#tel").value;
        const date = document.querySelector("#date").value;
        
        document.getElementById("cont").innerHTML = ++x;
    
        const register = {
            name: name,
            lastname: lastname,
            tel: tel,
            year: date
        };
        
        registers.push(register);
    
        console.log(registers);
    }
    if( x == max){
        document.getElementById("res").innerHTML = "Listo";
    }
}
  