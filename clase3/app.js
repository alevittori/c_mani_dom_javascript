console.log('clase 3 - video 5')

console.log('TRanversinDOM - Navegacion efectiva entre nodos ');

const parent = document.getElementById('parent');
console.log(parent);

const children = parent.children; //crea una lista de hijos, como elemento HTMLCollection
console.log(children)

const firstChild = parent.firstElementChild
console.log(`Primer Hijo de ${parent.innerHTML}, es `)
console.log(firstChild)


/* La navegación entre nodos recibe el nombre de 
traversing  DOM, y consiste en recorrer los nodos 
basandonos en la jerárquia de padre, hijos, hermanos. */

//* Navegación del elemento padre a hijo

// const menu = document.querySelector('menu')
// console.log(menu.children)
// /*
//  children → nos retorna un HTMLCollection con los nodos hijos del nodo padre.
// */

// //? Acceder al primer nodo → firstElementChild
// console.log(menu.firstElementChild.innerHTML)

// //? Acceder a un node específico → []
// console.log(menu.children[1].innerHTML);

// //? Acceder al último elemento → lastElementChild
// console.log(menu.lastElementChild.innerHTML);

// //* Navegación de un nodo hijo a padre
// const link = document.querySelector('li')
// /*parentElement → nos retorna su nodo padre */
// console.log(link.parentElement)
// // Para conocer el abuelo de ese nodo podemos usar nuevamente parentElement y asi sucesivamente .
// console.log(link.parentElement.parentElement)

// //* Navegación entre nodos hermanos
// /*
// previousSiblind → Hermano anterior
// nextSibling → Hermano siguiente
// */
// console.log(link)
// console.log(link.previousElementSibling.textContent)
// console.log(link.nextElementSibling.textContent)
// // ```![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/519099cb-ab4b-4ace-83bd-688d8f9ee34e/b08c5ecb-a8f5-45e2-966d-970640b5d4ab/Untitled.png)


// obtener el ultimo elemento hijo 
const lastChild = parent.lastElementChild;
console.log(lastChild)

const previousSiblind = parent.previousElementSiblind;
console.log(previousSiblind)

const nextSibling = parent.nextElementSibling;
console.log(nextSibling)

// NOTA - Algunos metodos que nos ayudaran a seleccionar de padres a hijos de  elementos en el DOM

/*
children; //live HTMLCollection
childNodes; // live NodeList
firstChild; // live NodeList
firstElementChild; // nom-live HTMLCollection
lastChild; // live NodeList
lastElementChild; // non-live HTMLCollection
previousSibling; // live NodeList
previousElementSibling; // non-live HTMLCollection
nextSibling; // live NodeList
nextElementSibling; // non-live HTMLCollection 


*/


/********* AHORA VEREMOS COMO DE HIJOS PODEMOS SELECCIONAR A PADRES ***** */
const children2 = document.querySelector('li');
console.log(children2)

const parent2 = children2.parentNode;
console.log(parent2);

const grandParent = children2.parentElement;
console.log(grandParent);

const grandGrandParent = children2.closest('menu'); //este ultimo es el mas utilizadio
console.log(grandGrandParent)