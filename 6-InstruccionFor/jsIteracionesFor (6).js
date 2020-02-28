function mostrar()
{
    var contadorpares = 0;
    var numero = parseInt( prompt("Ingrese un Número"));

    while (isNaN(numero)) {
        numero = parseInt(prompt("Eso no es un numero. Por favor ingrese un numero"));
    }

        for( var i = 1; i <= numero; i++){
            
            if(i % 2 == 0){
                console.log(i);
                contadorpares++;
            }
        }
    console.log("La cantidad de pares encontrada es : " + contadorpares);

   






}//FIN DE LA FUNCIÓN