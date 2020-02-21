function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero

while(contador < 5) {
	numero = parseInt(prompt("Ingrese un numero"));
	acumulador = acumulador + numero;
	contador++;
}

document.getElementById("suma").value=acumulador;
document.getElementById("promedio").value=acumulador/contador;

}//FIN DE LA FUNCIÓN