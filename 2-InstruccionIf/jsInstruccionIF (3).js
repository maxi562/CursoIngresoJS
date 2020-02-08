function mostrar()
{
//tomo la edad  
var edad;

edad = document.getElementById("edad").value;

if(edad >= 18)
{
        alert("Sos mayor de edad");

}
else//Es el Sino, no llleva condición. Si no se cumple el primero, se cumple el otro
{
    alert("Sos menor de edad");
}
}//FIN DE LA FUNCIÓN