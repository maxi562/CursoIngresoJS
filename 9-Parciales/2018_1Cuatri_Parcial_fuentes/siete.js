function mostrar()
{
    var notas;
    var sexo;
    var promedio;
    var acumulador=0;
    var flag = 0;
    var contadorm=0;
    var sexobajo;

    for(var x=0; x < 5; x++){
        notas = parseInt(prompt("Ingrese nota del 1 al 10"));
        while(notas <1 || notas > 10 || isNaN(notas)){
            notas = parseInt(prompt("Nota inválida.Ingrese nota del 1 al 10"));
        }
        sexo = prompt("Ingrese el sexo f o m");
        while(!(sexo=="f" || sexo=="m")){
            sexo = prompt("Sexo inválido. Ingrese f o m");
        }
        acumulador = acumulador + notas;
        
        if (flag == 0 || notas > max) {
            max = notas;
            sexo = sexo;
		}
		if (flag == 0 || notas < min) {
            min = notas;
            sexobajo = sexo;
			flag = 1;			
        }
        if(notas >= 6 && sexo == "m"){
            contadorm++;
        }}
        promedio = acumulador / 5;
        
        alert("El promedio de notas es : " + promedio + "\n" +
        "La nota más baja es : " + min + " y su sexo es : " + sexobajo + "\n" + 
        "La cantidad de varones con nota mayor o igual a seis es : " + contadorm);
    }


