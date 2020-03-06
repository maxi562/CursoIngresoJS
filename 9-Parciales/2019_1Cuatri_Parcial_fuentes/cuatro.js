function mostrar()
{
var num1;

var num2;

var resta;

var suma;

num1 = parseInt(prompt("Ingrese el primer numero"));

num2 = parseInt(prompt("Ingrese el segundo numero"));

resta = num1 - num2;

if(num1 == num2){
    alert("Este es el numero uno :" + num1 + " Este es el numero dos : " + num2);
}
else if (num1 > num2 && resta>10){    
    alert("La resta es : " +resta + " y superó el 10 ");
}
else if(num1 > num2){
    alert("La resta es : " + resta);
}
else if (num1 < num2){
    suma = num1 + num2
    alert(" La suma tiene como resultado : " + suma);
}
}
