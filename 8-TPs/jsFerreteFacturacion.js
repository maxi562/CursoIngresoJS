/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var p1;
    var p2;
    var p3;
    var resultado;

    p1 = parseInt (document.getElementById("PrecioUno").value);

    p2 = parseInt (document.getElementById("PrecioDos").value);

    p3 = parseInt (document.getElementById("PrecioTres").value);

    resultado = p1 + p2 + p3;       

    alert("La suma es : " + resultado);

}
function Promedio () 
{
	var p1;
    var p2;
    var p3;
    var resultado;

    p1 = parseInt (document.getElementById("PrecioUno").value);

    p2 = parseInt (document.getElementById("PrecioDos").value);

    p3 = parseInt (document.getElementById("PrecioTres").value);

    resultado = (p1 + p2 + p3) / 3;    

       alert("El promedio es : " + resultado);
}
function PrecioFinal () 
{
	var p1;
    var p2;
    var p3;
    var resultado;

    p1 = parseInt (document.getElementById("PrecioUno").value);

    p2 = parseInt (document.getElementById("PrecioDos").value);

    p3 = parseInt (document.getElementById("PrecioTres").value);

    resultado = (p1 + p2 + p3) * 1.21;    

        alert("Monto total es : " + resultado);

}
