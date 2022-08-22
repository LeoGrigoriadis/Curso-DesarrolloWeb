const a = 2;
var b = "true";
let c = 3;

if(a>c){
    console.log("A es mayor.");
}else if(c>a){
    console.log("C es mayor.");
}else{
    console.log("Son iguales.");
}
console.log("-----------");

var x = 1;
switch(x){
    case 1 : console.log("Es 1."); break;
    default : console.log("Es default."); break;
}
console.log("-----------");

for(var i=1; i<=10; i++){
    console.log(i);
}
console.log("-----------");

var dow=0;
do{
    console.log(dow);
    dow++;
}while(dow != 4);   
console.log("El valor llegó a 4.");
console.log("-----------");

var w=3
while(w != 4){
    console.log(w);
    w++;
}
console.log("El valor llegó a 4.");
console.log("-----------");

const arr=[2,4,8,6,1];
console.log("IN");
for (let i in arr) {
    console.log(i);
}
console.log("-----------");
console.log("OF");
for (let i of arr) {
    console.log(i);
}

if( (a<b) && (c>d) || (!c) ){
    
}
//condicion ? valor : valorn;
console.log("-----------");

function func(x) {
    return x * x;
}
console.log(func(3));
console.log("-----------");

const funct = function(x){
    return x * x;
}