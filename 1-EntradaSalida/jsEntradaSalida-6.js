/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{ //1) declaro variables//

    var numero1;

    var numero2;

    var resultado;

    // 2) de dónde tomo los datos

    numero1 = parseInt ( document.getElementById("numeroUno").value);

    numero2 = parseInt ( document.getElementById("numeroDos").value);

    resultado = numero1 + numero2;

    // 3) Parseint lo que hace es transformar el texto de la variable en document a numero para permitir la suma y 
    //    solo permite sumar números enteros
    

    alert ( " La suma es : " + resultado);

    //aclaracion de parseInt
    // STRING + STRING = STRING
    // STRING + NUMBER = STRING
    // NUMBER + STRING = STRING
    // NUMBER + NUMBER = NUMBER
    




}

