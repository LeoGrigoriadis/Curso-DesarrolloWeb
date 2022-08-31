let x=0;
const max=3;
let registers=[];
let prom = 0;

function save(){
    if(x < max) {
        const name = document.querySelector("#name").value;
        const lastname = document.querySelector("#lastname").value;
        const tel = document.querySelector("#tel").value;
        const date = document.querySelector("#date").value;
        const price = parseInt(document.querySelector("#price").value);
        
        document.getElementById("cont").innerHTML = ++x;
    
        let register={ name, lastname, tel, date, price };
        
        registers.push(register);
    
        console.log(registers);
    }
    if( x == max){
        registers.forEach(reg => prom += reg.price);
        document.getElementById("res").innerHTML = "El promedio de precios es de "+prom/(registers.length)+" ("+prom+" / "+registers.length+")";
    }
}
  