// Seleccionando elementos


// Seleccionando elementos unicos, por sus id 
unElementoPorId = document.getElementById('app-title');
console.log(unElementoPorId);
otroElementoPorId = document.querySelector('#app-title');
console.log(otroElementoPorId);

// ahora trabajaremos con colecciones o grupos de elementos 
listaItemMenu = document.getElementsByClassName('menu-items');
console.log(listaItemMenu);
console.log(`cantidad de items en el menu: ${listaItemMenu.length}`);

// HTMLCollection.item()
// Devuelve el nodo específicado en el índice en base cero dentro de la lista. Devuelve null si el índice está fuera de rango.
arrayListaItemMenu = Array.from(listaItemMenu); // convertimos el HTMLCollection de los items del menu a un array, para poder recorrerlo con un forEach
arrayListaItemMenu.forEach(element => {
    console.log(element)
});

// Opción 2: Usando el operador de propagación (spread operator):
// javascript

const elementos = document.getElementsByClassName('menu-items');
[...elementos].forEach(elemento => {
  console.log(elemento);
});


// Opción con for...of
// Desde ES6, también puedes usar el bucle for...of para iterar sobre una colección iterable como un HTMLCollection:
console.log('recorriendo con for .. of')
for(const element of elementos){
    console.log(element)
}

listaDeParrafos = document.getElementsByTagName('p')
arrayDeParrafos = Array.from(listaDeParrafos)
arrayDeParrafos.forEach(p => { console.log(p)})


// ********************************************************************************************************
// Video 5 - Navegacion efectiva entre nodos 


