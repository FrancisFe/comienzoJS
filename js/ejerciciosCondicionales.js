//Ejercicio 1
//alert("un mensaje");

//Ejercicio 2
document.write("«Hello World» <br>")

//Ejercicio 3
document.write(3+5);

//Ejercicio 4
let nombreUsuario=prompt("Escribe tu nombre");
document.write("<br>Hola "+nombreUsuario);

//Ejercicio 5
let primerNumero=parseInt(prompt("Escribe el primer numero"));
let segundoNumero=parseInt(prompt("Escribe el segundo numero"));
document.write("<br>El resultado de la suma es: "+ (primerNumero+segundoNumero));

//Ejercicio 6
if(primerNumero>segundoNumero){
    document.write("El primer numero es mayor al segundo"+primerNumero);
}
else{
    document.write("El segundo numero es mayor al primer"+segundoNumero);
}
//Ejercicio 7
let tercerNumero=parseInt(prompt("Escribe el tercer numero"));

if(primerNumero>segundoNumero && primerNumero>tercerNumero){
    document.write("El primer numero es el mayor de los tres  <br>");
}
else if(segundoNumero>primerNumero && segundoNumero>tercerNumero){
    document.write("El segundo numero es el mayor de los tres  <br>");
}
else{
    document.write("El tercer numero es el mayor a los tres  <br>");
}

//Ejercicio 8
let numeroPar =parseInt(prompt("Escribe el numero a dividir"));
if(numeroPar%2 ===0){
    document.write("El numero es divisible por 2  <br>");
}

//Ejercicio 9
let frase =prompt("Escribe una frase");
let fraseLength = frase.length
for(let i=0;i<fraseLength;i++){
    if(frase.charAt(i)==="a" ||frase.charAt(i)==="e" ||frase.charAt(i)==="i"||frase.charAt(i)==="o"||frase.charAt(i)==="u"){
        document.write(frase.charAt(i) +"<br>");
    }
}

//Ejercicio 10

let numeroDividir = parseInt(prompt("Escribe el numero a dividir"));
if(numeroDividir%2===0 || numeroDividir%3===0||numeroDividir%5===0||numeroDividir%7===0){
    document.write("El numero es divisible divisible por 2,3,5 o 7  <br>")
}
else{
    document.write("El numero no es divisible por 2,3,5 o 7  <br>");
}

//Ejercicio 11
let numeroADividir = parseInt(prompt("Escribe el numero a dividir"));
if(numeroADividir%2===0 || numeroADividir%3===0||numeroADividir%5===0||numeroADividir%7===0){
    if(numeroADividir%2===0 ){
        document.write("El numero es divisible por 2. <br>")
    
    }
    if(numeroADividir%3===0 ){
        document.write("El numero es divisible por 3. <br>")
    
    }
    if(numeroADividir%5===0 ){
        document.write("El numero es divisible por 5. <br>")
    
    }
    if(numeroADividir%7===0 ){
        document.write("El numero es divisible por 7. <br>")
    
    }
}
else{
    document.write("El numero no es divisible por 2,3,5 o 7");
}
