console.log("Hola a todos");
a = 20;
b = 3;
console.log(`Rosa tiene ${a} años y ${b} mascotas`);

/*
a = 10;
b = "2";
c = b * a;
//document.write(c * 2);

let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 100];
let filtrados = numeros.filter(function (item) {
  return item <= 30;
});
console.log(filtrados);
//document.write(filtrados);

let filtrados2 = numeros.filter(function (item2) {
  return item2 >= 20 && item2 <= 80;
});
document.write(filtrados2);
console.log(filtrados2);
*/

console.log("filtrados1");
const button = document.getElementById("botonBienvenida");
console.log("filtrados2");
button.addEventListener("click", () => {
  alert("Bienvenidos amigos!");
});
console.log("filtrados3");

console.log(typeof typeof 25);
console.log(typeof 25);

function sumar(a) {
  return a * a;
}
function multiplicar(b, sumariza) {
  return sumariza(b);
}
console.log(multiplicar(4, sumar));

let myFunc = () => ({ href: "Hola" });
const { href } = myFunc();
console.log(href);

function sumar(a, b) {
  return a + b + 100;
}
console.log(sumar(4, 6));

//--------------------------

let sumar = (a, b) => a + b + 100;
console.log(sumar(4, 6));

arreglo1 = [2, 3, 4, 5, 6, 7, 8, 9];
arreglo2 = [2, 3, 4, 5];
arreglo3 = [2, 3, 4, 5];
let esIgual2 = false;
const esIgual = (arreglo1, arreglo2) =>
  JSON.stringify(arreglo1.sort()) === JSON.stringify(arreglo2.sort());

console.log(esIgual);

console.log(JSON.stringify({ x: 5, y: 6 }));