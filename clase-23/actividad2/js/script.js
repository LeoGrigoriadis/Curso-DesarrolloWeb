const count = {
    value : 0,
    reset(){ 
        this.value = 0;
        document.getElementById("cont").innerHTML = this.actualVal();
    },
    inc(){ 
        this.value++; 
        document.getElementById("cont").innerHTML = this.actualVal();},
    dec(){ 
        this.value--;
        document.getElementById("cont").innerHTML = this.actualVal(); },
    actualVal(){ 
        return this.value; 
    },
    modifyActualVal(){
        this.value = parseInt(document.querySelector("#value").value);
        document.getElementById("cont").innerHTML = this.actualVal();
     }
};
