function mostrar()
{
  
var laHora = parseInt (document.getElementById("hora").value);

    if (laHora < 6) {
        alert ("Es de noche");
    }
    else if (laHora <= 11) {
        alert ("Es de mañana");
    }
    else if (laHora <= 19) {
        alert ("Es de tarde")
    }
    else if (laHora <= 24) {
        alert("Es de noche");
    }
    else if (laHora >24){
        alert ("no es un horario valido");
    }
}



//FIN DE LA FUNCIÓN