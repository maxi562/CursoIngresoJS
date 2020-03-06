function mostrar()
{
var num1;

var num2;

var suma;

var resta;

num1 = parseInt(prompt("Indicar primer número"));

num2 = parseInt(prompt("Indicar número dos"));

suma = num1 + num2;

resta = num1 - num2;

if(num1 == num2){
    alert("Este es el numero 1 : " + num1 +"\n" + "Este es el número 2 : " + num2);
}
else if (num1 > num2){
    alert("La resta es : " + resta);
}
else if (num1 < num2 && suma<=10) {
    alert("LA suma es : " + suma) ;               
    }
    else if (num1 < num2 && suma>10) {
        alert("LA suma es : " + suma  +" y superó el diez ") ;               
        }
}



