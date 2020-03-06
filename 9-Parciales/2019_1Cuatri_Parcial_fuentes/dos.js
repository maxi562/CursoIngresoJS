function mostrar()
{
  var nombre1;
  var nombre2;
  var peso1;
  var peso2;
  var sumapesos;
  var promediopesos;

  nombre1 = prompt("Ingrese su nombre");
  nombre2 = prompt("Ingrese el nombre de su pareja");
  peso1 = parseInt(prompt("Ingrese su peso"));
  while(peso1 < 1 || isNaN(peso1)){
    peso1 = parseInt(prompt("Ingrese correctamente su peso"));
  }
  peso2 = parseInt(prompt("Ingrese el peso de su pareja"));
  while(peso2 < 1 || isNaN(peso2)){
    peso2 = parseInt(prompt("Ingrese correctamente el peso de su pareja"));
}
sumapesos = peso1 + peso2;
promediopesos = sumapesos / 2;

alert("Ustedes se llaman : " + nombre1 + " y " + nombre2 + "\n" + 
"Pesan : " + peso1 + " y " + peso2 + " kilos " + "\n" + 
"Que sumados son : " + sumapesos + "kilos" + "\n" + 
"Y el promedio de peso es : " + promediopesos + "kilos");
}
