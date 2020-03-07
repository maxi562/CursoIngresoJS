
function mostrar()
{
	var tipo;
	var precio;
	var cantidad;
	var marca;
	var fabricante;
	var flag = 0;
	var flag1 = 0;
	var cantidadmaxima;
	var cantidadmaximafabricante;
	var acumuladordejabon = 0;
	var preciobarbijomascaro;
	var preciobarbijomascarocantidad;
	var preciobarbijomascarofabricante;

	for(var i=0;i<5;i++){

		tipo = prompt("Ingrese tipo de producto").toLowerCase();
		while(!(tipo == "barbijo" || tipo == "alcohol" || tipo == "jabon")){
			tipo = prompt("Debe ingresar jabon, alcohol o barbijo").toLowerCase();
		}
		precio = parseInt(prompt("Ingrese precio"));
		while(isNaN(precio) || precio < 100 || precio > 300){
			precio = parseInt(prompt("Ingrese precio entre 100 y 300"));
		}
		cantidad = parseInt(prompt("Ingrese cantidad"));
		while(isNaN(cantidad) ||  cantidad<1 || cantidad >1000){
			cantidad = parseInt(prompt("Ingrese cantidad entre 1 y 1000"));
		}
		marca = prompt("ingrese marca");
		fabricante = prompt("Ingrese fabricante");

		if(tipo == "barbijo" && flag == 0 || precio > preciobarbijomascaro){
			preciobarbijomascaro = precio
			preciobarbijomascarofabricante = fabricante
			preciobarbijomascarocantidad = cantidad
			flag = 1;
		}

		if(flag1 == 0 || cantidad > cantidadmaxima){
			cantidadmaxima = cantidad;
			cantidadmaximafabricante = fabricante;
			flag1 = 1;
			}
		if(tipo == "jabon"){
			acumuladordejabon = cantidad + acumuladordejabon;

		}
		         
      }

	  document.write("La cantidad de unidades del barbijo mas caro es : " + preciobarbijomascarocantidad  + " Y el fabricante es : " + preciobarbijomascarofabricante + "</br>")
	  document.write("El fabricante del item con mas unidades es : " + cantidadmaximafabricante + "</br>");
	  document.write("La cantidad total de jabones es : " + acumuladordejabon);

	}
