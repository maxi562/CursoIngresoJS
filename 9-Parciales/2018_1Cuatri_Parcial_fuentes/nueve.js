function mostrar()
{
var marca;
var peso;
var temperatura;
var contadortemppar = 0;
var marcapesado;
var contadormenoscero = 0;
var promediopeso;
var pesomax;
var pesomin;
var acumuladorpeso = 0;
var contadorproductos = 0;
var flag = 0;

do{
marca = prompt("Ingrese la marca");
 peso = parseInt(prompt("Ingrese el peso"));
 while(peso<1 || peso>100 || isNaN(peso)){
    peso = parseInt(prompt("Dato incorrecto. Ingrese el peso"));
 }
 temperatura = parseInt(prompt("ingrese temperatura"));
 while(temperatura < -30 || temperatura > 30 || isNaN(temperatura)){
    temperatura = parseInt(prompt("Dato incorrecto, la temperatura debe estar entre -30 y 30"));
 }
 if (temperatura % 2 == 0){
     contadortemppar++;
 }
 if (temperatura < 0){
     contadormenoscero++;
 }
 if (peso!=0){
     contadorproductos++;
 }
 if (flag == 0 || peso < pesomin){
     pesomin = peso;
 }
 if( flag == 0 || peso > pesomax){
     pesomax = peso;
     marcapesado = marca;
     flag = 1;
 }
 acumuladorpeso = peso + acumuladorpeso; 

 seguir = prompt("¿Desea seguir ingresando datos? s o n").toLowerCase()
while(!(seguir == "s" || seguir == "n")){
    seguir = prompt("Respuesta incorrecta. ¿Desea seguir ingresando datos? s o n").toLowerCase();
}
} while (seguir == "s");

promediopeso = acumuladorpeso / contadorproductos;

document.write("La cantidad de temperaturas pares es : " + contadortemppar + "</br>");
document.write("La marca del producto mas pesado es : " + marcapesado + "</br>");
document.write("La cantidad de productos a menos cero es : " + contadormenoscero + "</br>");
document.write("El promedio del peso total es : " + promediopeso + "</br>");
document.write("El peso máximo es : " + pesomax + "</br>");
document.write("El peso mínimo es : " + pesomin + "</br>");
}
