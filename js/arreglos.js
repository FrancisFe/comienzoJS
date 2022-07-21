let series = ["Dragon Ball Z", "Naruto","One Piece"];
for(let i=0;i<series.length;i++){
    console.log(series[i]);
}
console.log("--------------------------");
//Crear array
let array = [];

//Agregar un elemento al final del arreglo
series.push("JoJo");
series.push("Chainsaw man");
console.log(series[3]);
console.log(series[4]);
console.log("--------------------------");
// cantidad de datos en el arreglo

console.log(series.length);

//Modificar un elemento del arreglo

series[4]= "My Hero Academia";
console.log(series[4]);
console.log("--------------------------");
//Agregar un elemento nuevo en una posicion particular
series.splice(0,0,"Windbreaker");
for(let i=0;i<series.length;i++){
    console.log(series[i]);
}


//Borrar Elemento de un arreglo

series.splice(7,1);
//splice(posicion,elemento a borrar);

//Elmiminar todos los elementos a partir de tal posicion
series.splice(6);