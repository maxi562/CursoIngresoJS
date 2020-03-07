
function mostrar()
{
	var tipo;
	var contadorbarbijo = 0;
	var contadorjabon = 0;
	var contadoralcohol=0;
	var precio;

	var cantidad;

	var marca;
	var marcamayor;
	var fabricante;

	var barbijocaro;
	var marcabc;
	var contadorbarbijosc=0;
	
	var flag = 0;


	for(i=0;i<5;i++){

tipo = prompt("Ingrese el tipo de producto : ").toLowerCase();
while(!(tipo == "barbijo" || tipo == "jabon" || tipo == "alcohol")){
	tipo = prompt("Incorrecto. Debe ingresar barbijo, jabon, o alcohol ").toLowerCase();
	
	}
	if (tipo = "barbijo"){
		contadorbarbijo++		
	}
	else if (tipo = "alcohol" ){
		contadoralcohol++
	}
	else (contadorjabon++);

	precio = parseInt(prompt("Ingrese el precio : "));
	while(precio < 100 || precio > 300){
		precio = parseInt(prompt("Precio incorrecto. Debe ingresar un valor entre 100 y 300"));
	}

	cantidad = parseInt(prompt("Ingrese la cantidad : "));
	while(cantidad < 1 || cantidad > 1000){
		cantidad = parseInt(prompt("Incorrecto. La cantidad debe estar entre 1 y 1000"));
	}
	marca = prompt("Ingrese la marca : ");

	fabricante = prompt("Ingrese el fabricante : ");

if(tipo == "barbijo"){
barbijocaro = precio
marcabc = marca
contadorbarbijosc++
}
if( tipo == "barbijo" && precio > barbijocaro){
	barbijocaro = precio
	marcabc = marca
	contadorbarbijosc++;
}


	}
	alert ("La cantidad de barbijos caros es : " + contadorbarbijosc + "\n" + " Y su fabricante es : " + marcabc +
			"El fabricante con mas unidades es : " +
			"La cantidad de jabones es : " + contadorjabon)
}
