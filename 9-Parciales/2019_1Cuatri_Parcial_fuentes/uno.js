
function mostrar()
{
var lado;
var perimetro;

lado = parseInt(prompt("Indicar la medida de uno de los lados"));
while(lado<= 0 || isNaN(lado)){
    lado = parseInt(prompt("Dato incorrecto. Indicar la medida de uno de los lados"));
}

perimetro = lado * 3;
alert("El perímetro del triángulo es : " + perimetro);
}
