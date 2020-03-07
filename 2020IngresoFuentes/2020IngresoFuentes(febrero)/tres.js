function mostrar()
{
var nombre;
var edad;
var sexo;
var estadocivil;
var mcasadojoven;
var max;
var sexomax;
var nombremax;
var contadorcasadas = 0;
var contadorviudas = 0;
var flag = 0;
do{
	nombre = prompt("Ingrese su nombre");

	edad = parseInt(prompt("Ingrese su edad"));
	while(edad < 18){
		edad = parseInt(prompt("Debe ser mayor de 18. Ingrese su edad :"));
	}
	sexo = prompt("Ingrese su sexo").toLowerCase();
	while(!(sexo == "f"  || sexo == "m")){
		sexo = prompt("El sexo debe ser f o m").toLowerCase();
	}
	estadocivil = prompt("Ingrese su estado civil").toLowerCase;
	while (!(estadocivil == "soltero"  ||  estadocivil == "casado"|| estadocivil == "viudo"){
		estadocivil = prompt("Debe ingresar soltero, casado o viudo").toLowerCase;
	}

if(sexo == "m"  && estadocivil == "casado"){
	mcasadojoven = nombre;
}

if (flag == 0 || edad > max){
max = edad;
sexomax = sexo;
nombremax = nombre;
flag = 1;
}

	seguir = prompt("¿Desea seguir ingresando datos? S / N").toLowerCase();
while(!(seguir == "s" || seguir == "n")){
  seguir = prompt("Incorrecto. ¿Desea seguir ingresando datos? S / N").toLowerCase();

}while(seguir == "s");



	alert("tres");
}
