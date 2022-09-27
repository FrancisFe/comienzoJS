const aumentarPrecio =()=>{
    let disney =385;
    let aumentar = 150;
    document.write("Valor Total del servicio Disney Plus: "+ (disney+aumentar));
}
const actualizarPrecio = (monto,producto,precio)=>{
    let calculo = monto + precio;
    document.write("<br>El producto: "+ producto + " El Precio Total: $" + calculo);
}
aumentarPrecio();

let coeficienteInflacion = parseInt(prompt("Ingrese el monto total de la inflacion del mes"));

actualizarPrecio(coeficienteInflacion,"Harina", 100);