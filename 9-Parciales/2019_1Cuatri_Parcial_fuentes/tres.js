function mostrar()
{
var precio;

var descuento;

var porcentaje;

var preciofinal;

precio = parseInt(prompt("Ingrese el precio"));

descuento = parseInt(prompt("Ingrese el porcentaje de descuento"));

porcentaje = precio * descuento / 100;

preciofinal = precio - porcentaje;

document.getElementById("elPrecioFinal").value = preciofinal;


}
