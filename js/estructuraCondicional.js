let primerNumero = parseInt(prompt("Ingrese el primer numero"));
let segundoNumero = parseInt(prompt("Ingrese el segundo numero"));

if (primerNumero > segundoNumero) {
  document.write("La variable primerNumero es mayor:  " + primerNumero);
} else if(segundoNumero>primerNumero){
  document.write("La variable segundoNumero es mayor: " + segundoNumero);
}
else{
document.write("Las variables son iguales");
}