function mostrar()
{
    var contadordiv = 0;
    var numero = parseInt( prompt("Ingrese un Número"));

    while (isNaN(numero)) {
        numero = parseInt(prompt("Eso no es un numero. Por favor ingrese un numero"));
    }

        for( var i = 1; i <= numero; i++){
            
            if(numero % i  == 0){
                console.log(i);
                contadordiv++;
            }
        }
    console.log("La cantidad de divisores encontrada es : " + contadordiv);



}//FIN DE LA FUNCIÓN