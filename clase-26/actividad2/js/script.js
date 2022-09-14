let x = 0;
const max = 3;

function save(){
    if(x < max){
        var registers = localStorage.getItem("registers");

        const dni = document.querySelector("#dni").value;
        const name = document.querySelector("#name").value;
        const lastname = document.querySelector("#lastname").value;
        const tel = document.querySelector("#tel").value;
        const date = document.querySelector("#date").value;
        const price = parseInt(document.querySelector("#price").value);

        let register = { dni, name, lastname, tel, date, price };

        if(registers === null){
            let data = [{ register }];
            localStorage.setItem("registers", JSON.stringify(data));
        }else{
            registers = JSON.parse(registers);
            var counts = registers.find((element) => element.register.dni === dni);
            if(counts == undefined){
                registers.push({ register });
                localStorage.setItem("registers", JSON.stringify(registers));
                document.getElementById("cont").innerHTML = ++x;
            }
            else{
                alert("DNI ya existente.");                
            }
        }
    }
}
        // const table = document.getElementById("body");
        // const elem = document.createElement("tr");
        // const nameTd = document.createElement("td");
        // const lastnameTd = document.createElement("td");
        // const telTd = document.createElement("td");
        // const dateTd = document.createElement("td");
        // const priceTd = document.createElement("td");
        
        // nameTd.appendChild(document.createTextNode(name));
        // elem.appendChild(nameTd);
        // lastnameTd.appendChild(document.createTextNode(lastname));
        // elem.appendChild(lastnameTd);
        // telTd.appendChild(document.createTextNode(tel));
        // elem.appendChild(telTd);
        // dateTd.appendChild(document.createTextNode(date));
        // elem.appendChild(dateTd);
        // priceTd.appendChild(document.createTextNode(price));
        // elem.appendChild(priceTd);
        // table.insertAdjacentElement("beforeend", elem);

