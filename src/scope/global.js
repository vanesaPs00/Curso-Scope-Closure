//Variables
var a; //Declarando
var b='b'; // Declaramos y asignamos
b='bb'; //Reaginación
var a='aa' //Redeclaración

//global Scope

var fruit='apple'; //global
console.log(fruit);
function bestFruit(){
    console.log(fruit);
}
bestFruit();
//otra forma de declarar e forma global
//tener cuidado con esta parte
function countries(){
    country='colombia';//
    console.log(country);
}
countries();
console.log(country);