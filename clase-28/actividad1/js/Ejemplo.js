class Ejemplo extends Promise{
    mostrar(valor){

    }
    devolverPromise(valor){
        return new Ejemplo(resolve=>{
            setTimeout(()=>{
            console.log(valor);
            resolve();
            },1000);
        });
    }
}
Ejemplo.resolve().mostrar(1).mostrar(3);