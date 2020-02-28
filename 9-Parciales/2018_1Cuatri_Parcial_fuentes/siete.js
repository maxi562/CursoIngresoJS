function mostrar()
{
    var notas;
    var sexo;
    var promedio;
    var contador = 0;
    var acumulador=0;
    var flag = 0;
    var contadorm;

    for(var x=0; x< 5; contador++){
        notas = parseInt(prompt("Ingrese la nota del 1 al 10"));
        sexo = prompt("Ingrese el sexo f o m");
        acumulador = acumulador + notas;

        }
        if (flag == 0 || notas > max) {
			max = notas;
		}
		if (flag == 0 || notas < min) {
			min = notas;
			flag = 1;			
        }
        if(notas = "m"){
            contadorm++;
        }

    }


