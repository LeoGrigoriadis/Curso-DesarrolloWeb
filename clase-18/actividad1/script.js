let x = "3";
parseInt(x);
typeof(x);

Math.round(8.9);
Math.ceil(8.95);

let fecha = new Date();

console.log(fecha.getDate()); // 1 - 31
console.log(fecha.getDay()); // 0 - 6
console.log(fecha.getFullYear()); // 0000
console.log(fecha.getMonth()); // 0 - 11
console.log(fecha.getHours()); // 0 - 23
console.log(fecha.getMinutes()); // 0 - 59
console.log(fecha.getSeconds()); // 0 - 59

console.log(fecha.toDateString()); 
console.log(fecha.toLocaleDateString()); 

var t = "   Hola   ";
t.length;
t.replace("a", "b");
t.substr(3,1);
var fechaS = fecha.toString();

console.log(fechaS.split(" "));

console.log(fechaS.toLowerCase());

console.log(t);
console.log(t.trim());

console.log(t.charAt(3));

console.log(t.charCodeAt());

console.log(t.concat(" ",t.trim()));

console.log(t.includes("hola"));

var num = 1999353;

console.log(num.toLocaleString());
