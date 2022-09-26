document.addEventListener('DOMContentLoaded', cart(), false);
var cartCont = localStorage.getItem("cartCont");
    if(cartCont == null) cartCont = 0;
    document.getElementById("cart-cont").innerHTML = cartCont;

function save(id){
    const name = document.querySelector("#name"+id).innerHTML;
    const price = document.querySelector("#price"+id).innerHTML;
    const image = document.querySelector("#image"+id).src;
    const desc = document.querySelector("#desc"+id).innerHTML;
    const count = 1;

    let product = { id, name, price, image, desc, count };
    
    var products =localStorage.getItem("products");
    if(products === null){
        let data = [{ product }];
        localStorage.setItem("products", JSON.stringify(data));
        document.getElementById("cart-cont").innerHTML = ++cartCont;
        document.getElementById("text-success").style.display = "block";
        setTimeout(sucessFunction, 2000);  
    }else{
        products = JSON.parse(products);
        var counts = products.find((element) => element.product.id === id);
        if(counts == undefined){
            products.push({ product });
            localStorage.setItem("products", JSON.stringify(products));
            document.getElementById("cart-cont").innerHTML = ++cartCont;
            document.getElementById("text-success").style.display = "block";
            setTimeout(sucessFunction, 2000);
        }
        else{
            document.getElementById("text-alert").style.display = "block";   
            setTimeout(alertFunction, 2000);      
        }
    }
    localStorage.setItem("cartCont",cartCont);
    this.cart();
}
function sucessFunction(){
    document.getElementById("text-success").style.setProperty("display", "none", "important")
}
function alertFunction(){
    document.getElementById("text-alert").style.setProperty("display", "none", "important")
}

function cart(){
    var products = JSON.parse(localStorage.getItem("products"));
    var total = 0;
    let html = "";
    if(products != null){
        if(products.length > 0){
            products.forEach(element => {    
                let styleDisabledRest = ` " style="cursor:pointer"`;
                let styleDisabledSum = ` " style="cursor:pointer"`;
                total += (parseInt(element.product.price)*parseInt(element.product.count));
                if (element.product.count <= 1){
                    styleDisabledRest = ` btn-disabled" style="cursor:auto;"`;
                } 
                else if(element.product.count >= 10){
                    styleDisabledSum = ` btn-disabled" style="cursor:auto;"`;
                }
                html += `
                <div id="element`+element.product.id+`" class="card mb-3 border-light bg-light">
                    <div class="row g-0">
                        <div class="col-3">
                        <img src="`+element.product.image+`" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-9">
                        <div class="card-body row px-4" style="height: 100%">
                            <h3 class="col-9 fw-bold">`+element.product.name+`</h3>
                            <a class="col-3 text-end"><i onclick="del(`+element.product.id+`)" class="fa-solid fa-trash"></i></a>
                            <p class="card-text">`+element.product.desc+`</p>
                            <div class="d-flex justify-content-between align-self-end" style="width:100%">
                            <div class="d-inline col-6 text-start text-muted" style="font-size: 12px;">Producto #<span>`+element.product.id+`</span></div>
                            <div class="d-inline col-6 text-end active">
                            <div class=" d-inline text-secondary pe-2">
                                <i class="fa-solid fa-minus text-dark`+styleDisabledRest+` onclick="count(`+element.product.id+`, false)"></i>
                            </div> $`+element.product.price+`
                            <div class=" d-inline text-secondary">
                                x <div class="d-inline"> `+element.product.count+` </div> <i class="fa-solid fa-plus text-dark ps-2`+styleDisabledSum+` onclick="count(`+element.product.id+`, true)"></i>
                            </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                `;
            });
            
        } else {
            html = `<i class="fa-solid fa-triangle-exclamation danger pe-2 "></i>
            <p class=" d-inline fw-light ">Cuando seleccione un producto, lo verá aqui. :)</p>`;
        }
    } else {
        html = `<i class="fa-solid fa-triangle-exclamation danger pe-2 "></i>
        <p class=" d-inline fw-light ">Cuando seleccione un producto, lo verá aqui. :)</p>`;
    }
    document.querySelector("#modal-body").innerHTML = html;
    localStorage.setItem("total", total);
    document.getElementById("total").innerHTML = total;
}

function del(id){
    var products = JSON.parse(localStorage.getItem("products"));
    var counts = products.find((element) => element.product.id === id);
    var indexFind = products.findIndex((element) => element.product.id === id);
    if(counts == undefined){
        alert("Error!");
    }else{
        products.splice(indexFind,1);
        localStorage.setItem("products", JSON.stringify(products));
        document.getElementById("cart-cont").innerHTML = --cartCont;
        localStorage.setItem("cartCont", cartCont);
        this.cart();
    }
}

function finishBuy(){
    var products = JSON.parse(localStorage.getItem("products"));
    if(products != null){
        if(products.length == 0){
            document.querySelector("#card-text").innerHTML = `<span class="fw-light">Seleccione productos para realizar una compra.</span>`;
            document.querySelector("#confirm-title").innerHTML = `<i class="fa-solid fa-triangle-exclamation danger pe-2"></i>No hay productos seleccionados!`;
        }else{
            document.querySelector("#card-text").innerHTML = `<span class="fw-light">Revise su Email para continuar el proceso de compra.</span>`;
            document.querySelector("#confirm-title").innerHTML = `<i class="fa-regular fa-circle-check active pe-2"></i>Compra confirmada`;
        }
    }else{
        document.querySelector("#card-text").innerHTML = `<span class="fw-light">Seleccione productos para realizar una compra.</span>`;
        document.querySelector("#confirm-title").innerHTML = `<i class="fa-solid fa-triangle-exclamation danger pe-2"></i>No hay productos seleccionados!`;
    }
}

function reload(){
    localStorage.clear();
    location.reload();
}

function count(id, flag){
    var products = JSON.parse(localStorage.getItem("products"));
    var element = products.find((element) => element.product.id === id);
    var indexFind = products.findIndex((element) => element.product.id === id);
    if(element == undefined){
        alert("Error!");
    }else{
        if(flag){
            if(element.product.count<10){
                element.product.count++;             
            }
        } else {
            if(element.product.count>1){
                element.product.count--;                 
            }
        }
        products.splice(indexFind,1,element);
        localStorage.setItem("products", JSON.stringify(products));
        this.cart();
    }
}
