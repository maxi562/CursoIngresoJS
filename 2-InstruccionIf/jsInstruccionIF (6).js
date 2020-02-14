function mostrar()
{
//tomo la edad  

var  edad;

edad = document.getElementById("edad").value;

if(edad >=13 &&  edad <=17)
{
        alert("Sos adolescente");

}

else if (edad <13) {

    alert("Niño");
}
else (
    alert ("adulto")
)
}//FIN DE LA FUNCIÓN