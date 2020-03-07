function mostrar()
{
var peso;

var precio;
var acumuladorpeso = 0;
var preciomax = 0;
var importetotal = 0;
var preciodto15;
var preciodto25;
var tipocaro;
var tipo;
var seguir;
var promedioprecio = 0;
flag = 0;

do{
peso = parseInt(prompt("Ingrese el peso : "));
while(peso < 10 || peso > 1000 ){
  peso = parseInt(prompt("Incorrecto. Ingrese valor entre 10 y 1000"));
  }
precio = parseInt(prompt("Ingrese el precio : "));
while(precio < 1){
  precio = parseInt(prompt("El precio debe ser mayor a 0. Reingrese"));
}
tipo = prompt("Ingrese el tipo :").toLowerCase();
while(!(tipo == "v" || tipo == "m" || tipo == "a")){
  tipo = prompt("Incorecto. Debe ingresar v, a o m").toLowerCase();
}
if(flag == 0 || precio > preciomax){
  preciomax = precio;
  tipocaro = tipo;
  flag = 1; }

acumuladorpeso = peso + acumuladorpeso;

importetotal = (peso * precio) + importetotal;




seguir = prompt("¿Desea seguir ingresando datos? S / N").toLowerCase();
while(!(seguir == "s" || seguir == "n")){
  seguir = prompt("Incorrecto. ¿Desea seguir ingresando datos? S / N").toLowerCase();
}

}while(seguir == "s");

if (acumuladorpeso > 100){
  preciodto15 = importetotal * 0.85;
}
if (acumuladorpeso > 300) {
  preciodto25 = importetotal * 0.75;
}



promedioprecio = (importetotal / acumuladorpeso).toFixed(2);

document.write("EL importe bruto total a pagar es :" + importetotal + "</br>");
if(acumuladorpeso > 100 && acumuladorpeso < 300){
  document.write("EL importe con 15% de descuento a pagar es :" + preciodto15 + "</br>");
}
else if (acumuladorpeso > 300){
  document.write("EL importe con 25% de descuento a pagar es :" + preciodto25 + "</br>");
}
document.write("EL tipo de alimento más caro es:" + tipocaro + "</br>");
document.write("EL promedio de precio es:" + promedioprecio + "</br>");
}
