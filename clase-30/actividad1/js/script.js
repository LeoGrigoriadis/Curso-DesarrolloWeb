const url = "https://api.github.com/users/LeoGrigoriadis";
const cargarDatos = async() => {
    try{
        const res = await fetch(url);
        const datos = await res.json();
        return datos;
        // if(res.ok){
        //     const datos = await res.json();
        //     console.log(datos);
        // } else {
        //     console.log("ERROR");
        // }
    }catch(err){
        console.log(err);
    }
};
cargarDatos()
    .then( datos => console.log(datos) )
    .catch(  );

const ver = async() => {
    const res = await fetch(url);
}

async function f(){
    // return 1;
    // return Promise.resolve(1);
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve ("BIEN...!"), 1000);
    });
    let result = await promise;
    alert(result);
}

f().then(  );