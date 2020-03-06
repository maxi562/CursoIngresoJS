function mostrar()
{
var altura;

var sexo;
var acumuladoraltura = 0;
var promedio;
var minaltura;
var sexomin;
var contadormujaltas = 0;
var flag = 0;

altura = parseInt(prompt("Ingrese la altura en cm"));
while(altura <0 || altura > 250 || isNaN(altura)){
    altura = parseInt(prompt("Dato incorrecto. Ingrese altura entre 1 y 250"));
}
    sexo =prompt("Ingrese el sexo").toLowerCase();
    while(!(sexo == "f" || sexo == "m")){
        sexo = prompt("Ingrese únicamente f o m para el sexo").toLowerCase();
    }

for(i=0;i<5;i++){
    altura = parseInt(prompt("Ingrese la altura en cm"));
    while(altura <0 || altura > 250 || isNaN(altura)){
        altura = parseInt(prompt("Dato incorrecto. Ingrese altura entre 1 y 250"));
    }
    acumuladoraltura = altura + acumuladoraltura;
    sexo =prompt("Ingrese el sexo").toLowerCase();
    while(!(sexo == "f" || sexo == "m")){
        sexo = prompt("Ingrese únicamente f o m para el sexo").toLowerCase();
    }
    if(altura > 190 && sexo == "f"){
        contadormujaltas++;
    }
    if(flag == 0 || altura < minaltura){
        minaltura = altura;
        sexomin = sexo;
        flag = 1;
    }
}
promedio = acumuladoraltura / 5;

alert("El promedio de las alturas es : " + promedio + "\n" + 
"La altura mas baja es : " + minaltura + " y su sexo es : " + sexomin + "\n" + 
"La cantidad de mujeres de mas de 190cm es : " + contadormujaltas);
}
