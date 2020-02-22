function mostrar()
{

		// declarar variables
	var max ;
	var min ;
	var numero;
	var flag = 0;
	var seguir;	

	do{
		numero = parseInt(prompt("Ingrese un numero"));
		while(isNaN (numero	)) {

			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero"));
			
		}
		if (flag == 0 || numero > max) {
			max = numero;
		}
		if (flag == 0 || numero < min) {
			min = numero;
			flag = 1;			
		}
		
		seguir = prompt("Desea seguir ingresando numeros?");
		} while (seguir == "s");

		document.getElementById("maximo").value=max;
		document.getElementById("minimo").value=min;



}//FIN DE LA FUNCIÓN