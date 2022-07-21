//Ejercicio 1
/*
let meses =["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
for(let i=0;i<meses.length;i++){
    document.write(meses[i]+"<br>");
}
*/
//Ejercicio 2
/*
let ciudades = [];
do{
    let nuevaCiudad = prompt("Ingrese una ciudad");
    ciudades.push(nuevaCiudad);
}while(confirm("Desea continuar?"))
for(let i=0;i<ciudades.length;i++){
    console.log(ciudades[i]);
}
document.write("Longitud del arreglo: "+ciudades.length+"<br>");
document.write("Items en la primera, tercera y ultima posicion: "+ciudades[0]+" "+ ciudades[2]+" "+ ciudades[ciudades.length-1]);

ciudades.push("Paris");

document.write("Elemento en la segunda posicion: " + ciudades[1]);

ciudades.splice(1,1,"Barcelona");
console.log("--------------------------------------")
for(let i=0;i<ciudades.length;i++){
    console.log(ciudades[i]);
}
*/

//Ejercicio 3

let resultadoDados =[];
for(let i=0;i<50;i++){
    resultadoDados.push(Math.floor(Math.random()*6)+1);
}
for(let i=0;i<50;i++){
    document.write(resultadoDados[i]+"<br>");
}


