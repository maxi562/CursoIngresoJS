function mostrar()
{
var letra;

var numero;

var seguir;

var contadorpares = 0;
var contadorimpares = 0;
var contadorceros = 0;
var contadorpos = 0;
var promediopos = 0;
var acumuladorpositivos = 0;
var acumuladornegativos = 0;
var max = 0;
var min = 0;
var letramax;
var letramin;
var flag = 0;


do{ 
 letra = prompt("Por favor ingrese una letra").toLowerCase();
while (!(isNaN(letra))) {
    letra = prompt("Dato incorrecto. Por favor ingrese una letra").toLowerCase();
}
 numero = parseInt(prompt("Por favor ingrese un número"));
while(numero < -100 || numero >100 || isNaN(numero)){
    numero = parseInt(prompt("Dato incorrecto. Por favor ingrese un número"));
    }
if(numero % 2 == 0){
    contadorpares++;
}
else(
    contadorimpares++);

if(numero == 0){
    contadorceros++;
}
else if(numero > 0){
    acumuladorpositivos = acumuladorpositivos + numero;
    contadorpos++;
}
else (
    acumuladornegativos = acumuladornegativos - numero);

if( flag == 0 || numero < min){
    min = numero;
    letramin = letra;
}
if (flag == 0 || numero > max) {
    max = numero;
    letramax = letra;
    flag = 1;
}
seguir = prompt("¿Desea seguir ingresando datos? s o n").toLowerCase()
while(!(seguir == "s" || seguir == "n")){
    seguir = prompt("Respuesta incorrecta. ¿Desea seguir ingresando datos? s o n").toLowerCase();
}
} while(seguir == "s");

if(contadorpos == 0){ 
    promediopos = "No hay positivos";}
    else (
promediopos = acumuladorpositivos / contadorpos);

document.write("La cantida de numeros pares es : " + contadorpares + "</br>");
document.write("La cantida de numeros impares es : " + contadorimpares + "</br>");
document.write("La cantida de ceros es : " + contadorceros + "</br>");
document.write("El promedio de todos los positivos ingresados es : " + promediopos + "</br>");
document.write("La suma de todos los negativos es : " + acumuladornegativos + "</br>");
document.write("El mínimo es : " + min + " Y su letra es : " + letramin + "</br>");
document.write("El máximo es : " + max + " Y su letra es : " + letramax + "</br>");
}
