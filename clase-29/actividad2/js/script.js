const url = "https://opentdb.com/api.php?amount=10&category=";
function addCategory(){
    let resultAnswer = document.getElementById("res");
    let sel = document.getElementById("sel").value;
    // alert(sel);
    categoryAnswer(sel).then((data) => {
        let answers = data.res;
        answers.forEach(element => {
            var opt = document.createElement("p");
            opt.innerHTML = "";
            resultAnswer.appendChild(opt);
        });
    });
}

const categoryAnswer = async(sel) => {
    try{
        const res = await fetch(url);
        const datos = await res.json();
        return datos;
    }catch(err){
        console.log("ERROR: "+err);
    }

};