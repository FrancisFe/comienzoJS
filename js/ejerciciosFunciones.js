//Ejercicio 1
/*
const imparOPar=(numero)=>{
    if(numero%2===0){
        return "El numero es par";
    }
    else{
        return "El numero es impar";
    }
}
const resultado = imparOPar(prompt("Ingrese el numero"));
console.log(resultado);
*/
//Ejercicio 2
/*
const verCadena=(cadena)=>{
    if(cadena == cadena.toUpperCase()){
        return "Es todo mayusculas"
    }
    else if(cadena == cadena.toLowerCase()){
        return "Es todo minusculas";
    }
    else{
        return "Es una mezcla";
    }
}
let retorno = verCadena(prompt("Ingresa el texto"));
console.log(retorno);
*/
//Ejercicio 3
/*
const calcularPerimetro=(ladoA,ladoB)=>{
let perimetro = 2*(ladoA+ladoB);
return perimetro;
}
let ladoA=parseInt(prompt("Ingresa el lado A"));
let ladoB=parseInt(prompt("Ingrese el lado B"));
let resultado=calcularPerimetro(ladoA,ladoB);
console.log(resultado);
*/
//Ejercicio 4

const tablaMultiplicar=(numero)=>{
    let tabla=[];
    for(let i=1;i<=10;i++){
        tabla.push(i*numero);
    }
    return tabla;
}
let numero = parseInt(prompt("Ingrese el numero"));
let resultado = tablaMultiplicar(numero);
for(let i=0;i<10;i++){
    console.log(resultado[i]);
}