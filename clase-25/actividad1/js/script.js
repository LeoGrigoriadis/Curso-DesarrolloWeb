const addP = document.createElement("p");
const textoP = document.createTextNode("Ejemplo de texto creado por JS");
addP.appendChild(textoP);
const element = document.getElementById("ejemplo");
element.appendChild(addP);

const elementP1 = document.getElementById("p1");
const elementP2 = document.getElementById("p2");

element.insertBefore(addP, elementP1);

element.removeChild(elementP2);

const addImage = document.createElement("img");
addImage.src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0m5aY2oIKILiSLtlWgKyaHLDfgqqXVuRtnhkiLrXT_5rmM7Chm8XBjeKbwC1fcOeexuU&usqp=CAU";

element.appendChild(addImage);

const addImage2 = addImage.cloneNode();
addImage2.id = "imagen";
addImage2.className = "imagen";
addImage2.style = "width:500px";

element.appendChild(addImage2);

// hasAttribute verifica si un atributo existe (boolean)
//getAttribute devuelve el contendio del atributo a buscar
// hasAttributes verifica si existe un atributo boolean
const textP1 = elementP1.hasAttributes();
//alert(textP1);

// setAttribute
elementP1.setAttribute("data-ids", "1222");
// removeAttribute
elementP1.removeAttribute("data-text");

const fragment = document.createDocumentFragment();

for (let i = 0; i <= 100; i++) {
  const divElement = document.createElement("div");
  divElement.textContent = `Item => ${i}`;
  fragment.appendChild(divElement);
}
document.body.appendChild(fragment);

//addP.innerHTML = "<b>Hola</b> un ejemplo";
//addP.textContent = "<b>Hola un ejemplo</b>";

console.log(elementP1.textContent);
console.log(elementP1.innerHTML);
console.log(elementP1.outerHTML);

// appendChild   insertAdjacent

const etiquetaFragmentos = document.getElementById("fragmentos");
const div = document.createElement("div");
div.textContent = "Prueba...";
//beforebegin Inserta antes de la etiqueta de apertuda
//afterbegin Inserta dentro de las etiuqetas de Html antes de su primer elmento
//beforeend Inserta dentro de la etiquetas de html despues de su ultimo elemento
//afterend inserta despues de la etiquetas de cierre
etiquetaFragmentos.insertAdjacentElement("afterend", div);
