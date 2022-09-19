let myPromise = new Promise( function(myResolve, myReject){
    let x = 0;

    if( x == 0 ){
        myResolve("ok");
    } else {
        myReject("err");
    }
});

//then(myResolve) Promesa se cumple, mostraría lo que se encuentra en la función.
myPromise.then();

//catch(myReject) Promesa es rechazada.
myPromise.then().catch();

myPromise.then(
    function(value){
        mostrarMensaje(value);
    },
    function(error){
        mostrarMensaje(error);
    }
);
//finally(end) método que se ejecuta siempre.

function mostrarMensaje(x){
    document.getElementById("status").innerHTML = x;
}

const prueba2=(numero)=> new Promise((resolve, reject)=>{
    const numbers= [];
    for(let i=0;i<numero;i++){
        const number = 1 + Math.floor(Math.random() * 6);
        numbers.push(number);
        if(number === 5){
            reject({
                error: true,
                message: "Ha salido un 5"
            });
        }
    }
    resolve({
        error:false,
        value: numbers
    });
});

prueba2(4).then((result) => console.log("array de valores: ", result.value))
    .catch((err) => console.error(err.message))
    .finally(() => console.log("Terminó..."));


fetch("/archivo.txt").then(function(response){
    console.log("Bien.");
}).catch(function (error){
    console.error("Mal.");
})

// ejecuta todas las promesas en un array.
Promise.all([prueba2(5), myPromise2, myPromise]).then().catch();

// Mostrará solo la que se complete primera.
Promise.race([prueba2(5), myPromise2, myPromise]).then().catch();

// devuelve una promesa que se cumple después de que todas se hayan cumplido.
Promise.allSettled([prueba2(5), myPromise2, myPromise])
.then((result) => {
    result.forEach((results) => console.log(results.status));
})
.catch();
