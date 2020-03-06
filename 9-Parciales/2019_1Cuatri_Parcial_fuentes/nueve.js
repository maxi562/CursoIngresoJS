function mostrar()
{
var pais;
var habitantes;
var temperatura;
var seguir;
var temperaturaspares = 0;
var paismenor;
var menoshabitantes = 0;
var contadorpaishot = 0;
var acumuladorhabitantes = 0;
var contadorpaises = 0;
var temperaturamin;
var paistempmin;
var flag = 0;
var contadormenoshab= 0;
var promediohab;

do{
    pais = prompt("Ingrese el nombre de su pais");
    
    habitantes = parseInt(prompt("Ingrese cantidad de habitantes"));
  
    while(habitantes < 1 || habitantes > 7000){
        habitantes = parseInt(prompt("Incorrecto. Ingrese cantidad de habitantes entre 1 y 7000"));}
    
        temperatura = parseInt(prompt("Ingrese la temperatura mínima de su país"));
    while(temperatura < -50 || temperatura > 50){
        temperatura = parseInt(prompt("Incorrecto. Ingrese la temperatura mínima de su país entre -50 y 50"));
    }   
    if(temperatura % 2 == 0){
        temperaturaspares++;
    }
    if(temperatura > 40){
        contadorpaishot++;
    }
   
    if(flag == 0 || temperatura<temperaturamin){
        temperaturamin = temperatura;
        paistempmin = pais;
            }
    if( flag == 0 || habitantes < menoshabitantes){
        menoshabitantes = habitantes;
        paismenor = pais;
        flag=1;
    }
    acumuladorhabitantes = habitantes + acumuladorhabitantes;
    contadorpaises++;

    seguir = prompt("¿Desea seguir introduciendo datos? s o n").toLowerCase();
    while(!(seguir == "s" || seguir == "n")){
        seguir = prompt("Incorrecto, solo indicar s o n").toLowerCase();
    }
}while(seguir == "s");

promediohab = acumuladorhabitantes / contadorpaises;

document.write("La cantidad de temperaturas pares es : " + temperaturaspares + "</br>");
document.write("El país con menos habitantes es : " + paismenor + "</br>");
document.write("La cantidad de paises con mas de 40 grados es : " + contadorpaishot + "</br>");
document.write("El promedio total de habitantes es : " + promediohab + "</br>");  
document.write("La temperatura mínima es : " + temperaturamin + " y es del país : " + paistempmin +"</br>");  
}



