function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var flag = 0;
	
	var respuesta='si';
	do{
		numero = parseInt(prompt("Ingrese un numero"));
		while(isNaN (numero	)) {

			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero"));
			
		}
			// ahora que tengo el numero validado, me fijo el signo

			if(numero >=0){
				positivo = numero + positivo;
			}else{ 
				negativo = numero * negativo;
				contador++;
				flag = 1 //el flag sirve para saber si el programa pasó o no por acá.
				//si pasó, entonces flag cambia el valor y el IF fuera de While hace la validación
				//para saber qué va a mostrar el ID
				 }
					

			seguir = prompt("Desea seguir ingresando numeros?");
			

	} while (seguir == "s");

	if(flag == 0) {
		negativo = 0
	} 

document.getElementById("suma").value=positivo;
document.getElementById("producto").value=negativo

}//FIN DE LA FUNCIÓN