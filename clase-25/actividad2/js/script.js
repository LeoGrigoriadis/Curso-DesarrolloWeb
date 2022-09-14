let x=0;
const max=3;
let registers=[];
let prom = 0;

function save(){
    const name = document.querySelector("#name").value;
    const lastname = document.querySelector("#lastname").value;
    const tel = document.querySelector("#tel").value;
    const date = document.querySelector("#date").value;
    const price = parseInt(document.querySelector("#price").value);
    
    document.getElementById("cont").innerHTML = ++x;

    let register={ name, lastname, tel, date, price };
    registers.push(register);
    console.log(registers);

    const table = document.getElementById("body");
    const elem = document.createElement("tr");
    const nameTd = document.createElement("td");
    const lastnameTd = document.createElement("td");
    const telTd = document.createElement("td");
    const dateTd = document.createElement("td");
    const priceTd = document.createElement("td");
    
    nameTd.appendChild(document.createTextNode(name));
    elem.appendChild(nameTd);
    lastnameTd.appendChild(document.createTextNode(lastname));
    elem.appendChild(lastnameTd);
    telTd.appendChild(document.createTextNode(tel));
    elem.appendChild(telTd);
    dateTd.appendChild(document.createTextNode(date));
    elem.appendChild(dateTd);
    priceTd.appendChild(document.createTextNode(price));
    elem.appendChild(priceTd);
    table.insertAdjacentElement("beforeend", elem);
}
