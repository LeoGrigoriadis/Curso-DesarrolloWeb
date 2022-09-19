var cartCont = 0;

function save(id){
    var products = localStorage.getItem("products");

    const name = document.querySelector("#name"+id).innerHTML;
    const price = document.querySelector("#price"+id).innerHTML;
    const image = document.querySelector("#image"+id).src;
    const desc = document.querySelector("#desc"+id).innerHTML;

    let product = { id, name, price, image, desc };

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
}
function sucessFunction(){
    document.getElementById("text-success").style.setProperty("display", "none", "important")
}
function alertFunction(){
    document.getElementById("text-alert").style.setProperty("display", "none", "important")
}