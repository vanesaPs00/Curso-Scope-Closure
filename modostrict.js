'use strict';
pi=3.1416;
console.log(pi);

//forma correcta con el modo strict
var pi;
pi=3.1416;
console.log(pi);

//En una función

function myFunction(){
    'use strict';
    let pi;
    pi=3.1416;
    console.log(pi);
}
myFunction();