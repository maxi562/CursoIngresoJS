function mostrar()  //1ª manera
{

	//var numero = prompt("ingrese un número entre 0 y 10.");

	//while (numero <0  || numero >9 || isNaN(numero) ) {

	//	numero = prompt("Error. Reingrese un número entre 0 y 10.");

	//}	
	// document.getElementById("Numero").value = numero;

//}//FIN DE LA FUNCIÓN

//2ª manera

  	var numero = prompt("ingrese un número entre 0 y 10.");

	while (!(numero >=0 && numero <=9 ) || isNaN(numero)) {

		numero = prompt("Error. Reingrese un número entre 0 y 10.");

	 }	
	document.getElementById("Numero").value = numero;
 }	