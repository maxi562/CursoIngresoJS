function mostrar()
{
var letra;
var seguir;
var numero;
var contadorpares=0;
var contadorimpares = 0;
var contadorceros = 0;
var contadorpos=0;
var promediopos;
var acumuladorpos = 0;
var acumuladorneg = 0;
var max;
var min;
var letramax;
var letramin;
var flag=0;
do{
    letra = prompt("Ingrese una letra").toLowerCase();
    while(!((letra >= "A" && letra <= "Z") || (letra >= "a" && letra <= "z"))){
        letra = prompt("Eso no es una letra. Ingrese una letra").toLowerCase();
    }
    numero = parseInt(prompt("Ingrese un numero"));
    while(numero < -100 || numero > 100 || isNaN(numero)){
        numero = parseInt(prompt("Incorrecto. Debe ingresar un numero entre -100 y 100"));
    }
    if(numero % 2 == 0){
        contadorpares++;
    }    
    else(contadorimpares++);
    
    if(numero == 0){
        contadorceros++;
    }
    else if(numero > 0){
        acumuladorpos = numero + acumuladorpos;
        contadorpos++;        
    }
    else(
        acumuladorneg = numero + acumuladorneg);
    
        if(flag == 0 || numero < min){
        min = numero;
        letramin= letra;
    }
    if (flag == 0 || numero > max){
        max = numero;
        letramax = letra;
        flag = 1;
    }

    seguir = prompt("¿Desea seguir introduciendo datos? s o n").toLowerCase();
    while(!(seguir == "s" || seguir == "n")){
        seguir = prompt("Incorrecto, solo indicar s o n").toLowerCase();
    }
} while(seguir == "s");
if(contadorpos > 0){
    promediopos = acumuladorpos / contadorpos;
}
else(promediopos = "No hubo números positivos")

document.write("La cantida de números pares es : " + contadorpares + "</br>");
document.write("La cantida de números impares es : " + contadorimpares + "</br>");
document.write("La cantida de ceros es : " + contadorceros + "</br>");
document.write("El promedio de positivos es : " + promediopos + "</br>");
document.write("La suma de negativos es : " + acumuladorneg + "</br>");
document.write("El número máximo es : " + max + " y su letra es : " + letramax +"</br>");
document.write("El número mínimo es : " + min + " y su letra es : " + letramin +"</br>");


}
