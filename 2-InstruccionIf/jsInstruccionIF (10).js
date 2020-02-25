function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;

	var minimo = 1;

	var maximo = 10;

	nota = parseInt( Math.floor(Math.random() * ((maximo + 1) - minimo) + minimo));

	if( nota < 4) {
		alert ("Vamos, la próxima se puede" + nota);
	}
	else if (nota < 9) {
		alert ("Aprobado" + nota);
	}
	else (alert ("Excelente" + nota));

}//FIN DE LA FUNCIÓN