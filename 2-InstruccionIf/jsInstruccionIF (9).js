function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
var numero;

var maximo= 10;

var minimo= 1;

numero = Math.floor (Math.random() * ((maximo + 1) - minimo) + minimo);

alert("El numero es : " + numero);

}//FIN DE LA FUNCIÓN