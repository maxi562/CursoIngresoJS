function mostrar()
{
var precio;

var descuento;

var preciofinal;

precio = parseInt(prompt("Indicar el precio"));

descuento = parseInt(prompt("indicar el porcentaje de descuento"));

preciofinal = (precio * descuento) / 100;

document.getElementById("elPrecioFinal").value = precio - preciofinal;
}
