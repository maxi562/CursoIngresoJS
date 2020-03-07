function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadocivil;
	var edadmasviejo;
	var sexomasviejo;
	var nombremasviejo;
	var flag=0;
	var nombrecasadomasjoven;
	var edadcasadomasjoven;
	var contadorcasadasoviudas = 0;
	var acumuladoredadmujeres = 0;
	var contadormujeres = 0;
	var promediodeedadentremujeres;
	var contadorsolteros = 0;
	var acumuladoredadsolteros = 0;
	var promedioedadentresolteros;
	var flag1=0;
	
	do{
		nombre = prompt("Ingrese su nombre");
	
		edad = parseInt(prompt("Ingrese su edad"));
		while(isNaN(edad) || edad < 18 || edad > 99){
			edad = parseInt(prompt("Debe ser mayor de 18. Ingrese su edad :"));
		}
		sexo = prompt("Ingrese su sexo").toLowerCase();
		while(!(sexo == "f"  || sexo == "m")){
			sexo = prompt("El sexo debe ser f o m").toLowerCase();
		}
		estadocivil = prompt("Ingrese su estado civil").toLowerCase();
		while (!(estadocivil == "soltero"  ||  estadocivil == "casado"|| estadocivil == "viudo")){
			estadocivil = prompt("Debe ingresar soltero, casado o viudo").toLowerCase();
		}
		
		if(sexo == "m" && flag1 == 0 && estadocivil == "casado"|| edad < edadcasadomasjoven){
			edadcasadomasjoven = edad;
			nombrecasadomasjoven = nombre;
			flag1=1;
		}
		if( flag == 0 || edad > edadmasviejo){
			sexomasviejo = sexo;
			edadmasviejo = edad;
			nombremasviejo = nombre;
			flag = 1;
			 }

		if(sexo == "f" && estadocivil == "casado" || estadocivil == "viudo"){
			contadorcasadasoviudas++;
		}	 
		if(sexo == "f"){
			acumuladoredadmujeres = edad + acumuladoredadmujeres;
			contadormujeres++;
		}
		if(sexo == "m" && estadocivil == "soltero")	{
			acumuladoredadsolteros = edad + acumuladoredadsolteros;
			contadorsolteros++;
		}
	
	
		
		
		
		seguir = prompt("¿Desea seguir ingresando datos? S / N").toLowerCase();
		while(!(seguir == "s" || seguir == "n")){
		  seguir = prompt("Incorrecto. ¿Desea seguir ingresando datos? S / N").toLowerCase();}
		
		}while(seguir == "s");
		
		if(contadormujeres > 0){ 
		promediodeedadentremujeres = acumuladoredadmujeres / contadormujeres;}
		else(promediodeedadentremujeres = "No hay mujeres");

		if(contadorsolteros > 0){
			promedioedadentresolteros = acumuladoredadsolteros / contadorsolteros;
		}else(acumuladoredadsolteros = "No hubo hombres solteros");

	document.write("El nombre del hombre casado mas joven es : " + nombrecasadomasjoven + "</br>");
	document.write("El sexo del pasajero mas viejo es : " + sexomasviejo + " y el nombre es : " + nombremasviejo +"</br>");
	document.write("La cantidad de mujeres casadas o viudas es : " + contadorcasadasoviudas + "</br>");
	document.write("El promedio de edad entre las mujeres es : " + promediodeedadentremujeres + "</br>");
	document.write("El promedio de edad entre hombres solteros es : " + promedioedadentresolteros + "</br>");
}
