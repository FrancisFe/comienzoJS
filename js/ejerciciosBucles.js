//Ejercicio 1
/*
let edad = parseInt(prompt("Ingrese su edad"));
if (edad > 18) {
  document.write("Usted ya puede conducir");
} else {
  document.write("Usted no cumple los requisitos para conducir");
}
*/
//Ejercicio 2
/*
let nota = parseInt(prompt("Ingrese la nota"));

switch (nota) {
  case 0:
  case 1:
  case 2:
    alert("Insuficiente");
    break;
  case 3:
  case 4:
    alert("Insuficiente");
    break;
  case 5:
  case 6:
    alert("Suficiente");
    break;
  case 7:
    alert("Bien");
    break;
  case 8:
  case 9:
    alert("Notable");
    break;
  case 10:
    alert("Sobresaliente");
    break;
  default:
    alert("Introduce un numero valido");
    break;
}
*/
//Ejercicio 3
/*
let acumulador="";
do{
    let palabra = prompt("Ingrese una palabra");
    acumulador +=palabra +"-";
}while(confirm("Desea canelar?"))
let ver = acumulador.slice(0, -1);
document.write(ver);
*/
//Ejercicio 4
/*
let total = 0 ;
do{
  let numero = parseInt(prompt("Ingrese un numero"));
  if(!isNaN(numero)){
    total+=numero;
  }
  else{
    alert("Usted no ingreso un numero");
  }
}while(confirm("Desea continuar?"))
document.write(total);

*/
//Ejercicio 5
/*
let resto = 0;
do {
  let numero = parseInt(prompt("Ingrese su dni"));
  if (numero > 100000000 || numero <0 || isNaN(numero)) {
    alert("Ingreso un numero equivocado");
  } else {
    resto = numero % 23;
    alert(resto);
    switch (resto) {
      case 0:
        document.write("T");
        break;
      case 1:
        document.write("R");
        break;
      case 2:
        document.write("W");
        break;
      case 3:
        document.write("A");
        break;
      case 4:
        document.write("G");
        break;
      case 5:
        document.write("M");
        break;
      case 6:
        document.write("Y");
        break;
      case 7:
        document.write("F");
        break;
      case 8:
        document.write("P");
        break;
      case 9:
        document.write("D");
        break;
      case 10:
        document.write("X");
        break;
      case 11:
        document.write("B");
        break;
      case 12:
        document.write("N");
        break;
      case 13:
        document.write("J");
        break;
      case 14:
        document.write("Z");
        break;
      case 15:
        document.write("S");
        break;
      case 16:
        document.write("Q");
        break;
      case 17:
        document.write("V");
        break;
      case 18:
        document.write("H");
        break;
      case 19:
        document.write("L");
        break;
      case 20:
        document.write("C");
        break;
      case 21:
        document.write("K");
        break;
      case 22:
        document.write("E");
        break;
      default:
        alert("Ocurrio un error, intenta nuevamente");
        break;
    }
  }
} while (confirm("Pulse cancelar para salir"));
*/
//Ejercicio 6
/*
for(let i=1;i<30;i++){
  for(let j=1;j<i;j++){
    document.write(i);
    
  }
  document.write("<br>");
}
*/
//Ejercicio 7
/*
let numero = parseInt(prompt("Ingrese un numero"));
for(let i=numero ; i >0 ;i--){
  for(let j=i;j>0;j--){
    document.write(i);
  }
document.write("<br>");
}
*/
//Ejercicio 8
/*
let num=1;
let numero = parseInt(prompt("Ingrese un numero"));
if(numero>50){
  alert("Ingreso un numero muy grande");
}

else{
  for(let i=0;i<numero;i++){
    for(let j =0;j<i;j++){
      document.write(num)
      num+=1;
    }
    num=1;
    document.write("<br>");
  }
}
*/
//Ejercicio 9
/*
let numero = parseInt(prompt("Ingrese un numero del 1 al 500"));
for(let i=1;i<numero;i++){
  if(i%4===0 && i%9 ===0){
    document.write(i+" (Multiplo de 4 y de 9)"+"<br>");
  }
  else if(i%4 ===0){
    document.write(i +" (Multiplo de 4)<br>");
  }
  else if(i%9 === 0){
    document.write(i+"(Multiplo de 9)<br>");
  }
  else{
    document.write(i+"<br>");
  }
  if(i%5===0){
    document.write("------------------------------------------------------ <br>");
  }
}
*/
//Ejercicio 10
/*
let filas=parseInt(prompt("Ingrese el numero de filas"));
let columnas=parseInt(prompt("Ingrese el numero de columnas"));
let cant=filas*columnas;
document.write("<table border>");
for(let i=0;i<filas;i++){
    document.write("<tr>");
    for(let j=0;j<columnas;j++){
        document.write("<td>"+cant);
        document.write("</td>")
        cant--;
    }
    document.write("</tr>");
}
document.write("</table>");
*/
//Ejercicio 11
/*
let nombre1 = prompt("Ingrese el nombre");
let edad1 = parseInt(prompt("Ingrese su edad"));
let nombre2 = prompt("Ingrese el nombre");
let edad2 = parseInt(prompt("Ingrese su edad"));
let nombre3 = prompt("Ingrese el nombre");
let edad3 = parseInt(prompt("Ingrese su edad"));

let resultado = Math.max(edad1,edad2,edad3);
if(resultado===edad1){
  document.write(nombre1);
}
else if(resultado===edad2){
  document.write(nombre2);
}
else{
  document.write(nombre3);
}
*/
//Ejercicio 12
/*
let num = Math.floor(Math.random()*100);
document.write(num);
*/
//Ejercicio 13
/*
let texto = prompt("Ingrese un texto");

document.write(texto.toUpperCase());
*/

//Ejercicio 14
/*
let texto = prompt("Ingrese su texto");
let cantidadChar = texto.length;
let caracter;
for(let i=0;i<cantidadChar;i++){
  caracter=texto.charAt(i);
  if(i== cantidadChar-1){
    document.write(caracter);
  }
  else{
    document.write(caracter+"-");
  }
}
*/
//EJercicio 15
/*
let texto = prompt("Ingrese su texto");
texto = texto.toUpperCase();
let cantChar = texto.length;
let contador = 0;
let char;

for (let i = 0; i < cantChar; i++) {
  char = texto.charAt(i);
  if((char == "A") || (char == "E") || (char == "I") || (char == "O") || (char == "U")){
    contador++;
  }
}
document.write(contador);
*/

//Ejercicio 16
/*
let texto = prompt("Ingrese el texto");
texto = [...texto].reverse().join("");
document.write(texto);
*/

//Ejercicio 17

let texto = prompt("Ingrese un texto");
texto=texto.toUpperCase();
let cantChar = texto.length;
let char;
let pos;
for (let i = 0; i < cantChar; i++) {
  char = texto.charAt(i);
  if(pos === undefined){
    if((char == "A") || (char == "E") || (char == "I") || (char == "O") || (char == "U")){
      pos=i;
    }
  }
 
}
document.write(pos);