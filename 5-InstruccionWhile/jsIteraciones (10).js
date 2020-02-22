function mostrar()
{
	//declarar contadores y variables 
	var sumapositivos;
	var sumanegativos;
	var contadorpositivos;
	var contadornegativos;
	var contadorceros;
	var contadorpares;
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
		seguir = prompt("Desea seguir ingresando numeros?");
		if(numero > 0) {
			sumapositivos = numero + sumapositivos;
		}
		if (numero < 0){
			suman
		}

	} while (seguir == "s");

	
	




} //FIN DE LA FUNCIÓN