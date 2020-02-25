function mostrar()
{
	//declarar contadores y variables 
	var sumapositivos = 0;
	var sumanegativos = 0;
	var contadorpositivos = 0;
	var contadornegativos = 0;
	var contadorceros = 0;
	var contadorpares = 0;
	var promediopos;
	var promedioneg;
	var diferencia;
	var numero;
	var seguir;

	do{
		numero = parseInt(prompt("Ingrese un numero"));
		while(isNaN (numero	)) {

			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero"));
					}		
		if(numero >= 0) {
			sumapositivos = numero + sumapositivos;
			contadorpositivos++;
		}
		else if (numero < 0){
			sumanegativos = numero + sumanegativos;
			contadornegativos++;
		}
		else if (numero == 0) {
			contadorceros++;
		}
		else if (numero % 2 == 0) {
			contadorpares++;
		}
		seguir = prompt("Desea seguir ingresando numeros?");

	} while (seguir == "s");

	if ( contadorpositivos > 0){
		promediopos = sumapositivos/contadorpositivos;
	}
	if ( contadornegativos > 0){
		promedioneg = sumanegativos/contadornegativos;
	}
	diferencia = contadorpositivos - contadornegativos;

	document.write("La suma de los negativos es :" + sumanegativos +"</br>");
	document.write("La suma de los positivos es :" + sumapositivos +"</br>");
	document.write("La cantidad de negativos es :" + contadornegativos +"</br>");
	document.write("La cantidad de positivos es :" + contadorpositivos +"</br>");
	document.write("La cantidad de ceros es :" + contadorceros +"</br>");
	document.write("La cantidad de pares es :" + contadorpares +"</br>");
	document.write("El promedio de los positivos es :" + promediopos +"</br>");
	document.write("El promedio de los negativos es :" + promedioneg +"</br>");
	document.write("La diferencia entre positivos y negativos es :" + diferencia +"</br>");

	
	




} //FIN DE LA FUNCIÓN