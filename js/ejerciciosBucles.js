//Ejercicio 1

let edad = parseInt(prompt("Ingrese su edad"));
if (edad > 18) {
  document.write("Usted ya puede conducir");
} else {
  document.write("Usted no cumple los requisitos para conducir");
}

//Ejercicio 2

let nota = parseInt(prompt("Ingrese la nota"));

switch (nota) {
  case 0:
  case 1:
  case 2:
    document.write("Insuficiente");
    break;
  case 3:
  case 4:
    document.write("Insuficiente");
    break;
  case 5:
  case 6:
    document.write("Suficiente");
    break;
  case 7:
    document.write("Bien");
    break;
  case 8:
  case 9:
    document.write("Notable");
    break;
  case 10:
    document.write("Sobresaliente");
    break;
  default:
    document.write("Ingreso mal el numero");
    break;
}

//Ejercicio 3

let boton = confirm("Toca el boton Aceptar para continuar o Cancelar para salir");
let guion = "";
while(boton ===true){
    guion+="-";
    boton=confirm("Toca el boton Aceptar para continuar o Cancelar para salir");
}

//Ejercicio 4
let botonCancelar=confirm("Toca el boton Aceptar para continuar o Cancelar para salir");
let contador=0;