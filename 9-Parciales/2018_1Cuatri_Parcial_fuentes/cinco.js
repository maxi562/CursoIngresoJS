function mostrar()
{
var planeta;




    planeta = prompt("Ingresar el nombre de un planeta del sistema solar");
    
    while(!(planeta == "venus" || planeta =="mercurio" || planeta == "tierra" ||
planeta == "marte" || planeta =="jupiter" || planeta == "saturno" ||
planeta == "urano" || planeta =="neptuno")){
    planeta = prompt("Ese no es un planeta del sistema solar. recuerde ingresarlo todo en minúscula");
    
}

switch(planeta) {
    case "mercurio" : 
    case "venus" :
    alert("Acá hace más calor");
    break;
    case "tierra":
        alert("Aquí vivimos");
        break;
        case "marte":
            case "jupiter":
                case "saturno":
                    case "urano":
                        case "neptuno":
                            alert("Aquí hace más frío");
                            break;
    
}
}

